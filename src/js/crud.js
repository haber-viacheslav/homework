// GET это просто fetch
const BASE_URL = 'http://localhost:3000';

// function fetchBooks() {
// 	return fetch(`${BASE_URL}/books`)
// 		.then(response => response.json())
// 		.then(console.log);
// }

// function fetchBookById(bookId) {
// 	return fetch(`${BASE_URL}/books/${bookId}`)
// 		.then(response => response.json())
// 		.then(console.log);
// }

// fetchBooks();
// fetchBookById(3);

// POST

const newBook = {
	title: 'Java Script and CSS',
	author: 'Дэвид Флэнаган',
	genres: ['JS', 'CSS'],
	rating: 9.3,
};

const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(newBook),
};

fetch(`${BASE_URL}/books`, options)
	.then(response => response.json())
	.then(console.log);
