// 1/48

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
//а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
// 	return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// // console.log(pointer);

// 2/48

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// 	return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));

// console.log(makeMessage('deliverPizza', deliverPizza));

//  3/48

// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', makePizza('Ultracheese'));

// 4/48

// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
// метод order должен возвращать результат вызова колбэка onError,
// передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
// метод order должен возвращать результат вызова колбэка onSuccess,
// передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
// 	pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// 	order(pizzaName, onSuccess, onError) {
// 		if (!this.pizzas.includes(pizzaName)) {
// 			return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 		}
// 		return onSuccess(pizzaName);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// 5/48

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems -
//     массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется
//      в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line

// 	// for (let i = 0; i < orderedItems.length; i += 1) {
// 	//   totalPrice += orderedItems[i];
// 	// }
// 	orderedItems.forEach(el => (totalPrice += el));

// 	// Change code above this line
// 	return totalPrice;
// }

// 6/48

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line

// 	numbers.forEach(element => {
// 		if (element > value) {
// 			filteredNumbers.push(element);
// 		}
// 	});
// 	// for (let i = 0; i < numbers.length; i += 1) {
// 	// 	if (numbers[i] > value) {
// 	// 		filteredNumbers.push(numbers[i]);
// 	// 	}
// 	// }

// 	// Change code above this line
// 	return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// 7/48

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
// то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line
// 	firstArray.forEach(element => (secondArray.includes(element) ? commonElements.push(element) : commonElements));
// 	return commonElements;
// 	// Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// 8/48

//Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 9/48

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 10/48

// Change code below this line
// const calculateTotalPrice = orderedItems => {
// 	let totalPrice = 0;
// 	orderedItems.forEach(item => (totalPrice += item));
// 	return totalPrice;
// };
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 11/48

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// const filterArray = (numbers, value) => {
// 	const filteredNumbers = [];

// 	numbers.forEach(number => {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	});

// 	return filteredNumbers;
// };

// 12/48

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
// 	const commonElements = [];

// 	firstArray.forEach(element => (secondArray.includes(element) ? commonElements.push(element) : commonElements));

// 	// Change code above this line
// };

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
// 	const commonElements = [];

// 	firstArray.forEach(element => {
// 		if (secondArray.includes(element)) {
// 			commonElements.push(element);
// 		}
// 	});

// 	// Change code above this line
// 	return commonElements;
// };

// 13/48

// Функция changeEven(numbers, value) принимает массив чисел numbers и
// обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала,
// наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
// 	const newArr = [...numbers];

// 	newArr.forEach((element, idx) => {
// 		if (element % 2 === 0) {
// 			newArr[idx] = element + value;
// 		}
// 	});
// 	return newArr;
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// 14/48

//Дополни код так, чтобы в переменной planetsLengths
// получился массив длин названий планет.Обязательно используй метод map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(element => element.length);

// 15/48

// Используя метод map() сделай так, чтобы в переменной titles получился
// массив названий книг(свойство title) из всех объектов массива books.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// 	{ title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(element => element.title);

// 16/48

// Используя метод flatMap() сделай так, чтобы в переменной genres получился
// массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		genres: ['adventure', 'history'],
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		genres: ['fiction'],
// 	},
// 	{
// 		title: 'Redder Than Blood',
// 		author: 'Tanith Lee',
// 		genres: ['horror', 'mysticism'],
// 	},
// ];
// // Change code below this line

// const genres = books.flatMap(element => element.genres);

// 17/48

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён
// пользователей(свойство name) из массива объектов в параметре users.

// const getUserNames = users => users.map(user => user.name);

// 18/48

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
// почтовых адресов пользователей(свойство email) из массива объектов в параметре users.

// const getUserEmails = users => users.map(user => user.email);

// 19/48

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(element => element % 2 === 0);
// const oddNumbers = numbers.filter(element => element % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 20/48

//Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres)
//из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		genres: ['adventure', 'history'],
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		genres: ['fiction', 'mysticism'],
// 	},
// 	{
// 		title: 'Redder Than Blood',
// 		author: 'Tanith Lee',
// 		genres: ['horror', 'mysticism', 'adventure'],
// 	},
// ];
// // Change code below this line
// const allGenres = books.flatMap(element => element.genres);
// const uniqueGenres = allGenres.filter((element, idx, array) => array.indexOf(element) === idx);
// console.log(allGenres);
// console.log(uniqueGenres);

// 21/48

// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating)
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором
// с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// 	{ title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(value => value.rating >= MIN_RATING);
// const booksByAuthor = books.filter(value => value.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// 22/48

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей
// у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// const users = [
// 	{
// 		name: 'Moore Hensley',
// 		email: 'moorehensley@indexia.com',
// 		eyeColor: 'blue',
// 		friends: ['Sharron Pace'],
// 		isActive: false,
// 		balance: 2811,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sharlene Bush',
// 		email: 'sharlenebush@tubesys.com',
// 		eyeColor: 'blue',
// 		friends: ['Briana Decker', 'Sharron Pace'],
// 		isActive: true,
// 		balance: 3821,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Ross Vazquez',
// 		email: 'rossvazquez@xinware.com',
// 		eyeColor: 'green',
// 		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 		isActive: false,
// 		balance: 3793,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Elma Head',
// 		email: 'elmahead@omatom.com',
// 		eyeColor: 'green',
// 		friends: ['Goldie Gentry', 'Aisha Tran'],
// 		isActive: true,
// 		balance: 2278,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Carey Barr',
// 		email: 'careybarr@nurali.com',
// 		eyeColor: 'blue',
// 		friends: ['Jordan Sampson', 'Eddie Strong'],
// 		isActive: true,
// 		balance: 3951,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Blackburn Dotson',
// 		email: 'blackburndotson@furnigeer.com',
// 		eyeColor: 'brown',
// 		friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 		isActive: false,
// 		balance: 1498,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sheree Anthony',
// 		email: 'shereeanthony@kog.com',
// 		eyeColor: 'brown',
// 		friends: ['Goldie Gentry', 'Briana Decker'],
// 		isActive: true,
// 		balance: 2764,
// 		gender: 'female',
// 	},
// ];
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

// 23/48

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
// возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);

// 24/48

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей
// у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));

// 25/48

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый
//  массив не содержал повторений.

// const getFriends = users =>
// 	users.flatMap(user => user.friends).filter((item, idx, array) => array.indexOf(item) === idx);

// console.log(getFriends(users));

// 26/48

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала
// массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = users => users.filter(user => user.isActive);

// console.log(getActiveUsers(users));

// 27/48

//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала
//массив неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = users => users.filter(user => !user.isActive);

// console.log(getInactiveUsers(users));

// 28/48

// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название
// которой(свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор
// который(свойство author) совпадает со значением переменной AUTHOR.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{
// 		title: 'Redder Than Blood',
// 		author: 'Tanith Lee',
// 		rating: 7.94,
// 	},
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// 29/48

//Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
// почта которого(свойство email) совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// 30/48

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(item => item % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 === 1);

// 31/48

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли
// пользователи сейчас активны(свойство isActive) и возвращала true или false.

// const isEveryUserActive = users => users.every(user => user.isActive);

// 32/48

//Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 == 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 == 1);

// const anyElementInSecondIsEven = secondArray.some(item => item % 2 == 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 == 1);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 == 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 == 1);

// 33/48

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей
// (свойство isActive) и возвращала true или false.

// const isAnyUserActive = users => users.some(user => user.isActive);

//34/48

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// 35/48

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
// и получить общую сумму этих времён.Рассчитать время для каждого из игроков,
// можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
// 	{ name: 'Mango', playtime: 1270, gamesPlayed: 4 },
// 	{ name: 'Poly', playtime: 469, gamesPlayed: 2 },
// 	{ name: 'Ajax', playtime: 690, gamesPlayed: 3 },
// 	{ name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + player.playtime / player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame);

// const users = [
// 	{
// 		name: 'Moore Hensley',
// 		email: 'moorehensley@indexia.com',
// 		eyeColor: 'blue',
// 		friends: ['Sharron Pace'],
// 		isActive: false,
// 		balance: 2811,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sharlene Bush',
// 		email: 'sharlenebush@tubesys.com',
// 		eyeColor: 'blue',
// 		friends: ['Briana Decker', 'Sharron Pace'],
// 		isActive: true,
// 		balance: 3821,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Ross Vazquez',
// 		email: 'rossvazquez@xinware.com',
// 		eyeColor: 'green',
// 		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 		isActive: false,
// 		balance: 3793,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Elma Head',
// 		email: 'elmahead@omatom.com',
// 		eyeColor: 'green',
// 		friends: ['Goldie Gentry', 'Aisha Tran'],
// 		isActive: true,
// 		balance: 2278,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Carey Barr',
// 		email: 'careybarr@nurali.com',
// 		eyeColor: 'blue',
// 		friends: ['Jordan Sampson', 'Eddie Strong'],
// 		isActive: true,
// 		balance: 3951,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Blackburn Dotson',
// 		email: 'blackburndotson@furnigeer.com',
// 		eyeColor: 'brown',
// 		friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 		isActive: false,
// 		balance: 1498,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sheree Anthony',
// 		email: 'shereeanthony@kog.com',
// 		eyeColor: 'brown',
// 		friends: ['Goldie Gentry', 'Briana Decker'],
// 		isActive: true,
// 		balance: 2764,
// 		gender: 'female',
// 	},
// ];

// 36/48

//Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму
//всех средств(свойство balance) которые хранят пользователи из массива users.

// const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);
// console.log(calculateTotalBalance(users));

// 37/48

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей
// (свойство friends) всех пользователей из массива users.

// const getTotalFriendCount = users => users.reduce((acc, user) => acc + user.friends.length, 0);

// 38/48

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по
// возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён
// авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

//39/48

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
// по её возрастанию или убыванию.Дополни код так, чтобы в переменной ascendingReleaseDates
// получилась отсортированная по возрастанию копия массива releaseDates,
// а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 40/48

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
// в алфавитном и обратном алфавитном порядке.Дополни код так, чтобы в переменной
// authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky', 'Howard Lovecraft'];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41/48

//Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// 	{ title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// 42/48

//Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив
//пользователей отсортированный по возрастанию их баланса(свойство balance).

// const sortByAscendingBalance = users => users.sort((prev, next) => prev.balance - next.balance);

// 43/48

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
// отсортированный по убыванию количества их друзей(свойство friends).

// const sortByDescendingFriendCount = users => [...users].sort((prev, next) => next.friends.length - prev.friends.length);

// 44/48

// Дополни функцию sortByName(users) так, чтобы она возвращала массив
// пользователей отсортированный по их имени(свойство name) в алфавитном порядке.

// const sortByName = users => [...users].sort((prev, next) => prev.name.localeCompare(next.name));

// 45/48

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// 	{
// 		title: 'The Dreams in the Witch House',
// 		author: 'Howard Lovecraft',
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// 	.sort((prev, next) => prev.author.localeCompare(next.author))
// 	.filter(item => item.rating > MIN_BOOK_RATING)
// 	.map(item => item.author);

// console.log(names);

// 46/48

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён
// пользователей отсортированный по возрастанию количества их друзей(свойство friends).

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
		friends: ['Jordan Sampson', 'Eddie Strong'],
		isActive: true,
		balance: 3951,
		gender: 'male',
	},
	{
		name: 'Blackburn Dotson',
		email: 'blackburndotson@furnigeer.com',
		eyeColor: 'brown',
		friends: ['Jacklyn Lucas', 'Linda Chapman'],
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

// const getNamesSortedByFriendCount = users =>
// 	[...users].sort((prev, next) => prev.friends.length - next.friends.length).map(item => item.name);

// console.log(getNamesSortedByFriendCount(users));

// 47/48

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив
// уникальных имён друзей(свойство friends) отсортированный по алфавиту.

// const getSortedFriends = users => users.flatMap(user => user.friends)
// .filter((friend, idx, array) => array.indexOf(friend) === idx)
// .sort((prev, next) => prev.localeCompare(next));

// console.log(getSortedFriends(users));

// 48/48

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она
// возвращала общий баланс пользователей(свойство balance), пол которых(свойство gender)
// совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) =>
// 	users.filter(value => value.gender === gender).reduce((acc, value) => acc + value.balance, 0);

// console.log(getTotalBalanceByGender(users, 'male'));
