// this , bind, call, apply-------------------------------------------------------

/*
 * Контекст (this)
 * - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 * - Контекст определяется В МОМЕНТ ВЫЗОВА функции, если он не привязан явно.
 *
 */

// Как метод объекта. В контексте объекта.--------------------------

// const user = {
// 	tag: 'Mango',
// 	showTag() {
// 		console.log('showTag -> this', this);
// 	},
// };

// user.showTag();

// Вызов без контекста  -----------------------------------------------
// В строгом режиме вернёт = undefined;
// В не строгом режиме вернёт = window

// const foo = function () {
// 	console.log('foo -> this', this);
// };

// foo();

/*
 * Как метод объекта, но объявлена, как внешняя функция
 * В контексте объекта
 *
 *
 */

// const showTag = function () {
// 	console.log('showTag -> this', this);
// 	console.log('showTag -> this.tag', this.tag);
// 	console.log('showTag -> this.skills', this.skills);
// };

// // showTag();

// const user = {
// 	tag: 'Mango',
// };

// user.showUserTag = showTag;
// user.skills = ['html', 'css', 'js'];
// // console.log('user', user);

// user.showUserTag();

/*
 * Вызов без контекста, но объявлена, как метод объекта
 */

// const user = {
// 	tag: 'Mango',
// 	showTag() {
// 		console.log('showTag -> this', this);
// 		console.log('showTag -> this.tag', this.tag);
// 	},
// };

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в call-back функциях
 */

// const user = {
// 	tag: 'Mango',
// 	showTag() {
// 		console.log('showTag -> this', this);
// 		console.log('showTag -> this.tag', this.tag);
// 	},
// };

// const invokeAction = function (action) {
// 	console.log(action);

// 	action();
// };

// invokeAction(user.showTag);

// const showThis = function (...args) {
// 	console.log(args);
// 	let total = 0;
// 	for (const arg of args) {
// 		total += arg;
// 	}
// 	console.log(total);
// 	console.log('showThis -> this', this);
// };

// showThis();

// console.dir(showThis);

// const objA = {
// 	a: 5,
// 	b: 10,
// };

// showThis.call(objA, 10, 23, 25, 29, 41);
// showThis.apply(objA, [3, 6, 78, 9, 5, 4, 3, 10]);

// const changeColor = function (color) {
// 	console.log('changeColor -> this', this);
// 	this.color = color;
// };

// const hat = {
// 	color: 'black',
// };

// const sweater = {
// 	color: 'green',
// };

// changeColor.call(hat, 'white');
// console.log(hat);

// changeColor.call(sweater, 'yellow');
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// changeHatColor('pink');
// console.log(hat);

// Прототипное наследование

// const objC = {
// 	z: 5,
// };

// console.log('objC: ', objC);

// const objB = Object.create(objC);

// objB.y = 3;
// objB.c = 1;

// console.log('objB: ', objB);
// const value = objB.z;
// console.log(value);

// const objA = Object.create(objB);
// objA.f = 1;
// console.log('objA: ', objA);

// console.log(objA.z);
// console.log(objA.c);

// const dummyObj = {
// 	message: 'Это собственное свойство',
// };

// console.log(dummyObj.hasOwnProperty('message'));
// console.log(dummyObj.hasOwnProperty('massage'));
// console.log(dummyObj.message);

// const Car = function ({ brand, model, price } = {}) {
// 	// const { brand, model, price } = config;
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
// 	// ссылка на объект возвращается в место вызова New Car
// };
// // При вызове функции через NEW, создаётся пустой объект
// const myCar = new Car({ brand: 'Audi', model: 'Q7', price: 48000 });
// console.log(myCar);

// const myCar2 = new Car({ brand: 'BMW', model: 'E535', price: 34000 });
// console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);

//              ----------------45.20 ПЕРЕПИСАТЬ!!!!!!!!! Модуль 5 занятие 9---------------

// const User = function ({ email, password } = {}) {
// 	//Обязательно передавать значение по умолчанию = {}
// 	this.email = email;
// 	this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
// 	this.mail = newEmail;
// };
// const mango = new User({ email: 'mango@mail.com', password: 'fdkljhckdjc' });

// mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

// ИТОГ -------------------------------------------------------------------------------
// Прототипное наследование------------!!!!!

// 1. У каждого объекта есть свойство __proto__.
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой объект.
// 3. При создании литерала объекта, в свойство __proto__ записывается
//    ссылка на функция.prototype.
// 4. Функция конструктор это просто функция. :)
// 5. Всю магию делает оператор NEW
// 6. Если функция вызывается через new, создаётся пустой объект.
// 7. Функция вызывается в контексте созданного объекта.
// 8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype.
// 9. Ссылка на объект возвращается в место вызова new Функция ().

// const objA = {
// 	x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);

// console.log(Math.round(5.3));
// console.log(Math.PI);
