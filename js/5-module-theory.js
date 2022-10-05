// Правила определения this-------------------------------------------------------------------------
// Необходимо усвоить всего одно правило для определения this - значение контекста внутри функции (не стрелочной)
// определятся не в момент ее создания, а в момент вызова.То есть значение this определяется тем,
// как вызывается функция, а не где она была объявлена.

// this в глобальной области видимости----------------------------------------------------

// function foo() {
// 	console.log(this);
// }

// foo(); // window без "use strict" и undefined с "use strict"

// this в методе объекта ------------------------------------------------------------

// const petya = {
// 	username: 'Petya',
// 	showThis() {
// 		console.log(this);
// 	},
// 	showName() {
// 		console.log(this.username);
// 	},
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// function showThis() {
// 	console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
// 	username: 'Mango',
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//this в callback-функциях---------------------------------------------------------

// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() это вызов метода getFullName без объекта
// 	console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// console.log(customer.getFullName());

// // makeMessage(customer.getFullName); //// Error!!!!!!!!

//this в стрелочных функциях---------------------------------------------------------------------------
// Стрелочные функции не имеют своего this.
// В отличии от обычных функций, изменить значение this внутри стрелки
//  после её объявления нельзя.

// ИНТЕРЕСНО!!!!!!!!!!!!!!!!!
// Контекст внутри стрелки определяется местом её объявления,
// а не вызова и ссылается на контекст родительской функции.

// Стрелочные функции также игнорируют наличие строгого режима.
// Если стрелка запомнила глобальный контекст, то this в ней будет содержать ссылку
// на window независимо от того, выполняется скрипт в строгом режиме или нет.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// const hotel = {
// 	username: 'Resort hotel',
// 	showThis() {
// 		const foo = () => {
// 			// Стрелки запоминают контекст во время объявления,
// 			// из родительской области видимости
// 			console.log('this in foo: ', this);
// 		};

// 		foo();
// 		console.log('this in showThis: ', this);
// 	},
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Методы функций -------------------------------------------------------------------------------------

//Метод call() --------------------------

// foo.call(obj, arg1, arg2, ...)

// Метод call вызовет функцию foo так,
// что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т.д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
// greetGuest.call(poly, "С приездом"); // С приездом, Поли.

// Метод apply -------------------------------------------------------------------------------

// Метод apply это аналог метода call за исключением того,
// что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])

// function greetGuest(greeting) {
// 	console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
// 	username: 'Манго',
// };
// const poly = {
// 	username: 'Поли',
// };

// greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.

// Метод bind()

// Методы call и apply вызывают функцию «на месте», то есть сразу.
// Но в случае колбэк - функций, когда необходимо не сразу вызвать функцию,
// а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...);

// function greet(clientName) {
// 	return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
// 	service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter('Манго')); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
// 	service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter('Поли')); // "Поли, добро пожаловать в «Gmail»."

// bind() и методы объекта ------------------------------------------------------------------------------

// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() это вызов метода getFullName без объекта
// 	console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// // // ❌ Было
// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer));
