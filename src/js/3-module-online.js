// const user = {
// 	userName: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;

// console.log(user);

// const array = Object.keys(user);
// for (const key of array) {
// 	console.log(`${key}- ${user[key]}`);
// }
// Пример собственных свойств------------
// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Peter: 130,
// };

// const test = Object.create(salaries);
// test.Kate = 140;
// test.David = 450;

// console.log(test);

// function getResult(object) {
// 	const values = Object.values(object);
// 	let sum = 0;
// 	// for (const value of values) {
// 	// 	sum += value;
// 	// }
// 	// return sum;
// 	for (const key in object) {
// 		if (object.hasOwnProperty) {
// 			console.log('Собственные свойства', key);
// 		}
// 	}
// }
// console.log(getResult(salaries));
// // console.log(getResult(test));

// const Transaction = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// };

// const account = {
// 	balance: 0,

// 	transaction: [],

// 	createTransaction(amount, type) {
// 		const transaction = {
// 			amount,
// 			type,
// 			id: Date.now(),
// 		};
// 		return transaction;
// 	},

// 	deposit(amount) {
// 		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.transaction.push(transaction);
// 		this.balance += amount;
// 	},

// 	withdraw(amount) {},
// };

// You need to calculate amount of tip to give in a cafe
// Workflow:

//1. User inputs check summ. (Use "prompt" function).
//2. User input tip percentage. (Use "prompt" function).
//3. For canceled input show "Canceled".
//4. You need to validate the input data: both values should be numbers,
//check summ can't be a negative number, percentage can't be negative and bigger than 100.
//5. If input data isn't valid, you should show message "Invalid input data". (Use "alert" function).
//6. You need to calculate tip amount and total sum to pay.
//7. Show message: (example). (Use "alert" function).
//
//Check summ: 200
//Tip: 15%
//Tip amount: 30
//Total summ to pay: 230 uah
//
//
//
//
// Вам потрібно розрахувати суму чайових, яку потрібно дати в кафе
// Робочий процес:

//1. Контрольна сума введених користувачем даних.  (Use "prompt" function).
//2. Відсоток чайових, введених користувачем.  (Use "prompt" function).
//3. Для скасованого введення показати «Скасовано».
//4. Вам потрібно перевірити вхідні дані: обидва значення мають бути числами,
//контрольна сума не може бути від'ємним числом, відсоток не може бути від'ємним і перевищувати 100.
//5. Якщо введені дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Use "alert" function).
//6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
//7. Показати повідомлення: (приклад). (Use "alert" function).
//
//Чекова сума: 200
//Порада: 15%
//Сума чайових: 30
//Загальна сума до оплати: 230 грн
//
//

// const summ = prompt('Input check summ !');
// const percentage = prompt('Input percentage !');
// if (summ === null || percentage === null) {
// 	alert('Canceled');
// } else {
// 	const parseSum = Number.parseFloat(summ);
// 	const parsePercentage = Number.parseFloat(percentage);

// 	console.log(parseSum);
// 	console.log(parsePercentage);

// 	if (
// 		Number.isNaN(parseSum) ||
// 		Number.isNaN(parsePercentage) ||
// 		parseSum <= 0 ||
// 		parsePercentage <= 0 ||
// 		parsePercentage > 100
// 	) {
// 		alert('Invalid input data');
// 	} else {
// 		const percentageSum = Number(((parseSum / 100) * parsePercentage).toFixed(2));
// 		const total = Number((parseSum + percentageSum).toFixed(2));
// 		alert(
// 			`Check summ: ${parseSum}
// 			Tip: ${parsePercentage}%
// 			Tip amount: ${percentageSum}
// 			Total sum to pay: ${total}`
// 		);
// 	}
// }

// console.log(typeof (55).toFixed(2));

// const summ = prompt('Input check sum !');
// const percentage = prompt('Input percentage !');
// if (summ === null || percentage === null) {
// 	alert('Canceled');
// } else {
// 	const parseSum = Number.parseFloat(summ);
// 	const parsePercentage = Number.parseFloat(percentage);
// 	// console.log(parseSum);
// 	// console.log(parsePercentage);
// 	// console.log(Number.isNaN(parseSum));
// 	if (
// 		Number.isNaN(parseSum) ||
// 		Number.isNaN(parsePercentage) ||
// 		parseSum <= 0 ||
// 		parsePercentage <= 0 ||
// 		parsePercentage > 100
// 	) {
// 		alert('Invalid input data');
// 	} else {
// 		const percentageSum = Number(((parseSum / 100) * parsePercentage).toFixed(2));
// 		const total = (parseSum + percentageSum).toFixed(2);
// 		alert(`Check summ: ${parseSum}
// Tip: ${parsePercentage}%
// Tip amount: ${percentageSum}
// Total sum to pay:  ${total}`);
// 	}
// }

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: виведи значення використовуючи Object.keys() і for...of

// const user = {
// 	name: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log(user);

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
// 	console.log(`${key} : ${user[key]}`);
// }

// Example 2 - метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
// Приклад власних властивостей
// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// salaries.Alona = 300;
// console.log(salaries);
// const salaryArr = Object.values(salaries);
// let total = 0;
// for (const salary of salaryArr) {
// 	total += salary;
// }
// console.log(total);

// const testObg = Object.create(salaries);

// testObg.David = 500;
// testObg.Lenny = 220;
// testObg.Mark = 120;

// function getResult(object) {
// 	console.log(object);

// 	// const salaryArr = Object.values(object);
// 	let total = 0;
// 	// for (const salary of salaryArr) {
// 	// 	total += salary;
// 	// }
// 	// console.log(total);

// 	for (const key in object) {
// 		// console.log('Все свойста', test);

// 		if (testObg.hasOwnProperty(key)) {
// 			total += object[key];

// 			// console.log('Собственные свойста', key);
// 		}

// 		// if (!testObg.hasOwnProperty(test)) {
// 		// 	console.log('Не собственные свойста', test);
// 		// }
// 	}
// 	return console.log(total);
// }

// getResult(testObg);

// console.log(testObg);
// console.log(salaries);

// Example 3 - Масив об'єктів
// Напишіть ф-цію calcTotalPrice(stones, stoneName),
//яка приймає масив об'єктів та рядок з назвою каменю.
//Ф - ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// 	{
// 		name: 'Смарагд',
// 		price: 1300,
// 		quantity: 4,
// 	},
// 	{
// 		name: 'Діамант',
// 		price: 2700,
// 		quantity: 3,
// 	},
// 	{
// 		name: 'Сапфір',
// 		price: 400,
// 		quantity: 7,
// 	},
// 	{
// 		name: 'Аквамарин',
// 		price: 200,
// 		quantity: 2,
// 	},
// ];

// function calcTotalPrice(stones, stoneName) {
// 	let total = 0;
// 	for (const stone of stones) {
// 		if (stone.name === stoneName) {
// 			total = stone.price * stone.quantity;
// 			return total;
// 		}
// 	}
// 	return null;
// }

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Аметист'));
// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stones, 'Аквамарин'));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account,
// в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// };

// // console.log('BEFORE', Transaction);
// // const test = Transaction.DEPOSIT;
// // delete Transaction.DEPOSIT;
// // Transaction.blabla = test;
// // console.log('AFTER', Transaction);

// const account = {
// 	// Поточний баланс рахунку
// 	balance: 0,

// 	// Історія транзакцій
// 	transactions: [
// 		{
// 			amount: 1300,
// 			type: 'deposit',
// 			id: 1663941500202,
// 		},
// 	],

// 	/*
// 	 * Метод створює та повертає об'єкт транзакції.
// 	 * Приймає суму та тип транзакції.
// 	 */
// 	createTransaction(amount, type) {
// 		const transaction = {
// 			amount,
// 			type,
// 			id: Date.now(),
// 		};
// 		return transaction;
// 		// console.log(transaction);
// 	},

// 	/*
// 	 * Метод, що відповідає за додавання суми до балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * після чого додає його в історію транзакцій
// 	 */
// 	deposit(amount) {
// 		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.transactions.push(transaction);
// 		return (this.balance += amount);
// 	},

// 	/*
// 	 * Метод, що відповідає за зняття суми з балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * Після чого додає його в історію транзакцій.
// 	 *
// 	 * Якщо amount більше ніж поточний баланс, виводь повідомлення
// 	 * про те, що зняття такої суми не можливе, недостатньо коштів.
// 	 */
// 	withdraw(amount) {
// 		if (amount > this.balance) {
// 			alert('Зняття такої суми не можливе, недостатньо коштів.');
// 			return;
// 		}
// 		alert('Зняття коштів.');
// 		const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
// 		this.transactions.push(transaction);
// 		return (this.balance -= amount);
// 	},

// 	/*
// 	 * Метод повертає поточний баланс
// 	 */
// 	getBalance() {
// 		alert(this.balance);
// 	},

// 	/*
// 	 * Метод шукає та повертає об'єкт транзації по id
// 	 */
// 	getTransactionDetails(id) {
// 		for (const transaction of this.transactions) {
// 			if (transaction.id == id) {
// 				return console.log(transaction);
// 			}
// 		}
// 	},

// 	/*
// 	 * Метод повертає кількість коштів
// 	 * певного типу транзакції з усієї історії транзакцій
// 	 */
// 	getTransactionTotal(type) {
// 		let total = 0;
// 		for (const transaction of this.transactions) {
// 			if (transaction.type == type) {
// 				total += transaction.amount;
// 			}
// 		}
// 		return total;
// 	},
// };

// account.createTransaction(1000, Transaction.DEPOSIT);

// account.deposit(8000);

// account.deposit(1000);

// account.deposit(3000);

// account.deposit(1000);

// account.deposit(5000);

// account.deposit(850);

// account.deposit(1300);

// account.withdraw(1000);
// account.withdraw(5000);
// account.deposit(5000);

// account.getBalance();
// console.log(account);
// account.getTransactionDetails(1663941500202);

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// Занятие 6-----------------------------------------------------------------------------

//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

//       obj-----
// function calcBMI({
//     height,
//     weight
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1)); // Math.pow(numericHeight,2 )
// }
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75',
// }));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
// 	const nameList = names.split(',');
// 	const phoneList = phones.split(',');
// 	// console.log(nameList[0]); //1 2 3
// 	// console.log(phoneList[0]); //1 2 3
// 	for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`);
// 	}
// }

// printContactsInfo({
// 	names: 'Jacob,William,Solomon,Artem,Anna',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// });

// const smiles = ['😂', '😁', '😒'];
// for (let i = 0, num = 1; i < smiles.length; i += 1, num += 1) {
//     console.log(`порядковий номер ${num} - ${smiles[i]}`);
// }

//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// https://uk.wikipedia.org/wiki/JSDoc

// /**
//  * Get object with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
//  */
// function getBotReport({ bots : {repairBots, defenceBots}, companyName}) {
//     console.log('companyName', companyName);
//     // console.log('bots',bots);
//     console.log('repairBots',repairBots);
//     console.log('defenceBots',defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50,
//     }
// }));

// ПЕРЕРВА ДО 20.55

// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

/**
 * Get object with value and return info about stock
 * @param {Object} object
 * @returns {String} Info about stock in company
 */
// function getStockReport({companyName, stock}) {
//     const values = Object.values(stock)
//     let total = 0;
//     for(const value of values){
//         total +=value
//     }
//     return `${companyName} has ${total} items in stock`;
//   }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.

// function createContact(partialContact) {
//     return {
//         id : generateId(),
//         list: 'default',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({firstName,lastName, ...info}) {

//     return {
//         fullName: `${firstName} ${lastName}`, //firstName + ' ' + lastName
//         ...info,
//     }
// }
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

// const arr = [1,2,3,4];
// // const min = Math.min(...arr)

// // const arr2 = [...arr]

// const [firstValue, secondValue, ...args] = arr;
// console.log('firstValue',firstValue);
// console.log("secondValue", secondValue);
// console.log('args',args);

// /**
//  * Find stone with current name and return total price quantity * price
//  * @param {Array} stones
//  * @param {String} stoneName
//  * @returns {Number} Sum
//  */
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
//     return null
// }

// function createContact(arr) {
// for (let i = 0; i < arr.length; i += 1){
//     arr[i] = {
//         id: generateId(),
//         list: 'default',
//         ...arr[i]
//     }
// }
//     for (let obj of arr) {
//         obj.id = generateId();
//         if('list' in obj ){

//         }
//         if (!obj.hasOwnProperty('list')) {
//             obj.list = 'default';
//         }
//         // obj = {
//         //     id: generateId(),
//         //     list: 'default',
//         //     ...obj
//         // }
//     }
//     console.log(arr);
// }

// console.log(
//     createContact([{
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }, {
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }]),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr, ...arr2]
// console.log(arr3);

// const user = {
//     name: 'Poly',
//     email: 'poly@hotmail.com',
// }
// delete user
// console.log(user);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };
//   // Change code above this line
// }

//Код	При виведенні буде
// \'	одинарні лапки
// \"	подвійні лапки
// \\	зворотня коса риска
// \n	новий рядок
// \r	повернення каретки
// \t	вкладка
// \b	границі слова
// \f	розрив сторінки

/*-------------------------------------------------КОНСПЕКТ---------------------------------------------- */

//----------------Создание объекта--------------------------------

//Для объявления используются фигурные скобки {} - литерал объекта.

// const book = {
// 	title: 'The Last Kingdom',
// 	author: 'Bernard Cornwell',
// 	genres: ['historical prose', 'adventure'],
// 	isPublic: true,
// 	rating: 8.38,
// 	location: { country: 'UK', state: 'North-Harming', city: 'Dortmut', street: 'Sillerstone', appt: 15 },
// 	year: 2022,
// };

// const userInputPropName = prompt('Enter a property name, please!');

// // Обращение к свойствам через точку-----------

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

//Обращение к вложенным свойствам

// const autorLocation = `Страна выпуска книги: ${book.location.country},\nРегион: ${book.location.state}, \nГород: ${book.location.city},
// Улица: ${book.location.street}, \nОффис: ${book.location.appt}, \nГод выпуска: ${book.year}`;

//Обращение к свойствам через квадратные скобки---------------

// const userInput = book[userInputPropName];

// if (userInputPropName === null) {
// 	alert('Отменено!');
// } else {
// 	if (userInput === undefined) {
// 		alert('Свойсто не найдено!');
// 	} else {
// 		alert(`Свойсто найдено, результат: ${userInput}`);
// 	}
// }

// const info = confirm('Дополнительная информация?');
// if (info === true) {
// 	alert(autorLocation);
// }

// Короткие свойства-----------------------------
//Синтаксис коротких свойств (shorthand properties)

// const ownerName = 'Генри Сибола';
// const age = 25;

// const user = {
// 	ownerName,
// 	age,
// };

// console.log(user.ownerName); // "Генри Сибола"
// console.log(user.age); // 25

// Вычисляемые свойства--------------------------------

// const propName = 'name';
// const user = {
// 	age: 25,
// 	// Имя этого свойства будет взято из значения переменной propName
// 	[propName]: 'Генри Сибола', //Приходит с переменной propName
// };

// console.log(user.name); // 'Генри Сибола'

// Методы объекта ----------------------------------------

//Методы - это функции для работы с данными объекта

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
// 	books: ['The Last Kingdom', 'Dream Guardian'],
// 	// Это метод объекта
// 	getBooks() {
// 		console.log('Этот метод будет возвращать все книги - свойство books');
// 		return this.books;
// 	},
// 	// Это метод объекта
// 	addBook(bookName) {
// 		console.log('Этот метод будет добавлять новую книгу в свойство books');
// 		this.books.push(bookName);
// 	},

// 	removeBook(bookName) {
// 		this.books.splice(this.books.indexOf(bookName), 1);
// 	},
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook('Fantastic book');
// bookShelf.addBook('New book');
// bookShelf.addBook('Old book');
// bookShelf.addBook('Modern book');
// console.log(bookShelf.getBooks());
// bookShelf.removeBook('New book');

// console.log(bookShelf.getBooks());

// const book = {
// 	title: 'The Last Kingdom',
// 	author: 'Bernard Cornwell',
// 	genres: ['historical prose', 'adventure'],
// 	rating: 8.38,
// };

// for (const key in book) {
// 	// Ключ
// 	console.log(key);
// 	// Значение свойства с таким ключом
// 	console.log(book[key]);
// }

// const animals = {
// 	legs: 4,
// 	hairs: true,
// 	eyes: true,
// };

// const myCat = Object.create(animals);

// myCat.food = 'milk';
// myCat.likes = 'sleep';

// for (const key in myCat) {
// 	if (myCat.hasOwnProperty(key)) {
// 		console.log(`${key}: ${myCat[key]}`);
// 	}
// }

// const myDog = Object.create(animals);

// myDog.food = 'meat';
// myDog.likes = 'play';

// console.log(myCat);
// console.log(myDog);

// console.log(Object.entries(myCat));
// console.log(Object.entries(myDog));

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'На берегу спокойных вод',
// 		author: 'Роберт Шекли',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'Сон смешного человека',
// 		author: 'Федор Достоевский',
// 		rating: 7.75,
// 	},
// ];

// let totalRating = 0;
// for (const book of books) {
// 	// console.log(book.title);
// 	// console.log(book.author);
// 	// console.log(book.rating);
// 	totalRating += book.rating;
// }
// console.log(totalRating);
// const averageRating = Number.parseFloat((totalRating / books.length).toFixed(1));
// console.log(averageRating);

// const temps = [14, -4, 25, 8, 11];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));
// let sum = 0;
// for (const temp of temps) {
// 	sum += temp;
// }

// const average = sum / temps.length;
// console.log(average);

//    SPREAD: создание нового массива ------------------------------------------------

// const temps = [14, -4, 25, 8, 11];

// const copyTemps = [...temps]; // Создаём точную копию, а не присваиваем по ссылке, другой адрес в памяти.
// console.log(temps === copyTemps); // false

// console.log(copyTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [10, 17, 22, ...lastWeekTemps, 5, 7, 18, ...currentWeekTemps, 1, 15, 18, 13, ...temps]; // Собираем новый массив из нескольких и многих других элементов, порядок соответствует переданному.
// console.log(allTemps);

//    SPREAD: создание нового объекта ------------------------------------------------

// Операция ... (spread) позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

//Во время распыления можно добавлять свойства в произвольное место.
// Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

//   REST: сбор всех аргументов функции -------------------------------------------------
// Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию.
// Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда (...)
// находится в правой части операции присваивания, а сбор это когда (...) находится в её левой части.

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?
// function multiply(...args) {
// 	console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//REST: сбор части аргументов функции

// Деструктуризация объектов --------------------------------------------------------------------
// const book = {
// 	title: 'The Last Kingdom',
// 	author: 'Bernard Cornwell',
// 	genres: ['historical prose', 'adventure'],
// 	isPublic: true,
// 	rating: 8.38,
// };

// const { title, author, genres, isPublic, rating } = book;

// console.log(genres);
// console.log(rating);
// Деструктуризация всегда находится в левой части операции присвоения.!!!!
// Переменным внутри фигурных скобок присваиваются значения свойств объекта.
// Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined.
// Порядок объявления переменных в фигурных скобках не важен.

// Деструктуризация в циклах----------

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'На берегу спокойных вод',
// 		author: 'Роберт Шекли',
// 		rating: 8.51,
// 	},
// ];

// // for (const book of books) {
// // 	const { title, author, rating } = book;

// // 	console.log(title);
// // 	console.log(author);
// // 	console.log(rating);
// // }

// // ИЛИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// for (const { title, author, rating } of books) {
// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }

// Глубокая деструктуризация----------

// const user = {
// 	name: 'Jacques Gluke',
// 	tag: 'jgluke',
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name,
// 	tag,
// 	stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Деструктуризация массивов-----------------------------------------------------------

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Элементы можно пропускать.Допустим, из массива rgb необходимо взять только последнее значение.
// На практике эта возможность используется редко.

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// Паттерн «Объект параметров» ---------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Паттерн «Объект параметров» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

// function doStuffWithBook(book) {
// 	// Делаем что-то со свойствами объекта
// 	console.log(book.title);
// 	console.log(book.numberOfPages);
// 	// И так далее
// }

// doStuffWithBook({
// 	title: 'The Last Kingdom',
// 	numberOfPages: 736,
// 	downloads: 10283,
// 	rating: 8.38,
// 	isPublic: true,
// });

// // Деструктуризация объекта параметров
// function doStuffWithBook(book) {
// 	const { title, numberOfPages, downloads, rating, isPublic } = book;
// 	console.log(title);
// 	console.log(numberOfPages);
// 	// И так далее
// }

// // Или сразу в сигнатуре (подписи) функции, разницы нет.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
// 	console.log(title);
// 	console.log(numberOfPages);
// 	// И так далее
// }

//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

//       obj
// function calcBMI({
//     height,
//     weight
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1)); // Math.pow(numericHeight,2 )
// }
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75',
// }));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({
//     names,
//     phones
// }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // console.log(nameList[0]); //1 2 3
//     // console.log(phoneList[0]); //1 2 3
//     for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem,Anna',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// });

// const smiles = ['😂', '😁', '😒'];
// for (let i = 0, num = 1; i < smiles.length; i += 1, num += 1) {
//     console.log(`порядковий номер ${num} - ${smiles[i]}`);
// }

//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// https://uk.wikipedia.org/wiki/JSDoc

// /**
//  * Get object with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
//  */
// function getBotReport({ bots : {repairBots, defenceBots}, companyName}) {
//     console.log('companyName', companyName);
//     // console.log('bots',bots);
//     console.log('repairBots',repairBots);
//     console.log('defenceBots',defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50,
//     }
// }));

// ПЕРЕРВА ДО 20.55

// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

/**
 * Get object with value and return info about stock
 * @param {Object} object
 * @returns {String} Info about stock in company
 */
// function getStockReport({companyName, stock}) {
//     const values = Object.values(stock)
//     let total = 0;
//     for(const value of values){
//         total +=value
//     }
//     return `${companyName} has ${total} items in stock`;
//   }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.

// function createContact(partialContact) {
//     return {
//         id : generateId(),
//         list: 'default',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({firstName,lastName, ...info}) {

//     return {
//         fullName: `${firstName} ${lastName}`, //firstName + ' ' + lastName
//         ...info,
//     }
// }
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

// const arr = [1,2,3,4];
// // const min = Math.min(...arr)

// // const arr2 = [...arr]

// const [firstValue, secondValue, ...args] = arr;
// console.log('firstValue',firstValue);
// console.log("secondValue", secondValue);
// console.log('args',args);

// /**
//  * Find stone with current name and return total price quantity * price
//  * @param {Array} stones
//  * @param {String} stoneName
//  * @returns {Number} Sum
//  */
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
//     return null
// }

// function createContact(arr) {
// for (let i = 0; i < arr.length; i += 1){
//     arr[i] = {
//         id: generateId(),
//         list: 'default',
//         ...arr[i]
//     }
// }
//     for (let obj of arr) {
//         obj.id = generateId();
//         if('list' in obj ){

//         }
//         if (!obj.hasOwnProperty('list')) {
//             obj.list = 'default';
//         }
//         // obj = {
//         //     id: generateId(),
//         //     list: 'default',
//         //     ...obj
//         // }
//     }
//     console.log(arr);
// }

// console.log(
//     createContact([{
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }, {
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }]),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr, ...arr2]
// console.log(arr3);

// const user = {
//     name: 'Poly',
//     email: 'poly@hotmail.com',
// }
// delete user
// console.log(user);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };
//   // Change code above this line
// }
