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

// function greet(clientName) {
// 	return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
// 	service: 'Steam',
// };

// const steamGeetter = greet.bind(steam);
// console.log(steamGeetter('Mango'));

// const gmail = {
// 	service: 'Gmail',
// };

// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter('Poly'));

// function witcher(magicSkills) {
// 	return this.magicSkills.push(magicSkills);
// }

// const herald = {
// 	name: 'Herald',
// 	magicSkills: ['igni', 'aksiy', 'irden'],
// 	harisma: 'Ultra',
// };

// const ciri = {
// 	name: 'Cirilla',
// 	magicSkills: ['transport', 'oldest-blood'],
// 	harisma: 'Normal',
// };

// const setMagicHerald = witcher.bind(herald);
// setMagicHerald('New-Power');

// const setMagicCiri = witcher.bind(ciri);
// setMagicCiri('New-Blood');

// console.log(herald);

// console.log(ciri);

// Объектно-ориентированное программирование---------------------------

/* Процедурное программирование - набор не связанных явно функций и 
переменных для хранения и обработки информации. Этот подход прост и 
прямолинеен и подходит для задач где нет тесно связанных сущностей 
(данных и функций для их обработки).
*/

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
// 	return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

/* Объектно-ориентированное программирование (ООП) - 
    методология, основанная на представлении программы в виде совокупности
    объектов, каждый из которых содержит данные(свойства) 
    и методы для взаимодействия с ними.
*/

// const employee = {
// 	baseSalary: 30000,
// 	overtime: 10,
// 	rate: 20,
// 	getWage() {
// 		return this.baseSalary + this.overtime * this.rate;
// 	},
// };

// console.log(employee.getWage());

/*      Идеологически, ООП - это подход к программированию как к 
    моделированию, решающий основную задачу - структурирование информации
    с точки зрения управляемости, что существенно 
    улучшает контроль процесса моделирования.   !!!!!!!!!!!!!!!!!!!!!!!
*/

//  Сущности ООП --------------------------------------------------

// Класс------------------------------------------------------------

/*Класс - способ описания сущности, определяющий 
состояние и поведение, зависящее от этого состояния, 
а также правила для взаимодействия с данной сущностью (контракт).*/

/*      В нашем случае, класс описывает сущность – автомобиль. 
    Свойствами класса будут двигатель, колеса, фары и т. д. 
    Методами класса будут открыть дверь, 
    завести двигатель, увеличить скорость и т. п. */

// Экземпляр -----------------------------------------------------------

/*
        Экземпляр (объект) - это отдельный представитель класса, 
    имеющий конкретное состояние и поведение, полностью определяемое классом.
    Это то, что создано по чертежу, то есть по описанию из класса.
*/

/*
        Говоря простым языком, объект имеет конкретные значения свойств и методы,
    работающие с этими свойствами на основе правил, заданных в классе.
    В данном примере, если класс - это некоторый абстрактный автомобиль 
    на чертеже, то объект - это конкретный автомобиль, 
    стоящий у нас под окнами.
*/

// Интерфейс -----------------------------------------------------------

/*  Интерфейс - это набор свойств и методов класса,
    доступных для использования при работе с экземпляром.
*/

// Прототипное наследование ---------------------------------------------

/* ООП в JavaScript построено на прототипном наследовании.
 Объекты можно организовать в цепочки так, чтобы свойство не найденное в 
 одном объекте, автоматически искалось бы в другом. 
 Связующим звеном выступает специальное скрытое свойство [[Prototype]], 
 которое в консоли браузера отображается как __proto__.
*/

// Прототип объекта ---------------------------------------------------

// Метод Object.create(obj) создаёт и возвращает новый объект,
// связывая его с объектом obj.

// const animal = {
// 	legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // isPrototypeOf проверяет является ли объект animal прототипом для dog и возвращает true или false.

// console.log(dog.hasOwnProperty('name')); // true hasOwnProperty проверка на собственное свойство
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

// То есть прототип - это резервное хранилище свойств и методов объекта,
// автоматически используемое при их поиске.
// У объекта, который выступает прототипом может также быть
// свой прототип, у того свой, и так далее.

/*      В спецификации свойство __proto__ обозначено как [[Prototype]]. 
    Двойные квадратные скобки здесь важны, они указывают на то, 
    что это внутреннее, служебное свойство.
*/

// Метод hasOwnProperty() -----------------------------------------------

//   После того как мы узнали о том, как происходит поиск свойств объекта,
// должно стать понятно, почему цикл for...in не делает различия
// между свойствами объекта и его прототипа.

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.tail = 'big';
// dog.tooths = 'venom';

// const charlie = Object.create(dog);
// charlie.voice = 'gooov goov';

// for (const key in charlie) {
// 	if (charlie.hasOwnProperty(key)) {
// 		console.log(`Charlie all props. Key ${key} : ${charlie[key]}`);
// 	}
// }
// console.log(charlie); // {voice: 'gooov goov'}
// console.log(charlie.eat); // undefined
// console.log(charlie.eats); // true

/*
        Именно поэтому мы используем метод obj.hasOwnProperty(prop), 
    который возвращает true, если свойство prop принадлежит самому 
    объекту obj, а не его прототипу, иначе false.
*/

// const animal = {
// 	eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
// 	if (!dog.hasOwnProperty(key)) continue;

// 	console.log(key); // barks
// }

//      Метод Object.keys(obj) вернет массив только собственных
//  ключей объекта obj, поэтому на практике используют именно его,
//  а не for...in.
//  Метод Object.values(obj) вернет массив только собственных
//  знаяений ключей объекта obj, поэтому на практике используют
//  именно его, а не for...in.

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// Классы ----------------------------------------------------------

/*      Синтаксис литерала объекта позволяет создать один объект. 
    Но часто нужно создать много однотипных объектов с одинаковым 
    набором свойств, но разными значениями и методами для взаимодействия
    с ними. Всё это нужно сделать динамичекски, во время выполнения 
    программы. Для этого используют классы - специальный синтаксис 
    объявления функции для создания объектов */

// Объявление класса -----------------------------------------------

// class User {
// 	// Class body
// }

// const mia = new User();
// console.log(mia);

// const felix = new User();
// console.log(felix);

/*
    Результат вызова new User() это объект, 
 который называется экземпляр класса, потому что содержит данные
 и поведение, описываемые классом.
*/

// Конструктор класса ----------------------------------------------

/*
Для инициализации экземпляра в классе есть метод constructor. 
Если он не объявлен, создаётся конструктор по умолчанию 
- пустая функция, которая не изменяет экземпляр.
*/

// class User {
// 	// Синтаксис объявления метода класса
// 	constructor(name, email) {
// 		// Инициализация свойств экземпляра
// 		this.name = name;
// 		this.email = email;
// 	}
// }

// const mia = new User('Mia', 'mia@mail.com');
// console.log(mia); // { name: 'Манго', email: 'mango@mail.com' }

// const felix = new User('Felix', 'felix@mail.com');
// console.log(felix); // { name: 'Поли', email: 'poly@mail.com' }

/*      Вызов класса с оператором new приводит к созданию нового объекта
    и вызову конструктора в контексте этого объекта. 
    То есть this внутри конструктора будет ссылаться на 
    новосозданный объект. Это позволяет добавлять каждому объекту 
    свойства с одинаковыми именами, но разными значениями.

    Свойства name и email называются публичные свойства, потому что они 
    будут собственными свойствами объекта-экземпляра и к ним можно будет
    получить доступ обратившись через точку.
*/

// Объект параметров ----------------------------------------------------

// class User {
// 	// Деструктуризируем объект параметров
// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.email = email;
// 	}
// }

// const mia = new User({ name: 'Mia', email: 'mia@mail.com' });
// console.log(mia);

// const felix = new User({ name: 'Felix', email: 'felix@mail.com' });
// console.log(felix);

// Методы класса ---------------------------------------------------------

/*
Для работы со свойствами будущего экземпляра используются методы класса - 
функции которые будут доступны экземпляру в его прототипе.
*/

// class User {
// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.email = email;
// 	}
// 	// Метод getEmail
// 	getEmail() {
// 		return this.email;
// 	}
// 	// Метод changeEmail
// 	changeEmail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// const mia = new User({ name: 'Mia', email: 'mia@mail.com' });

// mia.changeEmail('mia-new@mail.com');
// console.log(mia.getEmail());
// console.log(mia);

// Приватные свойства

/*      Инкапсуляция - это концепция позволяющая скрыть внутренние детали
    класса. Пользователь класса должен получать доступ только к публичному
    интерфейсу - набору публичных свойств и методов класса. */

// В классах инкапсуляция реализуется приватными свойствами,
// доступ к которым можно получить только внутри класса.

/*  Допустим, почта пользователя должна быть недоступна для прямого
  изменения из вне, то есть приватна. Добавляя к имени свойства 
  символ # мы делаем его приватным. Объявление приватного свойства 
  до инициализации в конструкторе - обязательно.
*/

// class User {
// 	// Необязательное объявление публичных свойств
// 	name;
// 	// Обязательное объявление приватных свойств
// 	#email;

// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.#email = email;
// 	}

// 	getEmail() {
// 		return this.#email;
// 	}

// 	changeEmail(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// const felix = new User({ name: 'Felix', email: 'felix@gmail.com' });
// console.log(felix);

// felix.changeEmail('new-felix@gmail.com');
// console.log(felix.getEmail());
// console.log(felix.#email); // error;

// Геттеры и сеттеры;

/*
Геттеры и сеттеры - это более краткий синтаксис объявления методов
для взаимодействия со свойствами. Геттер и сеттер имитируют обычное
публичное свойство класса, но позволяют изменять другие свойства
более удобным способом. Геттер выполняется при попытке получить
значение свойства, а сеттер - при попытке его изменить.
//
Геттеры и сеттеры хорошо использовать для простых операций чтения
и изменения значения свойств, особенно приватных, как их публичный
интерфейс. Для работы со свойством которое хранит массив или объект
они не подойдут.
*/

// class User {
// 	#email;

// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.#email = email;
// 	}
// 	// Сеттер name
// 	get userName() {
// 		return this.name;
// 	}
// 	// Сеттер name
// 	set userName(newName) {
// 		if (                        // С проверкой
// 			newName === '' ||
// 			newName === 'number' ||
// 			newName === null ||
// 			newName === undefined
// 		) {
// 			console.error(
// 				'Error, new name don`t equal numbers, null and empty string'
// 			);
// 			return;
// 		}
// 		this.name = newName;
// 	}
// 	// Геттер email
// 	get email() {
// 		return this.#email;
// 	}
// 	// Сеттер email
// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// const bulochka = new User({ name: 'Bulochka', email: 'bulka@hmail.com' });
// console.log(bulochka.email);
// bulochka.email = 'bulochka-s-koricey@gmail.com';
// console.log(bulochka.email);

// console.log(bulochka.userName);
// bulochka.userName = 'Bulka';
// bulochka.userName = '';
// bulochka.userName = 0;
// bulochka.userName = null;
// console.log(bulochka.userName);

// console.log(bulochka);

/*
Плюс в том, что это методы, а значит при записи можно выполнить 
дополнительный код, например с какими-то проверками, в отличии от 
выполнениях этой же операции напрямую со свойством.
*/

// Статические свойства -----------------------------------------------

/*
        Кроме публичных и приватных свойств будущего экземпляра, в классе можно
    объявить его собственные свойства, доступные только классу, 
    но не его экземплярам - статические свойства (static). 
    Они полезны для хранения информации относящейся к самому классу.
*/

// class User {
// 	// Объявление и инициализация статического свойства
// 	static Roles = {
// 		ADMIN: 'admin',
// 		EDITOR: 'editor',
// 	};

// 	#email;
// 	#role;

// 	constructor({ email, role }) {
// 		this.#email = email;
// 		this.#role = role;
// 	}

// 	get userRole() {
// 		return this.#role;
// 	}

// 	set userRole(newRole) {
// 		this.#role = newRole;
// 	}

// 	get userEmail() {
// 		return this.#email;
// 	}

// 	set userEmail(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// const felix = new User({ email: 'felix@gmail.com', role: User.Roles.ADMIN });

// console.log(felix.Roles);
// console.log(User.Roles.ADMIN);
// console.log(felix.role);
// console.log(felix.email);

// class User {
// 	// Объявление и инициализация статического свойства
// 	static Roles = {
// 		ADMIN: 'admin',
// 		EDITOR: 'editor',
// 	};

// 	#email;
// 	#role;

// 	constructor({ email, role }) {
// 		this.#email = email;
// 		this.#role = role;
// 	}

// 	get role() {
// 		return this.#role;
// 	}

// 	set role(newRole) {
// 		this.#role = newRole;
// 	}
// }

// const mango = new User({
// 	email: 'mango@mail.com',
// 	role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// Статические методы-------------------------------------

/*
В классе можно объявить не только методы будущего экземпляра, 
но и методы доступные только классу - статические методы, которые 
могут быть как публичные так и приватные. Синтаксис объявления 
аналогичен статическим свойствам, за исключением того что значением 
будет метод.
*/

// class User {
// 	static #takenEmails = [];

// 	static isEmailTaken(email) {
// 		return User.#takenEmails.includes(email);
// 	}

// 	#email;

// 	constructor({ email }) {
// 		this.#email = email;
// 		User.#takenEmails.push(email);
// 	}
// }

// const mia = new User({ email: 'mia@gmail.com' });

// console.log(User.isEmailTaken('mia@gmail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// class User {
// 	#email;

// 	constructor(email) {
// 		this.#email = email;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// class ContentEditor extends User {
// 	// Тело класса ContentEditor
// 	constructor({ name, email, position }) {
// 		super(email);
// 		this.name = name;
// 		this.position = position;
// 	}
// }

// const editor = new ContentEditor('mango@mail.com', 'Eric', 'designer');
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// Конструктор дочернего класса ------------------------------------------
// class User {
// 	#email;

// 	constructor(email) {
// 		this.#email = email;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// class ContentEditor extends User {
// 	constructor({ email, posts }) {
// 		// Вызов конструктора родительского класса User
// 		super(email);
// 		this.posts = posts;
// 	}
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// Представим что выше есть объявление класса User

// Методы дочернего класса ----------------------------------------------
// class ContentEditor extends User {
// 	constructor({ email, posts }) {
// 		super(email);
// 		this.posts = posts;
// 	}

// 	addPost(post) {
// 		this.posts.push(post);
// 	}
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost('post-1');
// console.log(editor.posts); // ['post-1']
