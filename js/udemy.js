// Числа - Number --------------------------------

// let numberInt = 4;
// const numberFloat = 5.3;
// console.log(4 / 0); // Infinity
// console.log(-4 / 0); // -Infinity
// console.log('string' * 9); //NaN
// console.log([] == ![]);

// // Строка - String -----------------------------

// const user = 'Alex';

// // Boolean -------------------------------------

// const bool = true;

// null -------------------------------------------

// console.log(something); // null

// undefined --------------------------------------

// let undef;
// console.log(undef);

// // Object --------------------------------------

// const obj = {
// 	name: 'Alex',
// 	surname: 'Jonson',
// 	age: 18,
// 	isMarried: true,
// };

// console.log(obj.name);

// const arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// console.dir([]);

// const arr = [1, 4, 5, 6, 7];
// const arrObj = {};

// for (let i = 0; i < arr.length; i += 1) {
// 	arrObj[i] = arr[i];
// }

// console.log(arrObj['0']);

// // console.log(arr[3]);

// const obj = {
// 	Anna: 300,
// 	Alice: 400,
// 	Sam: 800,
// 	Din: 700,
// };

// const keyValue = 'Dana';
// const employeeSalary = 850;

// obj[keyValue] = employeeSalary;
// obj.Derek = 500;
// obj['Mark'] = 650;

// const keys = Object.keys(obj);
// console.log(keys);

// const value = Object.values(obj);
// console.log(value);

// console.log(obj);
// console.log(obj.Alice);

// const arr = [1, 3, 4, 5];

// console.log(arr[2]);

// const obj = { a: 3, b: 4, c: 10 };

// console.log(obj.a);

// const arrNamesAndSalaries = ['Anna', 300, 'Alice', 400, 'Sam', 800, 'Din', 700];

// for (let i = 0, j = 1; i < arrNamesAndSalaries.length; i += 2, j += 2) {
// 	console.log(
// 		`Name ${arrNamesAndSalaries[i]} has salary: ${arrNamesAndSalaries[j]}`
// 	);
// }

// const objSalaries = {
// 	Anna: 300,
// 	Alice: 400,
// 	Sam: 800,
// 	Din: 700,
// };
// const keys = Object.keys(objSalaries);
// const userInput = prompt('Enter the employee name');
// if (userInput && keys.includes(userInput)) {
// 	console.log(objSalaries[userInput]);
// } else {
// 	console.log('Введите правильное имя сотрудника');
// }

// console.log(keys);
// for (const key of keys) {
// 	console.log(`Name ${key} has salary: ${objSalaries[key]}`);
// }

// Alert

// alert('hello');

// Confirm

// const result = confirm('Do you want working hard?');
// console.log(result); // OK -> true, Cancel -> false;

// Prompt

// const promptValue = +prompt('Введите число от 1 до 20', '10');
// console.log(promptValue);

const values = [];

// const userName = prompt('Enter your name: ');

// const userSurname = prompt('Enter your surname: ');

// const userAge = prompt('Enter your age: ');

// const userSex = prompt('Enter your sex ');

// values.push(userName);
// values.push(userSurname);
// values.push(userAge);
// values.push(userSex);

// Or different statement

// values[0] = prompt('Enter your name: ');
// values[1] = prompt('Enter your surname: ');
// values[2] = prompt('Enter your age: ');
// values[3] = prompt('Enter your sex ');
// console.log(values);

// console.log('arr' + ' - object'); // arr - object
// console.log(4 + ' - object'); // 4 - object
// console.log(4 + +' - object'); // NaN
// console.log(4 + +'5'); // 9

let incr = 10;
let decr = 10;

// ++incr; // перфиксный
// --decr; // перфиксный

// incr++; // постфиксный
// decr--; // постфиксный
// console.log(incr++); // 10
// console.log(decr--); // 10

// console.log(++incr); // 10
// console.log(--decr); // 10

// console.log(7 % 2); // Остаток от деления 1
// console.log(2 * 3 == '6');
// console.log(2 * 3 === '6');
// console.log(2 * 3 === 6);

// присваивание - =;
// равенство с приведение типа, не строгое - ==;
// равенство без приведения типов, строгое - ===;
// Инверсия - !

// const isCheked = true;
// const isClosed = true;

// console.log(isCheked && isClosed); // запинается на лжи

// const isCheked1 = true;
// const isClosed1 = false;

// console.log(isCheked1 || isClosed1); // запинается на правде, и возвращает значение
