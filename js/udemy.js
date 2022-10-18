// Числа - Number --------------------------------

// let numberInt = 4;
// const numberFloat = 5.3;
// console.log(4 / 0); // Infinity
// console.log(-4 / 0); // -Infinity
// console.log('string' * 9); //NaN

// // Строка - String -----------------------------

// const user = 'Alex';

// // Boolean -------------------------------------

// const bool = true;

// null -------------------------------------------

// console.log(something);// null

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

const arr = [1, 4, 5, 6, 7];
const arrObj = {};

for (let i = 0; i < arr.length; i += 1) {
	arrObj[i] = arr[i];
}

console.log(arrObj['0']);

// console.log(arr[3]);

const obj = {
	Anna: 300,
	Alice: 400,
	Sam: 800,
	Din: 700,
};

const keyValue = 'Dana';
const employeeSalary = 850;

obj[keyValue] = employeeSalary;
obj.Derek = 500;
obj['Mark'] = 650;

const keys = Object.keys(obj);
console.log(keys);

const value = Object.values(obj);
console.log(value);

console.log(obj);
console.log(obj.Alice);
