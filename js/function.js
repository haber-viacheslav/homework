// const add = function () {
// 	console.log('Выполненяется функции add');
// };

// add();
// add();
// add();
// add();
// add();
// add();

// function find_average(array) {
// 	let average;
// 	let sum = 0;

// 	for (const arr of array) {
// 		sum += arr;
// 	}
// 	average = sum !== 0 ? (sum /= array.length) : 0;

// 	return average;
// }

// function find_average(array) {
// 	let average;
// 	let sum = 0;

// 	for (const arr of array) {
// 		sum += arr;
// 	}
// 	average = sum !== 0 ? (sum /= array.length) : 0;
// 	return average;
// }

// function find_average(array) {
// 	if (array.length === 0) {
// 		return 0;
// 	}
// 	var result = 0;
// 	for (i = 0; i < array.length; i++) {
// 		result += array[i];
// 	}
// 	return result / array.length;
// }

// function find_average(array) {
// 	let i;
// 	let total = 0;
// 	for (i = 0; i < array.length; i += 1) {
// 		if (array.length === 0) {
// 			return 0;
// 		}
// 		total += array[i];
// 	}

// 	return total / i;
// }

// function find_average(array) {
// 	let i;
// 	let total = 0;
// 	if (array.length === 0) {
// 		return 0;
// 	}
// 	for (i = 0; i < array.length; i += 1) {
// 		total += array[i];
// 	}
// 	return total / i;
// }

// console.log(find_average([33, 72, 37, 11, 59, 51, 55, 56, 33]));

// console.log(find_average([]));

// function stringToNumber(str) {
// 	let numb = Number.parseInt(str);
// 	return numb;
// }

// console.log(stringToNumber('1254556'));

// let stringToNumber = function (str) {
// 	// put your code here
// 	return Number(str);
// };
// let stringToNumber = function (str) {
// 	return parseInt(str);
// };

// function calculateTotal(cards) {
// 	let total = 0;

// 	for (const card of cards) {
// 		total += card;
// 	}

// 	return total;
// }

// console.log('Result: ', calculateTotal([33, 72, 37, 11, 59, 51, 55, 56, 33]));

// const transformString = function (title) {

// 	return title.toLowerCase().split(' ').join('-');
// };

// console.log(transformString('Enjoy Your Favorite Food From Anywhere'));

// const rest = function (...args) {
// 	console.log(args);
// 	return args;
// };

// // rest(['Enjoy', 33, 'Your', 72, 37, 'Favorite', 11, 59, 'Food', 51, 55, 'From Anywhere', 56]);
// console.log(rest(['Enjoy', 33, 'Your', 72, 37, 'Favorite', 11, 59, 'Food', 51, 55, 'From Anywhere', 56]));

// const add = function (...args) {
// 	let result = 0;
// 	for (const arg of args) {
// 		result += arg;
// 	}
// 	return result;
// };

// console.log(add(1, 2, 3));
// console.log(add(8, 11, 55, 11, 15, 78, 44));
// console.log(add(3, 8, 16, 32, 58, 55, 65, 77, 12, 34));
// console.log(add(12, 332, 345, 555, 754, 34));
// console.log(add(31, 28, 35, 11, 47));

const filterNumbers = function (array, ...args) {
	let array3 = [];
	for (const arg of args) {
		if (array.includes(arg)) {
			array3.push(arg);
		}
	}
	return array3;
};

console.log(filterNumbers([1, 3, 5], 1, 2, 3, 4, 5));
console.log(filterNumbers([33, 72, 37, 11, 59, 51, 55, 56, 33], 8, 11, 55, 11, 15, 33));
console.log(filterNumbers([32, 58, 55, 65, 77, 12], 3, 8, 16, 32, 58, 55, 65, 77, 12, 34));

console.log('hello World');
//  function getCommonElements(array1, array2) {
// 	// Change code below this line
// 	let array3 = [];
// 	for (let i = 0; i < array1.length; i += 1) {
// 		if (array2.includes(array1[i])) {
// 			array3.push(array1[i]);
// 		}
// 	}
// 	return array3;
// }
