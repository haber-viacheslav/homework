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