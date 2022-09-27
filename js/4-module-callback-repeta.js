// CallBack functions

// /**
//  *
//  * @param {string} message
//  */
// const fnA = function (message, callback) {
// 	console.log(message);
// 	callback();
// };

// const fnB = function () {
// 	console.log('Этот лог при вызове fnB');
// };

// fnA('message a', fnB);

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);

// 	return result;
// };

// const add = function (x, y) {
// 	return x + y;
// };

// const sub = function (x, y) {
// 	return x * y;
// };

// const del = function (x, y) {
// 	return x / y;
// };

// console.log(doMath(12, 38, add));
// console.log(doMath(21, 35, sub));

// const result = doMath(250, 36, del);
// const shortResult = Number(result.toFixed(2));
// console.log(result);
// console.log(shortResult);

// console.log(doMath(12, 38, add)); // Обычная передача функции
// console.log(doMath(21, 35, sub)); // Обычная передача функции
// console.log(
// 	doMath(12, 38, function (x, y) {
// 		return x + y;
// 	})
// ); // Инлайн функцияё
// console.log(
// 	doMath(21, 35, function (x, y) {
// 		return x * y;
// 	})
// ); // Инлайн функция

// const buttonRef = document.querySelector('.main__btn');

// const handleClickBtn = function () {
// 	console.log('Клик по кнопке: ' + Date.now());
// };

// buttonRef.addEventListener('click', handleClickBtn);

// const callback = function () {
// 	console.log('Через 5 секунд внутри колбека в таймауте');
// };

// console.log('Код перед таймаутом');

// setTimeout(callback, 5000);

// console.log('Код после таймаута');

// Запрос на api --------------------------------------------

// const onRequestSuccess = function (response) {
// 	console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
// 	console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
// 	.then(res => res.json())
// 	.then(onRequestSuccess);

// const filter = function (array, test) {
// 	const filteredArray = [];
// 	for (const arr of array) {
// 		if (test(arr)) {
// 			filteredArray.push(arr);
// 		}
// 	}

// 	return filteredArray;
// };

// const callback1 = function (value) {
// 	return value >= 3;
// };

// const callback2 = function (value) {
// 	return value <= 5;
// };

// const result1 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback1);
// console.log(result1);

// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(result2);

// const result3 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
// 	return value > 5;
// });
// console.log(result3);

//  Замыкания!!!!!!!!!!!!!!!!!!!!!!!!!_________________________--------------------------------

// const fnA = function (parameter) {
// 	const innerVariable = 'Знaчение внутренней переменной fnA';

// 	const innerFunction = function () {
// 		console.log(parameter);
// 		console.log('Это вызов innerFunction');
// 		console.log(innerVariable);
// 	};

// 	return innerFunction;
// };

// const fnB = fnA(555);

// fnB();
// console.log(fnB());

// const makeSheff = function (name) {
// 	const makeDish = function (dish) {
// 		console.log(`${name} готовит ${dish}`);
// 	};
// 	return makeDish;
// };

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('суп');
// mango('котлетка');
// mango('салатик');

// const poly = makeSheff('Poly');

// poly('кофе');
// poly('чай');
// poly('печеньки');

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
// 	let salary = baseSalary;

// 	const changeBy = function (amount) {
// 		salary += amount; //Приватные переменные
// 	};

// 	return {
// 		raise(amount) {
// 			salary += amount;
// 		},
// 		lower(amount) {
// 			salary -= amount;
// 		},
// 		current() {
// 			return `Текущая зарплата ${employeeName} - ${salary}`;
// 		},
// 	};
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager);

// Стрелочные функции--------------------------------------------------------------

// В стрелках нет переменной arguments, можно с помощью REST собрать аргументы
// const add = function (a, b, c) {
// 	return a + b + c; // Явный возврат с телом функции;
// };

// const addArrow = (a, b, c) => a + b + c; //неявный возврат => без тела функции;

// console.log(add(1, 5, 7));
// console.log(addArrow(1, 5, 7));

const fnA = function () {
	return {
		a: 5,
	};
};

console.log(fnA());

const arrowFna = () => {
	return {
		a: 5,
	};
};

console.log(arrowFna);
