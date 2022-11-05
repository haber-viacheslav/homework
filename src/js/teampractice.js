// Заполните массив 10 - ю случайными числами(дробями) от 0 до 1
// с помощью цикла.
// Дроби округляйте до двух знаков в дробной части

// const { bindAll } = require('lodash');

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

/*Дан массив с числами. 50 чисел Наполняем, как в прошлом задании. С помощью цикла проверьте, что в нем есть элемент со значением которое пользователь вводит в prompt("Введите число от 0 до 50").
 Как только будет найден первый такой элемент - выведите 'Есть'.
  Если такого элемента нет - вывести alert('Такого числа нет в массиве').*/
// Дополнительно сделать проверку на число, если введено число

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] == 5) {
// 		alert('Есть!');
// 		break;
// 	}
// }

// const arr = [];

// for (let i = 0; i <= 10; i += 1) {
// 	arr.push(i);
// }
// console.log(arr);
// let userData = Number(prompt('Введите число от 0 до 10'));
// console.log(userData);

// for (const value of arr) {
// 	if (value === userData) {
// 		console.log('Есть');
// 		break;
// 	} else {
// 		console.log('Такого числа нет в массиве');
// 	}
// }

/*
//  * Є масив із числами. Створіть із нього новий масив, де залишаться лежати лише позитивні числа. Створіть для цього допоміжну функцію isPositive(), яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
//  */

// const array = [1, 2, 3, -1, -2, -3];
// const newArray = [];

// function isPositive(number) {
// 	// if (number > 0) {
// 	//   return true;
// 	// }

// 	// return false;
// 	return number > 0 ? true : false;
// }

// for (const num of array) {
// 	if (isPositive(num)) {
// 		newArray.push(num);
// 	}
// }

// console.log(newArray);

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
		friends: [
			'Jacklyn Lucas',
			'Linda Chapman',
			'Adrian Cross',
			'Solomon Fokes',
		],
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

// const newObjectAllValues = {};

// const sumProps = function (arr) {
// 	const objectKeys = Object.keys(arr[0]);
// 	for (const key of objectKeys) {
// 		newObjectAllValues[key] = [];
// 	}
// 	// console.log(newObjectAllValues);

// 	for (const item in newObjectAllValues) {
// 		// console.log(item);

// 		for (const user of arr) {
// 			newObjectAllValues[item].push(user[item]);
// 		}
// 	}
// 	// console.log(newObjectAllValues);
// 	return newObjectAllValues;
// };

// console.log(sumProps(users));

// balance: [2811, 3821, 3793, 2278, 3951, 1498, 2764]
// email: ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com']
// eyeColor: ['blue', 'blue', 'green', 'green', 'blue', 'brown', 'brown']
// friends: [Array(1), Array(2), Array(3), Array(2), Array(3), Array(4), Array(2)]
// gender: ['male', 'female', 'male', 'female', 'male', 'male', 'female']
// isActive: [false, true, false, true, true, false, true]
// name: ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

//  Реализуйте класс Student(Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name(имя, наследуется от User),
// surname(фамилия, наследуется от User), year(год поступления в вуз).
// Класс должен иметь метод getFullName()(наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс
// студента(от 1 до 5).Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

// class User {
// 	constructor(name, surname, year) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.year = year;
// 	}
// 	getFullName() {
// 		return `${this.name}  ${this.surname}`;
// 	}
// 	getCourse() {
// 		return 2022 - this.year;
// 	}
// }

// class Student extends User {
// 	constructor(name, surname, year) {
// 		super(name, surname, year);
// 	}
// }

// const student = new Student('Иван', 'Иванов', 2019);
// console.log(student);
// console.log(student.getCourse());
// console.log(student.getFullName());

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иван Иванов'
// console.log(worker.year); //выведет 2019
//console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2022

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }

/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
    surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
    Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
    Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
    С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.
    Вот так должен работать наш класс:

*/

// class Worker {
// 	constructor(name, surname, rate, date) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.rate = rate;
// 		this.date = date;
// 	}
// 	getSalary() {
// 		return this.rate * this.date;
// 	}
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31);
// const buhgalter = new Worker('Раиса', 'Косач', 15, 20);
// const sumSalaries = worker.getSalary() + buhgalter.getSalary();
// console.log(sumSalaries);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// 2. Модифицируйте класс Worker из предыдущей задачи следующим образом:
//   сделайте все его свойства приватными, а для их чтения сделайте методы - геттеры.
//   Наш класс теперь будет работать так:

// const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы - сеттеры.

// Наш класс теперь будет работать так:

// worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// class Worker {
// 	#name;
// 	#surname;
// 	#rate;
// 	#days;
// 	constructor(name, surname, rate, days) {
// 		this.#name = name;
// 		this.#surname = surname;
// 		this.#rate = rate;
// 		this.#days = days;
// 	}
// 	getSalary() {
// 		return this.#rate * this.#days;
// 	}

// 	get thisName() {
// 		return this.#name;
// 	}
// 	set thisName(newName) {
// 		this.#name = newName;
// 	}
// 	get thisSurname() {
// 		return this.#surname;
// 	}
// 	set thisSurname(newSurname) {
// 		this.#surname = newSurname;
// 	}
// 	get thisRate() {
// 		return this.#rate;
// 	}
// 	set thisRate(newRate) {
// 		this.#rate = newRate;
// 	}
// 	get thisDays() {
// 		return this.#days;
// 	}
// 	set thisDays(newDays) {
// 		this.#days = newDays;
// 	}
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31);
// const buhgalter = new Worker('Раиса', 'Косач', 15, 20);
// const sumSalaries = worker.getSalary() + buhgalter.getSalary();
// console.log(sumSalaries);

// console.log(worker.thisName);
// console.log(worker.thisSurname);

// //Теперь используем сеттер:
// worker.thisRate = 20; //увеличим ставку
// worker.thisDays = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10
