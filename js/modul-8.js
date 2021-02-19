import imagesObj from "./gallery-items.js";
//переменные:  массив ссылок на картинки и индекс
//для релизации задачи пролистывания изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
var collectionImg = imagesObj.map((img) => img.original);
var currentIndexImg = 0;
//переменные для работы с разметкой для обработкой событий
const refs = {
  ulGallery: document.querySelector(".js-gallery"),
  divLightbox: document.querySelector(".js-lightbox"),
  imglightbox: document.querySelector("img.lightbox__image"),
  btnLightbox: document.querySelector("button.lightbox__button"),
};

//добавление тегов разметки, используя шаблонные строки и insertAdjacentHTML().
const elementLi = createElementImg.call(imagesObj);

refs.ulGallery.insertAdjacentHTML("beforeend", elementLi);
//Открытие модального окна по клику на элементе галереи
refs.ulGallery.addEventListener("click", ulGalleryClick);
//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
refs.btnLightbox.addEventListener("click", btnCloseClick);
//Закрытие модального окна по клику на div.lightbox__overlay
refs.divLightbox.addEventListener("click", btnCloseClick);
//Обработка событий при нажатии клавиш Escape, ArrowLeft, ArrowRight - закрытие модального окна и пролистывание картинок
window.addEventListener("keydown", keyboardEvent);

//функция добавления разметки
function createElementImg() {
  return this.map(
    (el) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${el.original}>
      <img class="gallery__image" src=${el.preview}
      data-source=${el.original} alt=${el.description}/>
      </a>
      </li>`
  ).join("");
}

//функция обработки события нажатия на картинку из галереи
function ulGalleryClick(evt) {
  const isGallery__image = evt.target.classList.contains("gallery__image");
  if (!isGallery__image) {
    return;
  }
  addClass(); //модальное окно активно
  evt.preventDefault();
  refs.imglightbox.src = evt.target.dataset.source;
  currentIndexImg = collectionImg.indexOf(refs.imglightbox.src);
}
//функция обработки событий от нажатия клавиш
function keyboardEvent(evt) {
  switch (evt.keyCode) {
    case 27: //Закрытие модального окна по клику на Escape
      removeClass();
      break;
    case 37: //при нажатии клавиши "Влево"
      if (currentIndexImg === 0) {
        currentIndexImg = collectionImg.length - 1;
      } else {
        currentIndexImg -= 1;
      }
      refs.imglightbox.src = collectionImg[currentIndexImg];
      break;
    case 39: //при нажатии клавиши "Вправо"
      if (currentIndexImg === collectionImg.length - 1) {
        currentIndexImg = 0;
      } else {
        currentIndexImg += 1;
      }
      refs.imglightbox.src = collectionImg[currentIndexImg];
  }
}
//функция для кнопки "закрыть"
function btnCloseClick(evt) {
  const islightbox__image = evt.target.classList.contains("lightbox__image");
  if (islightbox__image) {
    return;
  }
  removeClass(); //модальное окно неактивно
}

//добавление класса "is-open"
function addClass() {
  refs.divLightbox.classList.add("is-open");
}
//удаление класса "is-open"
function removeClass() {
  refs.divLightbox.classList.remove("is-open");
  refs.imglightbox.src = "";
}
