import { galleryItems } from './gallery-items.js'
// Change code below this line
const gallery = document.querySelector('.gallery')
const photoGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li>
            <a class="gallery__link" href="${original}">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    alt = "'${description}'"
                />
            </a>
        </li> `
  })
  .join(' ')
gallery.insertAdjacentHTML('beforeend', ` ${photoGallery}`)

var lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'alt',
  captionsData: 'alt',
  captionDelay: 250
})

console.log(galleryItems)

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const gallery = document.querySelector('.gallery');

// const createLi = galleryItems
//   .map(
//     (elem) =>
//       `<a class="gallery__item" href="${elem.original}" srs = "${elem.original}"><img src = '${elem.preview}' class="gallery__image"  title = '${elem.description}'></a>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeEnd', createLi);

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
// });
