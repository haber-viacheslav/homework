// /Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const findSmallerNumber = numbers => {
// 	let result = 0;
// 	if (Array.isArray(numbers)) {
// 		result = Math.min(...numbers);
// 	}
// 	return result;
// };

// const findSmallerNumber = numbers => (Array.isArray(numbers) ? Math.min(...numbers) : 'numbers does not array');

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(5));

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const caclculateAverage = (...numbers) => numbers.reduce((acc, number) => acc + number / numbers.length, 0);

// const caclculateAverage = (...numbers) =>
// 	numbers.reduce(
// 		(acc, number) => (typeof number === 'number' ? acc + (number / numbers.length) : 'Does not number'),
// 		0
// 	);

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// // console.log(getUsersWithEyeColor(users, 'blue'));
// const caclculateAverage = (...numbers) =>
// 	numbers.map(number => (typeof number === 'number' ? number : 'Does not number'));

// const caclculateAverage = (...numbers) =>
// 	numbers
// 		.filter(number => typeof number === 'number')

// 		.reduce((acc, number, idx, array) => (acc += number / array.length), 0);

// // console.log(caclculateAverage(1, 5, 45, 12, 13, 15));
// // console.log(caclculateAverage(1, 2, 3, 4, 5));
// // console.log(caclculateAverage('str'));
// // console.log(caclculateAverage(1, 3, 6, 8, 7, 'str'));
// // console.log(caclculateAverage(1, 5, 'str', 12, 13, 15));
// console.log(caclculateAverage(5, 5, 5, 5, 'str', 5));
// // console.log(caclculateAverage('str'));
// // console.log(caclculateAverage(1, 3, 6, 8, 7, 'str'));

// //Напишите ф-цию calcTotalPrice(stones, stonesName),
// //которая принимает массив объектов и
// //строку с названием камня.
// //Функция считает м возвращает общую стоимость камней
// //с таким именем, ценой и количеством из объекта

// const stones = [
// 	{ name: 'Изумруд', price: 1300, quantity: 4 },
// 	{ name: 'Бриллиант', price: 2700, quantity: 6 },
// 	{ name: 'Сапфир', price: 400, quantity: 7 },
// 	{ name: 'Щебень', price: 150, quantity: 100 },
// ];

// const findSumStones = (arr, stoneName) =>
// 	arr.filter(stone => stone.name === stoneName).reduce((acc, stone) => stone.price * stone.quantity, 0);

// console.log(findSumStones(stones, 'Бриллиант'));

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
// 	read(a, b) {
// 		this.firstVal = a;
// 		this.secondVal = b;
// 	},
// 	sum() {
// 		return this.firstVal && this.secondVal ? this.firstVal + this.secondVal : 'пустой объект';
// 	},
// 	mult() {
// 		return this.firstVal && this.secondVal ? this.firstVal * this.secondVal : 'пустой объект';
// 	},
// };

// console.log(calculator.read(1, 6));
// console.dir(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());

const users = [
	{
		name: 'Moore Hensley',
		email: 'moorehensley@indexia.com',
		eyeColor: 'blue',
		friends: ['Sharron Pace'],
		isActive: false,
		balance: 2811,
		gender: 'male',
	},
	{
		name: 'Sharlene Bush',
		email: 'sharlenebush@tubesys.com',
		eyeColor: 'blue',
		friends: ['Briana Decker', 'Sharron Pace'],
		isActive: true,
		balance: 3821,
		gender: 'female',
	},
	{
		name: 'Ross Vazquez',
		email: 'rossvazquez@xinware.com',
		eyeColor: 'green',
		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
		isActive: false,
		balance: 3793,
		gender: 'male',
	},
	{
		name: 'Elma Head',
		email: 'elmahead@omatom.com',
		eyeColor: 'green',
		friends: ['Goldie Gentry', 'Aisha Tran'],
		isActive: true,
		balance: 2278,
		gender: 'female',
	},
	{
		name: 'Carey Barr',
		email: 'careybarr@nurali.com',
		eyeColor: 'blue',
		friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
		isActive: true,
		balance: 3951,
		gender: 'male',
	},
	{
		name: 'Blackburn Dotson',
		email: 'blackburndotson@furnigeer.com',
		eyeColor: 'brown',
		friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
		isActive: false,
		balance: 1498,
		gender: 'male',
	},
	{
		name: 'Sheree Anthony',
		email: 'shereeanthony@kog.com',
		eyeColor: 'brown',
		friends: ['Goldie Gentry', 'Briana Decker'],
		isActive: true,
		balance: 2764,
		gender: 'female',
	},
];

const newObjectAllValues = {};

const sumProps = function (arr) {
	const objectKeys = Object.keys(arr[0]);
	for (const key of objectKeys) {
		newObjectAllValues[key] = [];
	}
	for (const item in newObjectAllValues) {
		// console.log(item);
		for (const user of users) {
			newObjectAllValues[item].push(user[item]);
		}
	}
	console.log(newObjectAllValues);
	return newObjectAllValues;
};

sumProps(users);
