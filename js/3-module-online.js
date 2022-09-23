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
const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

salaries.Alona = 300;
// console.log(salaries);
// const salaryArr = Object.values(salaries);
// let total = 0;
// for (const salary of salaryArr) {
// 	total += salary;
// }
// console.log(total);

const testObg = Object.create(salaries);

testObg.David = 500;
testObg.Lenny = 220;
testObg.Mark = 120;

function getResult(object) {
	console.log(object);

	// const salaryArr = Object.values(object);
	let total = 0;
	// for (const salary of salaryArr) {
	// 	total += salary;
	// }
	// console.log(total);

	for (const key in object) {
		// console.log('Все свойста', test);

		if (testObg.hasOwnProperty(key)) {
			total += object[key];

			// console.log('Собственные свойста', key);
		}

		// if (!testObg.hasOwnProperty(test)) {
		// 	console.log('Не собственные свойста', test);
		// }
	}
	return console.log(total);
}

getResult(testObg);

// console.log(testObg);
// console.log(salaries);
