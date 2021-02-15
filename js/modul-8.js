import imagesObj from "./gallery-items.js";
const ulGallery = document.querySelector("ul.gallery");

const elementLi = imagesObj
  .map(
    (el) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${el.original}>
      <img class="gallery__image" src=${el.preview}
      data-source=${el.original} alt=${el.description}/>
      </a>
      </li>`
  )
  .join("");

ulGallery.insertAdjacentHTML("beforeend", elementLi);
const parentGallery = document.querySelector("ul.js-gallery");
const divLightbox = document.querySelector("div.lightbox");
const imglightbox = document.querySelector("img.lightbox__image");
// parentGallery.addEventListener("click", onParentClick);

// function onParentClick(evt) {
//   imglightbox.src = evt.target.dataset.source;
//   evt.target.parentElement.href = "";
//   divLightbox.classList.add("is-open");
// }

parentGallery.addEventListener("click", (evt) => {
  imglightbox.src = evt.target.dataset.source;
  evt.target.parentElement.href = "";
  divLightbox.classList.add("is-open");
});
// document.getElementsByTagName("body")[0].onclick = function (event) {
//   if (event.target.nodeName === "IMG") {
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

//     divLightbox.classList.add("is-open");
//   }
// };
// console.dir(divLightbox);
