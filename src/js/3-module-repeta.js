// OBJECT ------------------
// const playlist = {
// 	name: 'New-playlist',
// 	rating: 5,
// 	tracks: ['track-1', 'track-2', 'track-3', 'track-4', 'track-5'],
// 	changeName(newName) {
// 		this.name = newName;
// 	},
// 	addTrack(track) {
// 		this.tracks.push(track);
// 	},
// 	updateRating(newRating) {
// 		this.rating = newRating;
// 	},
// 	getTrackCount() {
// 		return this.tracks.length;
// 	},
// };

// playlist.changeName('Modern-music');
// console.log(playlist);

// playlist.addTrack('track-6');
// console.log(playlist);

// playlist.updateRating(10);
// console.log(playlist);

// const feedback = {
// 	good: 5,
// 	neutral: 10,
// 	bad: 3,
// };

// let totalFeedback = 0;

// // Object.values возвращает массив значений------------

// // const values = Object.values(feedback);

// // for (const value of values) {
// // 	totalFeedback += value;
// // }

// // console.log(totalFeedback);

// // Object.keys возвращает массив ключей------------

// const keys = Object.keys(feedback);

// for (const key of keys) {
// 	totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

//////////////////// Массив объектов /////////////////////////////////////

// const friends = [
// 	{
// 		name: 'Igor',
// 		online: false,
// 	},
// 	{
// 		name: 'Ruben',
// 		online: true,
// 	},
// 	{
// 		name: 'Alex',
// 		online: true,
// 	},
// 	{
// 		name: 'Mikky',
// 		online: true,
// 	},
// ];

// console.table(friends);
// const friendsNames = [];
// for (const friend of friends) {
// 	console.log(friend);
// 	friendsNames.push(friend.name);
// }
// console.log(friendsNames);

// const findFriendByName = function (allFriends, name) {
// 	for (const friend of friends) {
// 		if (friend.name === name) {
// 			return console.log('Мы нашли Вашего друга, это-', name);
// 		}
// 	}
// 	return console.log('Мы не нашни Вашего друга-', name);
// };
// findFriendByName(friends, 'Ruden');
// findFriendByName(friends, 'Alex');

// /**
//  *
//  * @param {array} allFriends
//  * @returns
//  */

// const getFriendsByOnlineStatus = function (allFriends) {
// 	const friendsByStatus = {
// 		online: [],
// 		offline: [],
// 	};

// 	for (const friend of friends) {
// 		// let searchResult =
// 		// 	friend.online === true ? friendsByStatus.online.push(friend) : friendsByStatus.offline.push(friend);
// 		// // console.log(searchResult);
// 		if (friend.online) {
// 			friendsByStatus.online.push(friend);
// 			continue;
// 		}
// 		friendsByStatus.offline.push(friend);
// 	}

// 	return friendsByStatus;
// };

// // console.log(getFriendsByOnlineStatus(friends));

// const cart = {
// 	items: [],
// 	getItems() {
// 		return this.items;
// 	},
// 	add(product) {
// 		for (const item of this.items) {
// 			if (item.name === product.name) {
// 				item.quantity += 1;
// 				return;
// 			}
// 		}
// 		const newProduct = {
// 			...product,
// 			quantity: 1,
// 		};

// 		return this.items.push(newProduct);
// 	},
// 	remove(productName) {
// 		const { items } = this;

// 		for (let i = 0; i < items.length; i += 1) {
// 			const { name } = items[i];

// 			if (name === productName) {
// 				console.log('Нашли продукт!', productName);
// 				items.splice(i, 1);
// 				console.log(`Удаление выполнено успешно ${productName}, удалён.`);
// 				// name.quantity -= 1;
// 			}
// 		}
// 		return items;
// 	},
// 	clear() {
// 		this.items = [];
// 		return this.items;
// 	},
// 	countTotalPrice() {
// 		const { items } = this;
// 		let count = 0;
// 		for (const { price, quantity } of items) {
// 			count += price * quantity;
// 		}
// 		return count;
// 	},
// 	increaseQuantity(productName) {
// 		for (const item of this.items) {
// 			if (item.name === productName) {
// 				return (item.quantity += 1);
// 			}
// 		}
// 	},
// 	decreaseQuantity(productName) {
// 		for (const item of this.items) {
// 			if (item.name === productName) {
// 				return (item.quantity -= 1);
// 			}
// 		}
// 	},
// };

// cart.add({ name: 'tomato', price: 45 });
// cart.add({ name: 'orange', price: 80 });
// cart.add({ name: 'watermelon', price: 120 });
// cart.add({ name: 'cucumber', price: 50 });
// cart.add({ name: 'melon', price: 90 });
// cart.add({ name: 'watermelon', price: 120 });
// cart.add({ name: 'watermelon', price: 120 });
// cart.add({ name: 'blackberry', price: 100 });
// cart.add({ name: 'cucumber', price: 50 });
// // cart.remove('orange');

// // cart.remove('melon');
// // console.log(cart);

// // cart.clear();
// // console.log(cart.items);
// // cart.countTotalPrice();

// console.log(cart.countTotalPrice());

// cart.increaseQuantity('watermelon');
// cart.decreaseQuantity('melon');
// const getProductTotalPrice = function ({ price, quantity }) {
// 	return price * quantity;
// };

// console.log(getProductTotalPrice(cart.items[3]));

// console.log(cart);
// Метод CONCAT--------------------------------

// const numbers = [1, 2, 3].concat([7, 8, 9], [4, 5, 6]);
// console.log(numbers);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// console.log(numbers);

//  * Поиск самой маленькой или большой температуры (числа)
//  */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log(a === b);
// console.log(a[0] === b[0]);
// console.log('a: ', a);
// console.log('b: ', b);
/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign(a, { x: 5 }, b); ///Метод объекта для распыления
// console.log(c);

// const c = {
// 	...a,
// 	x: 10,
// 	...b,
// 	y: 20,
// };

// console.log(c);

// const defaultSettings = {
// 	theme: 'light',
// 	showNotifications: true,
// 	hideSidebar: false,
// };

// const userSettings = {
// 	showNotifications: false,
// 	hideSidebar: true,
// };

// const finalSettings = {
// 	...defaultSettings,
// 	...userSettings,
// };

// console.log(finalSettings);

/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
// 	userName: 'Мой супер плейлист',
// 	rating: 5,
// 	tracks: ['трек-1', 'трек-2', 'трек-3'],
// 	trackCount: 3,
// };

// const { rating, tracks, userName, trackCount: numberOfTracks = 0, author = 'user' } = playlist;

// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);

// console.log(userName, rating, tracks, numberOfTracks, author);

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

// const profile = {
// 	name: 'Jacques Gluke',
// 	tag: 'jgluke',
// 	location: 'Ocho Rios, Jamaica',
// 	avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name: userName,
// 	tag,
// 	location: stateLocation,
// 	avatar,
// 	stats: { followers, views, likes },
// } = profile;
// console.log(userName, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const authors = {
// 	kiwi: 4,
// 	poly: 7,
// 	ajax: 9,
// 	mango: 6,
// };

// const entries = Object.entries(authors); // Возвращает массив массивов [kivi, 4]

// // console.log(entries);

// //ур3
// for (const [name, rating] of entries) {
// 	// ур2
// 	// const [name, rating] = entry;

// 	// ур1
// 	// const name = entry[0];
// 	// const rating = entry[1];

// 	console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
// 	name: 'Jacques Gluke',
// 	tag: 'jgluke',
// 	location: 'Ocho Rios, Jamaica',
// 	avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// console.log(profile);

// const { name: userName, tag, location: stateLocation, ...restProps } = profile;

// console.log(userName, tag, stateLocation);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const showProfileInfo = function (userProfile) {
// 	const { name, tag, location, ...restProps } = userProfile;

// 	// console.log(name, tag, location, avatar, followers, views, likes);
// 	console.log(restProps);
// };

// const showProfileInfo = function ({ name, tag, location, avatar, stats: { followers, views, likes } }) {
// 	console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
// 	name: 'Jacques Gluke',
// 	tag: 'jgluke',
// 	location: 'Ocho Rios, Jamaica',
// 	avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// showProfileInfo(profile);
