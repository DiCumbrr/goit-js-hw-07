import { galleryItems } from './gallery-items.js'
// Change code below this line
const gallery = document.querySelector('.gallery')
const photoGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="'${description}'"
            />
            </a>`
  })
  .join(' ')
gallery.insertAdjacentHTML('beforeend', ` ${photoGallery}`)
const escapeCloseModal = event => {
  if (event.code === 'Escape') {
    window.removeEventListener('keydown', escapeCloseModal)
    document.querySelector('.basicLightbox').remove()
  }
  return
}

const clickImg = evt => {
  evt.preventDefault()
  window.addEventListener('keydown', escapeCloseModal)
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  const instance = basicLightbox.create(
    `<img  src="${evt.target.dataset.source}"></img>`
  )
  instance.show()
}
gallery.addEventListener('click', clickImg)

console.log(galleryItems)

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
