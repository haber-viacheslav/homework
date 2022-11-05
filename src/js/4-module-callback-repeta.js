// CallBack functions

// /**
//  *
//  * @param {string} message
//  */
// const fnA = function (message, callback) {
// 	console.log(message);
// 	callback();
// };

// const fnB = function () {
// 	console.log('Этот лог при вызове fnB');
// };

// fnA('message a', fnB);

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);

// 	return result;
// };

// const add = function (x, y) {
// 	return x + y;
// };

// const sub = function (x, y) {
// 	return x * y;
// };

// const del = function (x, y) {
// 	return x / y;
// };

// console.log(doMath(12, 38, add));
// console.log(doMath(21, 35, sub));

// const result = doMath(250, 36, del);
// const shortResult = Number(result.toFixed(2));
// console.log(result);
// console.log(shortResult);

// console.log(doMath(12, 38, add)); // Обычная передача функции
// console.log(doMath(21, 35, sub)); // Обычная передача функции
// console.log(
// 	doMath(12, 38, function (x, y) {
// 		return x + y;
// 	})
// ); // Инлайн функцияё
// console.log(
// 	doMath(21, 35, function (x, y) {
// 		return x * y;
// 	})
// ); // Инлайн функция

// const buttonRef = document.querySelector('.main__btn');

// const handleClickBtn = function () {
// 	console.log('Клик по кнопке: ' + Date.now());
// };

// buttonRef.addEventListener('click', handleClickBtn);

// const callback = function () {
// 	console.log('Через 5 секунд внутри колбека в таймауте');
// };

// console.log('Код перед таймаутом');

// setTimeout(callback, 5000);

// console.log('Код после таймаута');

// Запрос на api --------------------------------------------

// const onRequestSuccess = function (response) {
// 	console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
// 	console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
// 	.then(res => res.json())
// 	.then(onRequestSuccess);

// const filter = function (array, test) {
// 	const filteredArray = [];
// 	for (const arr of array) {
// 		if (test(arr)) {
// 			filteredArray.push(arr);
// 		}
// 	}

// 	return filteredArray;
// };

// const callback1 = function (value) {
// 	return value >= 3;
// };

// const callback2 = function (value) {
// 	return value <= 5;
// };

// const result1 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback1);
// console.log(result1);

// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(result2);

// const result3 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
// 	return value > 5;
// });
// console.log(result3);

//  Замыкания!!!!!!!!!!!!!!!!!!!!!!!!!_________________________--------------------------------

// const fnA = function (parameter) {
// 	const innerVariable = 'Знaчение внутренней переменной fnA';

// 	const innerFunction = function () {
// 		console.log(parameter);
// 		console.log('Это вызов innerFunction');
// 		console.log(innerVariable);
// 	};

// 	return innerFunction;
// };

// const fnB = fnA(555);

// fnB();
// console.log(fnB());

// const makeSheff = function (name) {
// 	const makeDish = function (dish) {
// 		console.log(`${name} готовит ${dish}`);
// 	};
// 	return makeDish;
// };

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('суп');
// mango('котлетка');
// mango('салатик');

// const poly = makeSheff('Poly');

// poly('кофе');
// poly('чай');
// poly('печеньки');

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
// 	let salary = baseSalary;

// 	const changeBy = function (amount) {
// 		salary += amount; //Приватные переменные
// 	};

// 	return {
// 		raise(amount) {
// 			salary += amount;
// 		},
// 		lower(amount) {
// 			salary -= amount;
// 		},
// 		current() {
// 			return `Текущая зарплата ${employeeName} - ${salary}`;
// 		},
// 	};
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager);

// Стрелочные функции--------------------------------------------------------------

// В стрелках нет переменной arguments, можно с помощью REST собрать аргументы
// const add = function (a, b, c) {
// 	return a + b + c; // Явный возврат с телом функции;
// };

// const addArrow = (a, b, c) => a + b + c; //неявный возврат => без тела функции;

// console.log(add(1, 5, 7));
// console.log(addArrow(1, 5, 7));

// const fnA = function () {
// 	return {
// 		a: 5,
// 	};
// };

// console.log(fnA());

// const arrowFna = () => ({ a: 5 }); // При использовании раннего возыврата, объект можно вернуть только поместив внутри выражения!!!

// console.log(arrowFna());

// const filter = function (array, test) {
// 	const filteredArray = [];
// 	for (const arr of array) {
// 		if (test(arr)) {
// 			filteredArray.push(arr);
// 		}
// 	}
// };

// Arrows -----------------------------------------------------------

// const add = (a, b) => a + b;

// console.log(add(2, 3));

// const add1 = message => message; // Если нужно выполнить сразу возврат, то => выполняет неявный возврат

// const add2 = message => {
// 	// Если параметр 1 скобки не обязательны
// 	return message + '!!!!!';
// };

// console.log(add1('Hello'));

// console.log(add2('Hello'));

// const add3 = () => {
// 	// Если параметров нету обязательно ()
// 	console.log('Hello');
// };

// add3();

// const add = () => {    //псевдомассива arguments в Стрелочный функциях нет, они по другому оптимизированны и работают быстрее обычных.
// 	console.log(arguments);
// };

// add();

// const add = (...args) => {
// 	let result = 0;
// 	for (const arg of args) {
// 		result += arg;
// 	}
// 	return result;
// };

// console.log(add(1, 2, 3, 5, 4, 8, 56, 4, 1, 45, 5, 5, 45, 54, 5, 5));
// console.log(add(0));

// const numbers = [1, 4, 6, 7, 8, 0, 9];

// // const greaterThenTwo = numbers.filter(function (num) {
// // 	return num > 2;
// // });

// const greaterThenTwo = numbers.filter(num => num > 2);

// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3);

// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b);

// console.log(sorted);

// // const res = numbers
// // 	.filter(function (num) {
// // 		return num > 2;
// // 	})
// // 	.map(function (num) {
// // 		return num * 3;
// // 	})
// // 	.sort(function (a, b) {
// // 		return a - b;
// // 	});

// const res = numbers
// 	.filter(num => num > 2)
// 	.map(num => num * 3)
// 	.sort((a, b) => a - b);

// const players = [
// 	{ id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
// 	{ id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
// 	{ id: 'id-3', tag: 'John', isOnline: true, rank: 850 },
// 	{ id: 'id-4', tag: 'Piter', isOnline: true, rank: 870 },
// 	{ id: 'id-5', tag: 'Alex', isOnline: false, rank: 580 },
// 	{ id: 'id-6', tag: 'Dexter', isOnline: true, rank: 820 },
// 	{ id: 'id-7', tag: 'Sam', isOnline: false, rank: 550 },
// 	{ id: 'id-8', tag: 'Din', isOnline: false, rank: 630 },
// ];

// const onlineAndSorted = players
// 	.filter(player => player.isOnline)
// 	.sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);

// const playersStats = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// /*
// Увеличиваем кол-во поинтов каждого игрока  ----------------------
// */

// // const updatePlayers = playersStats.map(player => ({ ...player, points: player.points + player.points * 0.2 }));

// // console.log(updatePlayers);

// //Увеличиваем кол-во часов игрока по id ----------------

// // const playerIdToUpdate = 'player-4';

// // const updatePlayers = playersStats.map(player => {
// // 	if (player.id === playerIdToUpdate) {
// // 		return { ...player, timePlayed: player.timePlayed + 50 };
// // 	}
// // 	return player;
// // });

// const playerIdToUpdate = 'player-4';

// // const updatePlayers = playersStats.map(player => {
// // 	return player.id === playerIdToUpdate ? { ...player, timePlayed: player.timePlayed + 50 } : player;
// // });

// const updatePlayers = playersStats.map(player =>
// 	player.id === playerIdToUpdate ? { ...player, timePlayed: player.timePlayed + 50 } : player
// );

// console.table(updatePlayers);

// Написать свою функцию bind ЗАМЫКАНИЯ

// const person1 = { name: 'Michel', age: 22, job: 'Frontend' };
// const person2 = { name: 'Elen', age: 25, job: 'SMM' };
// const person3 = { name: 'Irina', age: 20, job: 'QA' };

// function bind({ name, age, job }) {
// 	function logPerson() {
// 		return console.log(`Person: ${name}, ${age}, ${job}`);
// 	}
// 	return logPerson;
// }

// const first = bind(person1);
// const second = bind(person2);
// const third = bind(person3);

// first();
// second();
// third();

/// Array's methods

// Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.

// Функция callback будет вызвана с тремя аргументами:

// значение элемента (value)
// индекс элемента (index)
// массив, по которому осуществляется проход (array)

// Конвертируем цикл for в forEach
// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// // до
// for (let i = 0; i < items.length; i++) {
// 	copy.push(items[i]);
// }
// console.log(copy);

// // после
// items.forEach(function (item) {
// 	copy.push(item);
// });
// console.log(copy);

// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach((number, index, array) => console.log('Index: ', index, 'Element: ', number, 'Array: ', array));

// Array.prototype.map()--------------------------------------------------------------------------------------------
// Сводка
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// Синтаксис
// const new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Возвращает элемент для new_array
// }[, thisArg]);

// const players = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// const playersName = players.map(element => element.name + '-best').sort((prev, next) => prev.localeCompare(next));
// console.log(playersName);

// const points = players.map(element => element.points).sort((prev, next) => prev - next);
// console.log(points);

// const newNames = players.map(({ name }) => {
// 	return name;
// });
// console.log(newNames);

// const sortedNames = [...newNames].sort((prev, next) => {
// 	return prev.localeCompare(next);
// });
// console.log(sortedNames);

// const reverseNames = [...sortedNames].sort((prev, next) => next.localeCompare(prev));
// console.table(reverseNames);

// console.log(newNames);
// console.log(...newNames); //spread

//return object

// const obgArray = players.map(({ name, timePlayed, points }) => ({ name, timePlayed, points }));
// console.log(obgArray);

//
// const copyPlayers = players.map(player => ({ ...player, points: player.points * 1.1 }));
// console.table(copyPlayers);
// const players = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// const playerIdToUpdate = 'player-4';

// const newObj = players.map(player => {
// 	if (player.id === playerIdToUpdate) {
// 		return {
// 			...player,
// 			timePlayed: player.timePlayed * 1.15,
// 		};
// 	}
// 	return player;
// });

// console.table(newObj);

//refactoring

// const newObj = players.map(player =>
// 	player.id === playerIdToUpdate ? { ...player, timePlayed: player.timePlayed * 1.15 } : player
// );

// console.table(newObj);

// Filter -------------------------------------------------------------------------------------------------

// const players = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// const numbers = [5, 10, 15, 20, 25, 30];

// const filteredNumbers = numbers.filter(element => element > 15); //больше 15

// console.log(filteredNumbers);

// const onlinePlayers = players.filter(player => player.isOnline); // только онлайн

// console.log(onlinePlayers);

// const offlinePlayers = players.filter(({ isOnline }) => !isOnline); // только оffлайн

// console.log(offlinePlayers);

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 650); // только больше 250 наигранных часов

// console.log(hardcorePlayers);

// const numbers = [5, 10, 15, 20, 25, 30];

// const players = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// const findedNumber = numbers.find(number => number >= 25);
// console.log(findedNumber);

// const playerNameToFind = 'Sam';

// const findedPlayer = players.find(player => player.name === playerNameToFind);

// console.log(findedPlayer);

// const findPlayerById = (allPlayer, playerId) => allPlayer.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, 'Din'));

// Reduce---------------------------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25, 30];

// const total = numbers.reduce((acc, number) => {
// 	console.log('number', number);
// 	console.log('acc', acc);
// 	return acc + number;
// }, 0);

// // const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);

// //функции --------------------

// // function expression---------------------------------->
// const multiply = function (a, b, c) {
// 	const result = a * b * c;
// 	return result;
// };

// //function declaration--------------------------------->
// function multiplyDeclaration(a, b, c) {
// 	const result = a * b * c;
// 	return result;
// }

// console.log(multiply(1, 5, 8));

// const multiplyRest = function (...args) {
// 	let result = 1;
// 	for (const arg of args) {
// 		result *= arg;
// 	}

// 	return result;
// };

// console.log(multiplyRest(1, 5, 8));

// // arrow function--------------------------------------->

// const multiplyArrow = (...args) =>
// 	args.reduce((acc, element) => {
// 		//(acc, element, idx, array )
// 		acc *= element;
// 		// console.log('array', array);
// 		// console.log('index', idx);

// 		return acc;
// 	}, 1);

// console.log(multiplyArrow(1, 5, 8));
// console.log(multiplyArrow(1, 5, 8, 10, 5, 3, 4));

// const salary = {
// 	mango: 100,
// 	polly: 90,
// 	ajax: 130,
// };

// const totalSalary = object => Object.values(object).reduce(
//     (acc, element) => acc + element, 0);
// console.log(totalSalary(salary));

// const players = [
// 	{ id: 'player-1', name: 'Mango', isOnline: true, timePlayed: 400, points: 18 },
// 	{ id: 'player-2', name: 'Poly', isOnline: false, timePlayed: 800, points: 51 },
// 	{ id: 'player-3', name: 'John', isOnline: true, timePlayed: 465, points: 35 },
// 	{ id: 'player-4', name: 'Piter', isOnline: true, timePlayed: 489, points: 39 },
// 	{ id: 'player-5', name: 'Alex', isOnline: false, timePlayed: 538, points: 43 },
// 	{ id: 'player-6', name: 'Dexter', isOnline: true, timePlayed: 415, points: 19 },
// 	{ id: 'player-7', name: 'Sam', isOnline: false, timePlayed: 618, points: 49 },
// 	{ id: 'player-8', name: 'Din', isOnline: false, timePlayed: 1500, points: 63 },
// ];

// const totalPlayedTime = (array) => array.reduce((total, {timePlayed}) => total + timePlayed, 0);
// console.log(totalPlayedTime(players));

// const card = [
// 	{ label: 'Apples', price: 100, quantity: 2 },
// 	{ label: 'Bananas', price: 230, quantity: 3 },
// 	{ label: 'Lemons', price: 325, quantity: 4 },
// 	{ label: 'Oranges', price: 180, quantity: 6 },
// 	{ label: 'Plums', price: 280, quantity: 1 },
// ];

// const totalAmount = array =>
// 	array.reduce((total, { price, quantity }) => total + price * quantity, 0);

// console.log(totalAmount(card));

const tweets = [
	{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
	{ id: '001', likes: 2, tags: ['html', 'css'] },
	{ id: '002', likes: 13, tags: ['js', 'css', 'nodejs'] },
	{ id: '003', likes: 4, tags: ['css', 'nodejs'] },
	{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const flatter = array =>
// 	array
// 		.flatMap(({ tags }) => [...tags])
// 		.filter((tag, idx, array) => array.indexOf(tag) === idx);
// console.log(flatter(tweets));

// const reducer = array =>
// 	array.reduce((tags, tweet) => {
// 		tags.push(...tweet.tags); //плохая практика!!!!!!!!!!!!!!!!!!!!!!!!!
// 		return tags;
// 	}, []);
// console.log(reducer(tweets));

// const allTags = array =>
// 	array.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log(allTags(tweets));

// const reducer = array =>
// 	array.reduce((tags, tweet) => [...tags, ...tweet.tags], []); //REDUCE в массив
// console.log(reducer(tweets));
// const resultReducer = reducer(tweets);

// const tweetStats = array => // вернёт объект с ключами массива и значением их количества в массиве
// 	array.reduce((newObj, tag) => {
// 		console.log(newObj);

// 		if (newObj[tag]) {
// 			newObj[tag] += 1;
// 			return newObj;
// 		}
// 		newObj[tag] = 1;
// 		return newObj;
// 	}, {});

// console.log(tweetStats(reducer(tweets)));

// const tweetStats = array =>
// 	array.reduce(
// 		(newObj, tag) => ({
// 			...newObj,
// 			[tag]: newObj[tag] ? newObj[tag] + 1 : 1,
// 		}),
// 		{}
// 	);

// console.log(tweetStats(reducer(tweets)));

// SORT

// сортируте по возрастанию и приводит к строке сортирует по Unicode

// const numbers = [1, 9, 5, 3, 7, 8];
// console.log('numbers', numbers);

// const sortedNumbers = numbers.sort((prev, next) => prev - next); // Мутабельно
// const revSortedNumbers = numbers.sort((prev, next) => next - prev);

// const imutableSortedNumbers = [...numbers].sort((prev, next) => prev - next); // Имутабельно
// console.log(
// 	'Сортированный массив чисел по возрастанию:',
// 	imutableSortedNumbers
// );

// const imutebleRevSortedNumbers = [...numbers].sort((prev, next) => next - prev);
// console.log(
// 	'Сортированный массив чисел по убыванию:',
// 	imutebleRevSortedNumbers
// );

// const letters = ['b', 'B', 'a', 'A', 'C', 'c'];
// console.log('letters', letters);

// const sortedLetters = [...letters].sort((prev, next) =>
// 	prev.localeCompare(next)
// );
// console.log('Сортированный массив букв по возрастанию:', sortedLetters);

// // const revSortedLetters = [...letters].sort((prev, next) =>
// // 	next.localeCompare(prev)
// // );

// // OR
// const revSortedLetters = sortedLetters.reverse();

// console.log('Сортированный массив букв по убыванию:', revSortedLetters);

const players = [
	{
		id: 'player-1',
		name: 'Mango',
		isOnline: true,
		timePlayed: 400,
		points: 18,
	},
	{
		id: 'player-2',
		name: 'Poly',
		isOnline: false,
		timePlayed: 800,
		points: 51,
	},
	{
		id: 'player-3',
		name: 'John',
		isOnline: true,
		timePlayed: 465,
		points: 35,
	},
	{
		id: 'player-4',
		name: 'Piter',
		isOnline: true,
		timePlayed: 489,
		points: 39,
	},
	{
		id: 'player-5',
		name: 'Alex',
		isOnline: false,
		timePlayed: 538,
		points: 43,
	},
	{
		id: 'player-6',
		name: 'Dexter',
		isOnline: true,
		timePlayed: 415,
		points: 19,
	},
	{
		id: 'player-7',
		name: 'Sam',
		isOnline: false,
		timePlayed: 618,
		points: 49,
	},
	{
		id: 'player-8',
		name: 'Din',
		isOnline: false,
		timePlayed: 1500,
		points: 63,
	},
];

// Сортировка по игровому времени

// const sortedByBestTimePlayed = [...players].sort(
// 	(prev, next) => next.timePlayed - prev.timePlayed
// );
// console.table(sortedByBestTimePlayed);

// const reverseSortedByBestTimePlayed = sortedByBestTimePlayed.reverse();

// console.table(reverseSortedByBestTimePlayed);

// Сортировка по имени игрока

// const sortedByName = array =>
// 	[...array].sort((prevName, nextName) =>
// 		prevName.name.localeCompare(nextName.name)
// 	);
// console.log(sortedByName(players));

// const array = [1, 2, [3, [4]], [6, [7, 8, [9]]]];
// console.log(array);

// const flatedArray = array.flat(3); // аргумент при візове метода указывает глубину разлаживания!!!
// console.table(flatedArray);

// const flatedMapArray = array.flatMap(item => item);
// console.dir(flatedMapArray);

// const tags = tweets.map(item => item.tags).flat(); // 2 методами

// const tags = tweets.flatMap(item => item.tags); // flatMap микс map и flat, работает только в одну глубину.
// console.log(tags);

const numbers = [1, 9, 5, 4, 15, 17, 25, 3, 7, 8];

// const greeterThanThree = numbers
// 	.filter(value => value > 3) // Фильтр больше 3
// 	.map(value => value * 3)
// 	.sort((prev, next) => prev - next); // Сортировка по возрастанию; // Усножение каждого элемента
// console.log(greeterThanThree);

// console.log(numbers);

// console.log(_.sortBy(players, player => player.timePlayed));
