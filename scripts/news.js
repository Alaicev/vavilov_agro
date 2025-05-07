const buttons = document.querySelectorAll(".button__news")
const block = document.querySelector(".news__blocks-continer")

let id = 0
const video = [
  '<iframe src="https://vkvideo.ru/video_ext.php?oid=-224989474&id=456239076&hd=2&autoplay=1" width="500" height="300" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="" allowfullscreen></iframe>',
  '<iframe src="https://vkvideo.ru/video_ext.php?oid=-224989474&id=456239078&hd=2&autoplay=1" width="500" height="300" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen style="object-fit: cover"></iframe>',
  '<iframe src="https://vkvideo.ru/video_ext.php?oid=-224989474&id=456239077&autoplay=1" width="500" height="300" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
]

const title = [
  'Видеовизитка проекта «Цифровая кафедра» Вавиловского университета',
  'Экскурсия в ООО "Инфобис"',
  'Интервью слушателей курса "Системы искусственного интеллекта и программирования"'
]

const text = [
  'На «цифровой кафедре» Вавиловского университета изучают системы искусственного интеллекта и программирования. Среди преподавателей — сотрудники кафедры «Цифровое управление процессами в АПК», специалисты фирмы «Инфобис», а также разработчики из «Сбермегамаркета» и Grid Dynamics. ',
  'После прохождения практики по проекту "Цифровая кафедра" в Вавиловском университете, наиболее активные студенты посетили с экскурсией офис, где создается программный продукт "Агросигнал" Студенты обменялись контактами с HR и были приглашены на собеседования.',
  'Интервью слушателей в рамках курса переподготовки по проекту "Цифровая кафедра" Саратовского государственного университета генетики, биотехнологии и инженерии имени Н. И. Вавилова. Вопросы к слушателям, связанные с оценкой качества преподнесения материала и курса в целом.'
]

const blockInfo = (video, title, text) => {
  return `
  <div class="news__video">
                ${video}
              </div>
              <div class="news__text-container">
                <h3 class="news__sub-title">${title}</h3>
                <p class="news__text">${text}</p>
              </div>
`
}

block.innerHTML = blockInfo(video[id], title[id], text[id])

buttons.forEach(e => {
  e.addEventListener("click", () => {
    if (e.id == id) {
      return
    } 
    buttons.forEach(a => {
      a.classList.remove("news__buttons-container-activiti")
    })
    e.classList.add("news__buttons-container-activiti")
    id = e.id
    block.innerHTML = blockInfo(video[id], title[id], text[id])
  })
})