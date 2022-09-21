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

const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

const account = {
	balance: 0,

	transaction: [],

	createTransaction(amount, type) {
		const transaction = {
			amount,
			type,
			id: Date.now(),
		};
		return transaction;
	},

	deposit(amount) {
		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
		this.transaction.push(transaction);
		this.balance += amount;
	},

	withdraw(amount) {},
};
