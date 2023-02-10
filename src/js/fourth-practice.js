// import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

// const list = document.querySelector('.list');
// function creareGaleryMurkup(galleryItems) {
// 	return galleryItems
// 		.map(
// 			({ preview, original, description }) =>
// 				`<div class="gallery__item"> <a class="gallery__link" href="${original}">
// 		<img class="gallery__image" src="${preview}" data-source="${original}"
// 			alt="${description}"/></a></div>`
// 		)
// 		.join('');
// }

// const murkup = creareGaleryMurkup(galleryItems);
// list.insertAdjacentHTML('beforeend', murkup);

const books = [];

const rootEl = document.querySelector('#root');

const prevEL = document.createElement('div');
prevEL.classList.add('first');
const nextEL = document.createElement('div');
nextEL.classList.add('second');

rootEl.append(prevEL, nextEL);

const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Library';
const listEl = document.createElement('ul');
const btnEl = document.createElement('button');
btnEl.textContent = 'add book';

prevEL.append(mainTitle, listEl, btnEl);
