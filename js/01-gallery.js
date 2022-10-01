import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const photoGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="'${description}'"
            />
            </a>`;
  })
  .join(' ');
gallery.insertAdjacentHTML('beforeend', ` ${photoGallery}`);

// const escapeCloseModal = event => {
//   if (event.code === 'Escape') {
//     window.removeEventListener('keydown', escapeCloseModal)
//     document.querySelector('.basicLightbox').remove()
//   }
//   return
// }

function clickImg({ target }) {
  evt.preventDefault();
  console.log(evt.target.dataset.source);
  if (target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img  src="${target.dataset.source}" width ="800" height="600">`,
  );
  instance.show();

  window.addEventListener('keydown', onEscapePress);
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscapePress);
    console.log(event.code);
  }
  const instance = basicLightbox.create(
    `<img src="${galleryOriginalUrl}" width="800" height="600">`,
    {
      onShow: instance => {
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            return instance.close();
          }
        });
      },
      onClose: instance => {
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            return instance.close();
          }
        });
      },
    },
  );
  instance.show();
}

// import { galleryItems } from './gallery-items.js'

// const gallery = document.querySelector('.gallery')

// const createLi = galleryItems
//   .map(
//     elem =>
//       `<a class="gallery__link"><img src = '${elem.preview}' class="gallery__image" alt='${elem.description}'  data-secondSrc=${elem.original}'></a>`
//   )
//   .join('')

// gallery.innerHTML = createLi

// const showBigPicture = evn => {
//   const imgBigSizeValue = evn.target.dataset.secondsrc

//   const instance = basicLightbox
//     .create(
//       `
//   	<img width="1400" height="900" src="${imgBigSizeValue}">
//     `,
//       {
//         onShow: instance => {
//           const checkFunk = event => {
//             if (event.code == 'Escape') {
//               instance.close(document.removeEventListener('keydown', checkFunk))
//             }
//           }
//           document.addEventListener('keydown', checkFunk)
//         }
//       }
//     )
//     .show()
// }

// gallery.addEventListener('click', showBigPicture)
