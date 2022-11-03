// const instruments = [
// 	{
// 		id: 1,
// 		img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
// 		name: 'Молоток',
// 		price: 150,
// 	},
// 	{
// 		id: 2,
// 		img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
// 		name: 'Перфоратор',
// 		price: 3000,
// 	},
// 	{
// 		id: 3,
// 		img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
// 		name: 'Рівень',
// 		price: 2000,
// 	},
// ];

// const basket = [];
// const favorites = [];
// const list = document.querySelector('.list');
// const markup = instruments
// 	.map(
// 		({ id, img, name, price }) => `<li data-id="${id}"class="list__item">
// 				<img src="${img}" alt="${name}" class="list__item-img" width="300">
// 				<h2 class="list__item-title">${name}</h2>
// 				<p class="list__item-descr">${price}</p>
// 				<div class="btn-container">
// 					<button class="js-add">Buy</button>
// 					<button class="js-favorite">Favorite</button>
// 					<button class="js-delete" disabled>Delete</button>
// 				</div>
// 			</li>`
// 	)
// 	.join('');
// list.insertAdjacentHTML('beforeend', markup);

// list.addEventListener('click', OnClickBtn);

// function OnClickBtn(evt) {
// 	// console.log(evt.target);
// 	// console.log(evt.currentTarget);
// 	const currentIdx = Number(evt.target.closest('.list__item').dataset.id);
// 	if (evt.target.classList.contains('js-add')) {
// 		const currentProduct = {
// 			...instruments.find(({ id }) => id === currentIdx),
// 		};
// 		const inBasket = basket.find(({ id }) => id === currentIdx);
// 		if (!inBasket) {
// 			currentProduct.quantity = 1;
// 			basket.push(currentProduct);
// 			evt.target.parentElement.lastElementChild.removeAttribute(
// 				'disabled'
// 			);
// 		} else {
// 			inBasket.quantity += 1;
// 		}

// 		console.log(basket);
// 		// console.log(instruments);
// 	}

// 	if (evt.target.classList.contains('js-favorite')) {
// 		// const currentIdx = Number(evt.target.closest('.list__item').dataset.id);

// 		const currentProduct = {
// 			...instruments.find(({ id }) => id === currentIdx),
// 		};
// 		const inFavorites = favorites.find(({ id }) => id === currentIdx);
// 		if (!inFavorites) {
// 			favorites.push(currentProduct);
// 		}

// 		console.log(favorites);
// 	}

// 	if (evt.target.classList.contains('js-delete')) {
// 		const currentIdx = Number(evt.target.closest('.list__item').dataset.id);
// 		const idxInBasket = basket.findIndex(({ id }) => id === currentIdx);
// 		// console.log(idxInBasket);
// 		// console.log(!~idxInBasket);
// 		basket.splice(idxInBasket, 1);
// 		console.log(basket);
// 		evt.target.setAttribute('disabled', true);

// 		// if (!!~idxInBasket) {
// 		// 	console.log(evt.target.getAttribute('disabled'));
// 		// 	evt.target.removeAttribute('disabled');
// 		// }
// 	}
// }

// console.log(markup);

// const markup = instruments.map(({
//     id,
//     img,
//     name,
//     price
// }) => `
// <li data-id='${id}'>
// <img src="${img}" alt="${name}" width="300px">
//     <h2>${name}</h2>
//     <p>${price}</p>
//     <div>
//     <button class="js-add">Купити</button>
//     <button class="js-favorite">В обране</button>
//     <button class="js-delete" disabled>Delete</button>
//     </div>
// </li>`).join('')
// list.insertAdjacentHTML('beforeend', markup);
// list.addEventListener('click', onClick);

// function onClick(evt) {
//     if (evt.target.classList.contains('js-add')) {
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         console.log(currentIdx);
//         const currentProduct = {
//             ...instruments.find(({
//                 id
//             }) => id === currentIdx)
//         };
//         const inBasket = basket.find(({
//             id
//         }) => id === currentIdx);
//         if (!inBasket) {
//             currentProduct.qty = 1;
//             basket.push(currentProduct)
//             console.dir(evt.target);
//             evt.target.parentElement.lastElementChild
//             .removeAttribute('disabled');
//         } else {
//             inBasket.qty += 1;
//         }
//         console.log(basket);
//     }

//     if (evt.target.classList.contains('js-delete')) {
//         console.dir(evt.target.closest('li'));
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         const idxInBasket = basket.findIndex(({
//             id
//         }) => id === currentIdx)
//         basket.splice(idxInBasket, 1)
//         evt.target.setAttribute('disabled', true)
//         console.log(basket)
//     }
// }

// const content = document.querySelector('.content');
// const restart = document.querySelector('.js-restart')

// let player = "X";
// const win = [
//     [1, 2, 3],
//     [3, 6, 9],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7]
// ];

// function createMarkup() {
//     let markup = '';
//     for (let i = 1; i <= 9; i += 1) {
//         markup += `<div class="item" data-id="${i}"></div>`
//     }

//     return markup
// }

// content.insertAdjacentHTML('beforeend', createMarkup());
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart)

// function onClick(evt) {
//     if (!evt.target.textContent) {
//         evt.target.textContent = player;
//         player = player === "X" ? "O" : "X";
//     } else {
//         alert('Change!!!')
//     }

// }

// function onRestart() {
//     player = "X";
//     content.innerHTML = createMarkup();
// }

// const input = document.querySelector('input');
// const add = document.querySelector('.create');
// const des = document.querySelector('.destroy');
// const boxes = document.querySelector('#boxes');
// let size = 30;
// add.addEventListener('click', onClick);
// des.addEventListener('click', onDestroy);

// function onClick() {
// 	const total = input.value;
// 	// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
// 	const markup = [];
// 	for (let i = 1; i <= total; i += 1) {
// 		size += 10;
// 		const div = document.createElement('div');
// 		div.style.width = size + 'px';
// 		div.style.height = size + 'px';
// 		div.style.backgroundColor = getRandomHexColor();
// 		markup.push(div);
// 	}
// 	boxes.append(...markup);
// }

// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215)
// 		.toString(16)
// 		.padStart(6, 0)}`;
// }

// function onDestroy() {
// 	// while (boxes.firstChild) {
// 	//     boxes.firstChild.remove();
// 	//   }
// 	input.value = '';
// 	boxes.innerHTML = '';
// 	size = 30;
// }

// const arr = ['реклама', 'гойда', 'мопед', 'купи'];

// setInterval(() => {
// 	const random = Math.round(Math.random() * 3);
// 	console.log(arr[random]);
// 	input.value = arr[random];
// }, 500);

// 2 PART --------------------------------------------------------------------------

// const cats = [
// 	'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
// 	'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
// 	'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
// 	'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
// 	'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
// 	'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
// 	'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
// 	'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
// 	'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
// 	'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
// 	'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
// 	'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
// ];

// const list = document.querySelector('.list');
// const murkup = cats
// 	.map(
// 		cat =>
// 			`<li><img src="${cat}" alt="cat" width="800" loading="lazy"></li>`
// 	)
// 	.join('');
// list.insertAdjacentHTML('beforeend', murkup);

// const ref = {
// 	countRef: document.querySelector('.count'),
// };
// ref.countRef.style.position = 'fixed';
// ref.countRef.style.color = 'red';
// ref.countRef.style.fontSize = '40px';
// ref.countRef.style.top = '40px';
// ref.countRef.style.right = '40px';
// const countInnerEl = ref.countRef.firstElementChild;
// // document.addEventListener('scroll', _.throttle(onScroll, 1000));
// // let count = 0;
// // function onScroll() {
// // 	count += 1;
// // 	countInnerEl.textContent = count;
// // }

// document.addEventListener(
// 	'scroll',
// 	_.debounce(onScroll, 1000, {
// 		trailing: true, // Параметр! В конце события-----------------------------------
// 		leading: true, // Параметр! В начале события-----------------------------------
// 	})
// );
// let count = 0;
// function onScroll() {
// 	count += 1;
// 	countInnerEl.textContent = count;
// }

// const markup = cats.map(item => `<li><img src="${item}" alt="cat" width="300px">  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cumque quos, necessitatibus provident id perspiciatis dolor omnis dignissimos minus aspernatur magnam incidunt corrupti fugiat quo maiores quia suscipit nihil facere.
// Possimus at quod vero eveniet soluta odio enim harum magni, temporibus blanditiis voluptatum aliquid tempora. Excepturi quo quos ratione, eveniet impedit quasi nostrum quia error modi optio illo vel dolorum?
// Doloremque ut dolor ipsum non illo quibusdam corporis vitae magni eveniet iure. Quia reiciendis sunt dolore delectus quo numquam, ipsa at architecto. Quasi incidunt eum reiciendis tenetur voluptatum sequi cupiditate!
// Reiciendis vitae aut quibusdam obcaecati consequuntur in aliquam magni molestias deleniti ipsam non laboriosam odio magnam nesciunt, iure fugit est possimus sit porro nobis? Corrupti nostrum nam cumque dolore tempore!
// Omnis, nesciunt illum quas dolorem, vel recusandae quo corrupti corporis non debitis velit harum, expedita saepe itaque autem beatae earum neque fuga ducimus! Dolorem totam error eaque quia, nisi sit!</p></li>`).join('');
// list.insertAdjacentHTML('beforeend', markup)

// // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// document.addEventListener("scroll", _.debounce(onScroll, 300, {
//     leading : false, //На початку івента
//     trailing: true,//Після відпрацювання івенту
// }))
// let i = 0

// function onScroll(evt) {
//     console.log(evt);
//     i += 1
//     console.log(i);
// }
// leading=true] (boolean): Specify invoking on the leading edge of the timeout.
// [options.trailing=true

// new SimpleLightbox('.some a', {
// 	/* options */
// });
// const instance = basicLightbox.create(
// 	`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `,
// 	{
// 		onShow: instance => {
// 			console.log('hello world');
// 		},
// 	}
// );
// instance.show();
// const input = document.querySelector('input');
// input.addEventListener(
// 	'input',
// 	_.throttle(onInput, 700, {
// 		leading: true, //На початку івента
// 		trailing: true, //За проміжок виконання
// 	})
// );

// function onInput(evt) {
// 	console.log(evt.target.value);
// }

// document.addEventListener('scroll', _.throttle(onScroll, 800));
// function onScroll(evt) {
// 	console.log('Throttle work');
// }

// const divEl = document.querySelector('.din');

// const listEl = document.createElement('ul');
// listEl.classList.add('list', 'active');
// listEl.textContent = 'Food';
// listEl.setAttribute = 'data-list';
// listEl.setAttribute = 'data-list';
// listEl.dataset.list = 'true';
// listEl.style.listStyle = 'none';
// listEl.style.fontSize = '25px';
// console.log(listEl.dataset);
// console.log(listEl.attributes);
// console.log(listEl.classList);
// const listItemEl = document.createElement('li');
// listItemEl.textContent = 'Apple';
// listItemEl.classList.add('list__item');
// const listElements = [];
// const listElementsText = ['Apple', 'Banana', 'Orange', 'Kivi', 'Lime'];
// for (let i = 0; i < 5; i += 1) {
// 	const itemEl = document.createElement('li');
// 	itemEl.textContent = listElementsText[i];
// 	itemEl.style.fontSize = '18px';
// 	listElements.push(itemEl);
// }
// listEl.append(...listElements);
// console.log(listEl);
// divEl.append(listEl);
