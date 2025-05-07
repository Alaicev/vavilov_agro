const carusel = document.querySelectorAll('.carusel__block')
const buttonCourse = document.querySelectorAll('.carusel__button')
const caruselBlock = document.querySelector('.carusel__blocks')



const imageArray = [
  'VR_AR.png',
  'IoT.jpg',
  'BAS.png',
  'Robotics.png',
  'Bio.png',
  'Agro.png',
]

const titleArray = [
  'Виртуальная и дополненная реальность в АПК',
  'Интернет вещей в агроинженерии',
  'Геоинформационные системы и технологии управления беспилотными авиационными системами (БАС)',
  'Сервисные роботы и техническое зрение для сельского хозяйства',
  'Интеллектуальный анализ данных в биоинженерии',
  'Интеллектуальный анализ данных в агробизнесе'
]

const textArray = [
  'Прохождение курса переподготовки позволит приобрести практические навыки в 3D-моделировании как инженерной, так и графической направленности. Знания основ проектирования, скульптинга и текстурирования применяются для разработки моделей, используемых в 3D-печати, индустрии видеоигр, компьютерном моделировании. Вторая часть программы познакомит Вас с возможностями современного игрового движка Unity, на базе которого возможна разработка кроссплатформенных приложений, в том числе в сфере виртуальной и дополненной реальности (VR/AR). Применение приобретенных навыков позволит слушателю получить квалификацию "Программист" и разрабатывать программные решения в своей профессиональной сфере деятельности.',
  'Навыки, полученные при прохождении программы, позволят применять технологии умного производства и Интернета вещей, обеспечивать m2m коммуникации. Вы научитесь внедрять платформы интернета вещей и обеспечивать удаленное управление индустриальными объектами. По результатам обучения можно работать оператором АСУ ТП. Автоматизировать производственные линии. Быть востребованным специалистом в современной индустрии 4.0.',
  'Программа «Геоинформационные системы и технологии управления беспилотными авиационными системами (БАС)» готовит специалистов, способных разрабатывать и применять геоинформационные технологии для эффективного управления беспилотными летательными аппаратами. Студенты изучат основы работы с пространственными данными, дистанционного зондирования Земли, картографии, а также принципы проектирования, навигации и эксплуатации БАС.',
  'Применение робототехнических систем является приоритетным направлением развития Российской Федерации. Разработка и внедрение роботов требует междисциплинарных навыков в микроэлектронике и приводах, проектировании и конструировании, а также в программировании и составлении алгоритмов. В процессе обучения студенты получат навыки программирования микроконтроллеров и использования Robot Operating System для построения экосистемы робота, обучатся применять машинное зрение для обнаружения объектов и использовать нейросети для их классификации.',
  'Программа «Интеллектуальный анализ данных в биоинженерии» готовит специалистов, способных применять методы анализа больших данных для решения задач в области биоинженерии.  Студенты изучат методы обработки и анализа биологических данных, используя  машинное обучение,  глубокое обучение,  статистический анализ и другие современные методы.',  
  'Программа «Интеллектуальный анализ данных в агробизнесе"  готовит специалистов, способных применять методы анализа больших данных для решения экономических задач. Студенты изучат методы обработки и анализа экономических данных, используя машинное обучение, статистический анализ,  глубокое обучение и другие современные методы. Обучение включает  разработку моделей прогнозирования экономических показателей,  анализ рыночных трендов,  оценку рисков и  другие задачи, требующие работы с большими объемами данных. Выпускники смогут эффективно использовать инструменты интеллектуального анализа данных для принятия обоснованных решений в сфере агробизнеса.'
]
const fileArray = [
  'VRAR.pdf',
  'IoT.pdf',


  // TODO: Добавить новые 

  "In_development.pdf",
  "In_development.pdf",
  "In_development.pdf",
  "In_development.pdf",
]

const createBlock = (image, title, text, file) => {

  const url = `../assets/images/${image}`
  const filei = `../assets/files/${file}`

  const block = `<div class="card__item">
    <div class="content__card">
      <div class="image__card" style="background-image: url('${url}')"></div>
      <div class="text__card-container">
        <h3 class="title__card"> ${title} </h3>
        <div class="text__card">${text}</div>
      </div>
    </div>
    <div class="links__card">
      <a href='${filei}'>Ознакомиться</a>
      <a href="#form">Записаться</a>
    </div>
  </div>`

  return block
}

let index = 1

function buttonDis (i) {
  if (i === true) {
    buttonCourse[0].disabled = true
    buttonCourse[1].disabled = true
  } else {
    buttonCourse[0].disabled = false 
    buttonCourse[1].disabled = false
  }
}
carusel[1].innerHTML = createBlock(imageArray[index],titleArray[index],textArray[index], fileArray[index])
// carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`

buttonCourse.forEach((el, i) => {
  el.addEventListener('click', () => {
    buttonDis(true)
    if(i === 0) {
      index = index -1;
      index = index < 0 ? imageArray.length -1 : index 
      carusel[0].innerHTML = createBlock(imageArray[index],titleArray[index],textArray[index], fileArray[index]) 
      // carusel[0].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '0%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
      carusel[1].innerHTML = createBlock(imageArray[index],titleArray[index],textArray[index], fileArray[index]) 
        // carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    } else if(i === 1) {
      index = index + 1;
      index = index >= imageArray.length ? 0 : index 
      carusel[2].innerHTML = createBlock(imageArray[index],titleArray[index],textArray[index], fileArray[index]) 
      // carusel[2].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '-200%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
      carusel[1].innerHTML = createBlock(imageArray[index],titleArray[index],textArray[index], fileArray[index]) 
        // carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    }
  })
})





