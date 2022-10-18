//Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

// function letMeSeeYourName(callback) {
// 	const userName = prompt('User name?');
// 	if (userName) {
// 		return callback(userName);
// 	}
// 	return alert('Enter name!');
// }

// const greet = name => console.log(`Hi ${name} `);

// letMeSeeYourName(greet);

//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
// 	console.log(`${shefName} is cooking ${dish}`);
// };

// Замыкания!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function makeShef(shefName) {
	return function makeDish(dish) {
		console.log(`${shefName} is cooking ${dish}`);
	};
}

const chef = makeShef('Carl');
const sam = makeShef('Sam');
console.dir(chef);
chef('Carbonara');
sam('Borsch');
// makeShef()
