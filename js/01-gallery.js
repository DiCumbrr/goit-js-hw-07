import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createLi = galleryItems
  .map(
    (elem) =>
      `<a class="gallery__link"><img src = '${elem.preview}' class="gallery__image" alt='${elem.description}'  data-secondSrc=${elem.original}'></a>`
  )
  .join('');

gallery.innerHTML = createLi;

const showBigPicture = (evn) => {
  const imgBigSizeValue = evn.target.dataset.secondsrc;

  const instance = basicLightbox
    .create(
      `
  	<img width="1400" height="900" src="${imgBigSizeValue}">
    `,
      {
        onShow: (instance) => {
          const checkFunk = (event) => {
            if (event.code == 'Escape') {
              instance.close(
                document.removeEventListener('keydown', checkFunk)
              );
            }
          };
          document.addEventListener('keydown', checkFunk);
        },
      }
    )
    .show();
};

gallery.addEventListener('click', showBigPicture);
