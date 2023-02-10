// async

// async function f1() {
// 	return await fetch('http://localhost:3000/books/1');

// 	// .then(response => {
// 	// 	if (response.ok) {
// 	// 		return response.json();
// 	// 	}
// 	// 	throw new Error(Error);
// 	// })
// 	// .then(data => console.log(data))
// 	// .catch(error => console.log(error));
// }

// async function f2() {
// 	return await fetch('http://localhost:3000/books/2');
// }

// async function f3() {
// 	return await fetch('http://localhost:3000/books/3');
// }

// async function go() {
// 	let a = await f1()
// 		.then(response => {
// 			if (response.ok) {
// 				return response.json();
// 			}
// 			throw new Error(Error);
// 		})
// 		.then(data => console.log(data));

// 	let b = await f2()
// 		.then(response => {
// 			if (response.ok) {
// 				return response.json();
// 			}
// 			throw new Error(Error);
// 		})
// 		.then(data => console.log(data));

// 	let c = await f3()
// 		.then(response => {
// 			if (response.ok) {
// 				return response.json();
// 			}
// 			throw new Error(Error);
// 		})
// 		.then(data => console.log(data));
// }

// go();

// Repeta

//try - catch
// GET это просто fetch

// function getFruit(name) {
// 	const fruits = {
// 		strawberry: '🍓',
// 		kiwi: '🥝 ',
// 		apple: '🍎',
// 	};

// 	return new Promise((resolve, reject) =>
// 		setTimeout(() => resolve(fruits[name]), 500)
// 	);
// }

// async function aMakeSmoothie() {
// 	try {
// 		console.time('aMakeSmoothie');
// 		const apple = getFruit('apple');
// 		const kiwi = getFruit('kiwi');
// 		const berry = getFruit('strawberry');

// 		const fruits = await Promise.all([apple, kiwi, berry]);
// 		// console.log(fruits);
// 		console.timeEnd('aMakeSmoothie');

// 		return fruits;
// 	} catch (error) {
// 		console.log('Ошибка');
// 	}
// }

// aMakeSmoothie().then(console.log);

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }

const BASE_URL = 'http://localhost:3000';

// async function fetchBooks() {
// 	const books = (await fetch(`${BASE_URL}/books`)).json();
// 	return books;
// }

// async function fetchBookById(bookId) {
// 	const book = (await fetch(`${BASE_URL}/books/${bookId}`)).json();
// 	return book;
// }

// fetchBooks().then(console.log);
// fetchBookById(4).then(console.log);

// POST

// const newBook = {
// 	title: 'Java Script and CSS',
// 	author: 'Дэвид Флэнаган',
// 	genres: ['JS', 'CSS'],
// 	rating: 9.3,
// };

// async function createBook(book) {
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(book),
// 	};

// 	return (await fetch(`${BASE_URL}/books`, options)).json();
// }

// async function renderBook(book) {
// 	try {
// 		await createBook(newBook).then(console.log);
// 		console.log('Пришёл ответ! будем рисовать разметку');
// 		console.log(book);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// renderBook();
// PATCH

const newCnangeInBook = {
	title: 'React',
	genres: ['JS', 'React'],
};

async function changeBook(book, id) {
	const options = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(book),
	};

	return (await fetch(`${BASE_URL}/books/${id}`, options)).json();
}

changeBook(newCnangeInBook, 6)
	.then(console.log)
	.catch(error => console.error(error));

// DELETE

async function deleteBookById(bookId) {
	const options = {
		method: 'DELETE',
	};
	const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
	return response;
}

// console.log(dataBaseLength());

deleteBookById(23);
deleteBookById(24);
