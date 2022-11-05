import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const list = document.querySelector('.list');
function creareGaleryMurkup(galleryItems) {
	return galleryItems
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item"> <a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" data-source="${original}"
			alt="${description}"/></a></div>`
		)
		.join('');
}

const murkup = creareGaleryMurkup(galleryItems);
list.insertAdjacentHTML('beforeend', murkup);
