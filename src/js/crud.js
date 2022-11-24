// GET это просто fetch
const BASE_URL = 'http://localhost:3000';

// function fetchBooks() {
// 	return fetch(`${BASE_URL}/books`).then(response => response.json());
// }

// console.log(fetchBooks().then(result => result));

// function fetchBookById(bookId) {
// 	return fetch(`${BASE_URL}/books/${bookId}`)
// 		.then(response => response.json())
// 		.then(console.log);
// }

// fetchBooks();
// fetchBookById(3);

// POST

// const newBook = {
// 	title: 'Java Script and CSS',
// 	author: 'Дэвид Флэнаган',
// 	genres: ['JS', 'CSS'],
// 	rating: 9.3,
// };

// function createBook(book) {
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(book),
// 	};

// 	return fetch(`${BASE_URL}/books`, options).then(response =>
// 		response.json()
// 	);
// }

// createBook(newBook).then(renderBook);

// function renderBook(book) {
// 	console.log('Пришёл ответ! будем рисовать разметку');
// 	console.log(book);
// }

// PATCH

// const newCnangeInBook = {
// 	title: 'React',
// 	genres: ['JS', 'React'],
// };

// function changeBook(book, id) {
// 	const options = {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(book),
// 	};

// 	return fetch(`${BASE_URL}/books/${id}`, options).then(response =>
// 		response.json()
// 	);
// }

// changeBook(newCnangeInBook, 6)
// 	.then(console.log)
// 	.catch(error => console.error(error));

// DELETE

// function deleteBookById(bookId) {
// 	const options = {
// 		method: 'DELETE',
// 	};
// 	return fetch(`${BASE_URL}/books/${bookId}`, options).then(response =>
// 		response.json()
// 	);
// }

// // console.log(dataBaseLength());

// deleteBookById(21);
// deleteBookById(22);
