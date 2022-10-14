// const calculator = {
// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},
// 	add() {
// 		return this.a + this.b;
// 	},
// 	mult() {
// 		return this.a * this.b;
// 	},
// };

// const { get } = require('lodash');

// console.log(calculator);
// calculator.read(2, 4);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
// console.log(calculator);

//SECOND--------------------------------

// class User {
// 	constructor(val1, val2) {
// 		this.name = val1;
// 		this.email = val2;
// 	}

// 	get mail() {
// 		console.log(this.email);
// 	}

// 	set mail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// const objA = new User('User', 'usermail@mail.com');
// console.log(objA);

// objA.mail; // get
// objA.mail = 'new@mail.com'; // set

// class Blogger {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} topics ${this.topics}`;
//     }

//     updatePosts() {
//         return this.numberOfPosts += 1;
//     }
// }

// function foo() {
// 	console.log(this);
// }

// const objA = {
// 	thisCall: foo,
// };

// objA.thisCall();

// const objA = {
// 	name: 'objA',
// 	foo() {
// 		console.log(this);
// 	},
// };

// const objB = {
// 	name: 'objB',
// 	cth: objA.foo,
// };

// objA.foo();
// objB.cth();

// const objC = {
// 	name: 'objC',
// 	cFunc: objB.cth,
// };

// objC.cFunc();

// const arrowFoo = () => {
// 	console.log(this);
// };

// arrowFoo(); //undefined with type=module

// const objD = {
// 	name: 'D',
// 	foo: () => console.log(this),
// };

// objD.foo();

// const foo = () => console.log(this);

// const objE = {
// 	key: foo,
// };

// objE.key();

// const objA = {
// 	name: 'objA',
// };
// const objC = {
// 	name: 'objC',
// };

// function foo(a, b) {
// 	console.log(this, a, b);
// }

// function boo() {
// 	console.log('Hello from boo');
// }

// function moo() {
// 	console.log('Hello from moo');
// }

// foo.call(objC, 20, 50);
// foo.apply(objA, [boo, moo]);

// const loo = foo.bind(objC, boo, moo);

// const too = foo.bind(objA, 5, boo);

// loo();
// too();

// OR

// const loo = foo.bind(objC);
// const too = foo.bind(objA);

// loo(foo);
// too(boo, moo);

// const felix = {
// 	name: 'Felix',
// 	sayHello: function () {
// 		console.log(`Hello ${this.name}`);
// 	},
// };

// const mia = {
// 	name: 'Mia',
// };

// const bulochka = {
// 	name: 'Bulochka',
// };

// const miaSayHello = felix.sayHello.bind(mia); // привязка метода Феликс к контексту объекта Миа
// const bulochkaSayHello = felix.sayHello.bind(bulochka); // привязка метода Феликс к контексту объекта Булочка

// felix.sayHello();
// felix.sayHello.call(mia); // вызов метода Феликс к контексту объекта Миа
// felix.sayHello.apply(bulochka); // вызов метода Феликс к контексту объекта Миа
// miaSayHello();
// bulochkaSayHello();

// const obj = {
// 	name: 'my name',
// 	surname: 'my surname',
// 	sayHello() {
// 		console.log('sayHello:', this.name);

// 		const boo = () => {
// 			console.log('boo:', this.surname);

// 			const doo = () => {
// 				console.log('doo:', this.name, this.surname);
// 			};
// 			doo();
// 		};
// 		return boo;
// 	},
// };

// // obj.sayHello()();

// const boo = obj.sayHello();
// // console.log(boo);
// boo();

// class Car {
// 	constructor({ model, color, wheels, engine }) {
// 		this.model = model;
// 		this.color = color;
// 		this.wheels = wheels;
// 		this.engine = engine;
// 	}
// 	addProps(newProp, newValue) {
// 		if (newProp !== this[newProp]) {
// 			this[newProp] = newValue;
// 		}
// 	}
// 	get modelCar() {
// 		return this.model;
// 	}
// 	set modelCar(newModel) {
// 		this.model = newModel;
// 	}
// 	get colorCar() {
// 		return this.color;
// 	}
// 	set colorCar(newColor) {
// 		this.color = newColor;
// 	}
// 	get wheelsCar() {
// 		return this.wheels;
// 	}
// 	set wheelsCar(newWheels) {
// 		this.wheels = newWheels;
// 	}
// 	get engineCar() {
// 		return this.engine;
// 	}
// 	set engineCar(newEngine) {
// 		this.engine = newEngine;
// 	}
// }

// const nissanAlmera = new Car({
// 	model: 'Almera classic',
// 	color: 'silver',
// 	wheels: 'summer',
// 	engine: 1.6,
// });

// console.log(nissanAlmera);
// console.log(nissanAlmera.wheelsCar); // getter
// nissanAlmera.wheelsCar = 'winter'; //setter
// console.log(nissanAlmera.wheelsCar); // getter
// nissanAlmera.colorCar = 'blue';
// nissanAlmera.engine = 2.5;
// nissanAlmera.addProps('oil', 'castrol');
// nissanAlmera.addProps('fiel', '95A');

// console.log(nissanAlmera); // obj
// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.
// 'use strict'
// const chopShop = {
// 	stones: [
// 		{
// 			name: 'Emerald',
// 			price: 1300,
// 			quantity: 4,
// 		},
// 		{
// 			name: 'Diamond',
// 			price: 2700,
// 			quantity: 3,
// 		},
// 		{
// 			name: 'Sapphire',
// 			price: 1400,
// 			quantity: 7,
// 		},
// 		{
// 			name: 'Ruby',
// 			price: 800,
// 			quantity: 2,
// 		},
// 	],
// 	// 	// calcTotalPrice(stoneName) {
// 	// 	// 	return this.stones.reduce(
// 	// 	// 		(acc, { name, price, quantity }) =>
// 	// 	// 			name === stoneName ? (acc = price * quantity) : acc,   // reduce
// 	// 	// 		0
// 	// 	// 	);
// 	// 	// 	// return this.stones.reduce((acc, stone) => {
// 	// 	// 	// 	if (stoneName === stone.name) {
// 	// 	// 	// 		return stone.price * stone.quantity;
// 	// 	// 	// 	}
// 	// 	// 	// 	return acc;
// 	// 	// 	// }, 0);
// 	// 	// },

// 	// calcTotalPrice(stoneName) {
// 	// 	const { price, quantity } = this.stones.find(
// 	// 		// find
// 	// 		item => item.name === stoneName
// 	// 	);
// 	// 	return price * quantity;
// 	// },

// 	calcTotalPrice(stoneName) {
// 		const { price, quantity } = this.stones.find(
// 			stone => stone.name === stoneName
// 		);
// 		return price * quantity;
// 	},
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// Доробити виклик функції this.generateId щоб після call this не втрачався

// const phonebook = {
// 	contacts: [],
// 	add(contact) {
// 		// console.log(createid);
// 		const newContact = {
// 			list: 'default',
// 			...contact,
// 			id: phonebook.generateId(),
// 			createdAt: () => phonebook.getDate(),
// 		};
// 		this.contacts.push(newContact);
// 		return this.contacts;
// 	},
// 	generateId() {
// 		return '_' + Math.random().toString(36).substr(2, 9);
// 	},
// 	getDate() {
// 		return Date.now();
// 	},
// };

// console.log(
// 	phonebook.add({
// 		name: 'Mango',
// 		email: 'mango@mail.com',
// 		list: 'friends',
// 	})
// );
// console.log(
// 	phonebook.add({
// 		name: 'Poly',
// 		email: 'poly@hotmail.com',
// 	})
// );

// const newPhoneBook = {
// 	name: 'newPhoneBook',
// 	contacts: [],
// };
// phonebook.add.call(newPhoneBook, {
// 	name: 'Mark',
// 	email: 'mark@mail.com',
// 	list: 'friends',
// });
// console.log(newPhoneBook);

// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// create(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
// 	create(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},
// 	sum() {
// 		return this.a + this.b;
// 	},
// 	mult() {
// 		return this.a * this.b;
// 	},
// };

// console.log(calculator);
// calculator.create(5, 6);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);

// const obj = {
// 	name: 'user',
// };
// console.log(obj);

// const arr = [1, 2, 3, 4];
// console.log(arr);

// String.prototype.sayHello = function (name) {
// 	console.log(`Hello my name ${name}`);
// };

// const str = '12324345';

// str.sayHello('Artem');
// const arr = [1,2]
// [1,2].sayHello('Vlad')
// console.log([1,2]);

// const arr = [1, 2, 3];

// arr.forEach(val => console.log(val));
// console.log(arr);

// const objA = {
// 	name: 'user',
// 	sayHello() {
// 		return 'Hello';
// 	},
// };

// const objB = Object.create(objA);
// objB.age = 11;
// console.log(objB);
// console.log(objB.sayHello());

// const objC = Object.create(objB);
// objC.sayHello = function () {
// 	return 'Hello from ADMIN!!!!!!!';
// };

// class User {
// 	constructor(name, email) {
// 		this.name = name;
// 		this.email = email;
// 	}

// 	getEmail() {
// 		return this.email;
// 	}

// 	setEmail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// const objA = new User('User', 'user@gmail.com');
// console.log(objA);
// console.log(objA.getEmail());
// objA.setEmail('new-user@gmail.com');
// console.log(objA);
// const user = new User('User', 'user@gmail.com');
// const admin = new User('Admin', 'admin@gmail.com');
// const creator = new User('Creator', 'creator@gmail.com');
// const superAdmin = new User('superAdmin', 'superadmin@gmail.com');
// console.log(user.getEmail());
// user.setEmail('new-user@gmail.com');
// console.log(user);
// admin.setEmail('new-admin@mail.ua');
// console.log(admin);
// creator.setEmail('new-creator@hh.pl');
// console.log(creator);
// console.log(superAdmin);
// console.log(superAdmin.getEmail());
// superAdmin.setEmail('new_super-admin@outlook.com');
// console.log(superAdmin.getEmail());

// // На основе объекта!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const obj = {
// 	name: 'default',
// 	email: 'test@gm.com',

// 	getEmail() {
// 		console.log(this.email);
// 	},

// 	setEmail(newEmail) {
// 		this.email = newEmail;
// 	},
// };

// const objA = Object.create(obj);
// objA.name = 'User';
// objA.email = 'user@gm.com';

// class User {
// 	static role = {
// 		admin: 'Admin',
// 		user: 'User',
// 	};
// 	static total = 0;

// 	static counter() {
// 		User.total += 1;
// 	}

// 	#password;
// 	constructor(val1, val2, val3, val4) {
// 		this.name = val1;
// 		this.email = val2;
// 		this.#password = val3;
// 		this.role = val4;
// 		User.counter();
// 	}

// 	get mail() {
// 		console.log(this.email);
// 	}

// 	set mail(newEmail) {
// 		if (this.email !== newEmail) {
// 			this.email = newEmail;
// 		}
// 	}
// 	get password() {
// 		console.log(this.#password);
// 	}
// 	set password(newPassword) {
// 		this.#checkPassword(newPassword);
// 	}

// 	#checkPassword(newPassword) {
// 		if (newPassword.length > 5) {
// 			alert('Пароль усішно змінено');
// 			this.#password = newPassword;
// 		} else {
// 			// console.log('Потрібно більше символів');
// 			alert('Потрібно більше символів');
// 		}
// 	}
// }

// const user = new User('User', 'user@gmail.com');
// const newUserPsWd = prompt('Введите пароль не менее 5 символов:');
// user.password = newUserPsWd;
// // user.password = 'newPsWd';
// user.mail;
// console.log(user);

// constructor(val1, val2, val3, val4) {
//     this.name = val1;
//     this.email = val2;
//     this.#password = val3;
//     this.role = val4;
//     User.counter()
// }
// class Admin extends User {
//     constructor(name,email,password,role, icon){
//         super(name,email,password,role  )
//         this.icon = icon;
//     }
// }

// const objA = new User("User", 'user@gmail.com', "12345", User.role.user);
// console.log(objA);
// const objB = new Admin("Admin", 'admin@gmail.com', "12345", User.role.admin,'cool icon');
// console.log(objB);

// const objC = new User("Gamer", 'gamer@gmail.com', "12345", User.role.user);
// const objD = new User("Gamer", 'gamer@gmail.com', "12345", User.role.user);
// objB.password = '123456'

// console.log(objA);
// console.log(objB);
// console.log(objC);
// console.log(User.total);

// objA.mail = 'coolUser@gmail.com'
// objA.mail
// objA.setEmail("test@gmail.com")
// objA.getEmail()
// console.log(objA);

// class Animal{
//     constructor(name, sound){
//         this.name = name;
//         this.sound = sound
//     }

//     speak(){
//         console.log(this.sound);
//     }
// }

// Example 1 - Блоггер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік} years old and has ${у постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//     constructor({name,age,numberOfPosts,topics}){
//       this.name = name;
//       this.age= age;
//       this.numberOfPosts = numberOfPosts;
//       this.topics = topics;
//     }

//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });

//   console.log(mango);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
//   mango.updatePostCount(5);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

//   const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });
//   console.log(poly);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
//   poly.updatePostCount(4);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(arr){
//         this.items = arr
//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(item){
//         this.items.push(item)
//     }
//     // removeItem(item){
//     //     if(this.items.includes(item)){
//     //         const idx = this.items.indexOf(item);
//     //         this.items.splice(idx,1)
//     //     }
//     // }
//     removeItem(item){
//         const idx = this.items.indexOf(item);
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//         // -(-1+1) = -0
//         // -(0+1) = -1
//         // if(idx !== '')
//         // Boolean(~idx)
//         // !!~idx
//         console.log(!!~idx);
//         if(!!~idx){
//             this.items.splice(idx,1)
//         }else{
//             console.log('NEMA');
//         }
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.addItem('🍎');
// console.table(storage.items)
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍎');
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.

// class User {}

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });
//   mango.login = 'asvasdadasd'
// console.log(mango);

// mango.login; // Mango
// mango.login = 'Mangodoge';
// console.log(mango);
// mango.login; // Mangodoge

//   const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     };
//     constructor(arr) {
//         this.items = arr;
//     }
//     addNote(note) {
//         this.items.push(note);
//     }
//     // removeNote(text) {
//     //     const idx = this.items.findIndex(({
//     //         text: itemText
//     //     }) => text === itemText)
//     //     console.log(idx);
//     //     if(!!~idx){
//     //         this.items.splice(idx,1)
//     //     }else{
//     //         console.log('НЕМАЄ');
//     //     }
//     // }
//     // removeNote(text) {
//     //    const inArr = this.items.some(item => item.text === text)
//     //     if(inArr){
//     //         const idx = this.items.findIndex(({
//     //             text: itemText
//     //         }) => text === itemText)
//     //         this.items.splice(idx,1)
//     //     }else{
//     //         console.log('НЕМАЄ');
//     //     }
//     // }
//     removeNote(text) {
//         const inArr = this.items.find(item => item.text === text)
//          if(inArr){
//              const idx = this.items.findIndex(({
//                  text: itemText
//              }) => text === itemText)
//              this.items.splice(idx,1)
//          }else{
//              console.log('НЕМАЄ');
//          }
//      }

//      updateNote(text, newPriority){
//         const inArr = this.items.find(item => item.text === text);
//         if(inArr){
//             inArr.priority = newPriority;
//         }else{
//             console.log('НЕМАЄ');
//         }
//      }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'Моя перша нотатка',
//     priority: Notes.Priority.LOW
// });
// myNotes.addNote({
//     text: 'Моя друга нотатка',
//     priority: Notes.Priority.HIGH
// });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя друга нотатка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За зомовчуванням значення властивості on має бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
