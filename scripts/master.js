const master = document.querySelectorAll('.master__block')
const buttonMaster = document.querySelectorAll('.master__button')
const masterBlock = document.querySelector('.master__blocks')
const indexItemsBlock = document.querySelector(".master__index")


const masterData = [
  {
    i: "KAV.png",
    z: "Аркадий Викторович Ключиков",
    t: `<p class="master__text">> Кандидат технических наук</p>
        <p class="master__text">> Руководитель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 10 лет</p>
        <p class="master__text">> Модуль «Изучение игровых движков и их применение в практической деятельности»</p>
        <p class="master__text">> Робототехник, разработчик на С++ и gamedev</p>`
  },
  {
    i: "MOR.png",
    z: "Александр Юрьевич Моршнев",
    t: `<p class="master__text">> Преподаватель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 3 года</p>
        <p class="master__text">> Ассистент</p>
        <p class="master__text">> Модуль «Основы программирования на языках   высокого уровня»</p>
        <p class="master__text">> Frontend-разработка, станки с ЧПУ, 2D- и 3D-моделирование</p>`
  },
  {
    i: "RDG.png",
    z: "Роман Дмитриевич Гончаров",
    t: `<p class="master__text">> Руководитель центра «Агророботехника и VR/AR»</p>
        <p class="master__text">> Младший научный сотрудник</p>
        <p class="master__text">> Педагогический стаж: 7 лет</p>
        <p class="master__text">> Модуль «​Технологии VR, AR, MR и 360»</p>
        <p class="master__text">> Разработка виртуальной и дополненной реальности</p>`
  },
  {
    i: "EVB.png",
    z: "Екатерина Владимировна Берднова",
    t: `<p class="master__text">> Кандидат педагогических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 22 года</p>
        <p class="master__text">> Модуль «Основы программирования на языках высокого уровня»</p>
        <p class="master__text">> Междисциплинарные исследования, цифровизация образовательного процесса</p>`
  },
  {
    i: "CMR.png",
    z: "Марк Робертович Цагареишвили",
    t: `<p class="master__text">> Преподаватель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 1 год</p>
        <p class="master__text">> Младший научный сотрудник</p>
        <p class="master__text">> Модули «Базовое моделирование и основные инструменты для работы с 3D-объектами», «Полный цикл разработки 3D-моделей»</p>
        <p class="master__text">> 3D-художник, опыт работы в студии по разработке игр</p>`
  },
  {
    i: "RAV.png",
    z: "Александр Владимирович Розанови",
    t: `<p class="master__text">> Кандидат физико-математических наук</p>
        <p class="master__text">> Доцент, старший научный сотрудник</p>
        <p class="master__text">> Педагогический стаж: 46 лет</p>
        <p class="master__text">> Модуль «Основы программирования на языках высокого уровня»</p>
        <p class="master__text">> Цифровое моделирование процессов в сфере АПК</p>`
  },
  {
    i: "IAD.png",
    z: "Александр Дмитриевич Исаев",
    t: `<p class="master__text">> Преподаватель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 1 год</p>
        <p class="master__text">> Модуль «​Базовое моделирование и основные инструменты для работы с 3D объектами»</p>
        <p class="master__text">> 3D-прототипирование, инженерное проектирование и черчение</p>`
  },
  {
    i: "TVP.png",
    z: "Татьяна Владимировна Пахомова",
    t: `<p class="master__text">> Кандидат экономических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 22 года</p>
        <p class="master__text">> Модуль «​Производственная практика»</p>`
  },
  {
    i: "YVL.png",
    z: "Юлия Владимировна Лажаунинкас",
    t: `<p class="master__text">> Кандидат педагогических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 19 лет</p>
        <p class="master__text">> Модуль «​​Основы программирования на языках высокого уровня»</p>
        <p class="master__text">> Цифровизация АПК, цифровые технологии в образовательном процессе</p>`
  },
  {
    i: "LAA.png",
    z: "Алексей Алексеевич Леонтьев",
    t: `<p class="master__text">> Кандидат технических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 16 лет</p>
        <p class="master__text">> Модуль «​​Базовое моделирование и основные инструменты для работы с 3D-объектами»</p>
        <p class="master__text">> САПР и 3D-моделирование в машиностроении</p>`
  },
  {
    i: "PAV.png",
    z: "Андрей Владимирович Перетятько",
    t: `<p class="master__text">> Кандидат технических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 22 лет</p>
        <p class="master__text">> Модуль «​​Основы работы в системах трехмерного проектирования»</p>
        <p class="master__text">> Цифровое 3D-моделирование и прототипирование</p>`
  },
  {
    i: "SLA.png",
    z: "Людмила Анатольевна Слепцова",
    t: `<p class="master__text">> Кандидат экономических наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 20 лет</p>
        <p class="master__text">> Модуль «​​​Разработка графического интерфейса для программного обеспечения»</p>
        <p class="master__text">> Цифровое моделирование процессов в сфере АПК</p>`
  },
  {
    i: "RSN.png",
    z: "Светлана Николаевна Рубцова",
    t: `<p class="master__text">> Кандидат сельскохозяйственных наук</p>
        <p class="master__text">> Доцент</p>
        <p class="master__text">> Педагогический стаж: 24 лет</p>
        <p class="master__text">> Модуль «​​​Разработка графического интерфейса для программного обеспечения»</p>
        <p class="master__text">> Цифровые технологии</p>`
  },
  {
    i: "AAA.png",
    z: "Александр Андреевич Алтарев",
    t: `<p class="master__text">> Преподаватель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 1 лет</p>
        <p class="master__text">> Модули «Базовое моделирование и основные инструменты для работы с 3D-объектами», «Полный цикл разработки 3D-моделей»</p>
        <p class="master__text">> Веб-разработка, станки с ЧПУ, 2D- и 3D-моделирование</p>`
  },
  {
    i: "GYN.png",
    z: "Юрий Николаевич Грепечук",
    t: `<p class="master__text">> Преподаватель Цифровой кафедры</p>
        <p class="master__text">> Педагогический стаж: 7 лет</p>
        <p class="master__text">> Младший научный сотрудник</p>
        <p class="master__text">> Модули «​Основы работы в системах трехмерного проектирования», «​Сборки изделий различной сложности»</p>
        <p class="master__text">> Аддитивные технологии</p>`
  },
]

const createIndex = () => {
  let ind = '<div class="master__index-item master__index-item-active"></div>'
  for(let i = 0; i < masterData.length-1; i++){ 
    ind = ind+'<div class="master__index-item"></div>'
  }
  indexItemsBlock.innerHTML = ind
}

createIndex()

const createMaster = (arr) => {



  const block = `<div class="master__card">
      <div class="master__image" style="background-image: url('../assets/images/${arr.i}');">

      </div>
      <div class="master__text-container">
        <h3 class="master__sub-title">${arr.z}</h3>
        ${arr.t}
      </div>
  </div>`

  return block
}

let indexMaster = 0

function buttonDis (i) {
  if (i === true) {
    buttonMaster[0].disabled = true
    buttonMaster[1].disabled = true
  } else {
    buttonMaster[0].disabled = false 
    buttonMaster[1].disabled = false
  }
}
master[1].innerHTML = createMaster(masterData[0])

buttonMaster.forEach((el, i) => {
  el.addEventListener('click', () => {
    const ind = document.querySelectorAll(".master__index-item")
    buttonDis(true)
    if(i === 0) {
      ind.forEach(e => {
        e.classList.remove("master__index-item-active")
      })
     indexMaster=indexMaster-1;
     indexMaster=indexMaster< 0 ? masterData.length -1 :indexMaster
      master[0].innerHTML = createMaster(masterData[indexMaster]) 
      masterBlock.style.transition = 'all 1s'
      masterBlock.style.left = '0%'
      setTimeout(() => {
        ind[indexMaster].classList.add('master__index-item-active')
      masterBlock.style.transition = 'none'
      masterBlock.style.left = '-100%'
      master[1].innerHTML = createMaster(masterData[indexMaster]) 
        buttonDis(false)
      },1000)
    } else if(i === 1) {
      ind.forEach(e => {
        e.classList.remove("master__index-item-active")
      })
     indexMaster=indexMaster+ 1;
     indexMaster=indexMaster>= masterData.length ? 0 :indexMaster
      master[2].innerHTML = createMaster(masterData[indexMaster]) 
      masterBlock.style.transition = 'all 1s'
      masterBlock.style.left = '-200%'
      setTimeout(() => {
      masterBlock.style.transition = 'none'
      masterBlock.style.left = '-100%'
      ind[indexMaster].classList.add('master__index-item-active')
      master[1].innerHTML = createMaster(masterData[indexMaster]) 
        buttonDis(false)
      },1000)
    }
  })
})






