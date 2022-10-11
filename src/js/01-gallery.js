import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');



const createLi = galleryItems
  .map(
    elem =>
      `<a class="gallery__link">
      <img src = '${elem.preview}'
       class="gallery__image" alt='${elem.description}'
       data-secondSrc=${elem.original}>
       </a>`,
  )
  .join('');

// gallery.insertAdjacentHTML('beforeEnd', createLi);
gallery.innerHTML = createLi;

const showBigPicture = evn => {

let imgBigSizeValue = evn.target.dataset.secondsrc;

if(evn.target.className == 'gallery__image'){
  const instance = basicLightbox
    .create( `<img width="1400" height="900" src="${imgBigSizeValue}">`,
  {
    onShow: instance => {
      document.addEventListener('keydown', checkFunk);
    },
    onClose: instance => {
      document.removeEventListener('keydown', checkFunk);
    },
  },  
)

let checkFunk = event => {
  if (event.code == 'Escape') {
      instance.close()
  }
};

instance.show()

}

};



gallery.addEventListener('click', showBigPicture);

