// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Ajax";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// for (let i=0; i <= 10; i ++) {
//   console.log(`${message} ${i}`)
// }
  

// Переменные и типы данных

// const age = 10;
// const totalPrice = 150.61;
// const userName = 'Peter';
// const message = 'Welcome!';
// const isOpen = true;
// const shouldConfirm = false;

// // Получение данных от пользователя

// console.log('Имя пользователя:', userName);
// console.log( typeof message);
// console.log( typeof shouldConfirm);


// console.log('Before');
// alert('HHHHH!!!'); // Алерт стопорит выполнение скрипта, пока не нажмут ОК
// console.log('After');

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// Числа

// let elementWidth = '50px'; 
// elementWidth = Number.parseInt(elementWidth); //Запинается на символе, парсит только целые числа.
// console.log(elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight); //Запинается на символе, парсит числа с плавающей точкой.
// console.log(elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2)); // toFixed возвращает строку, преобразовали в число с помощью Number.
// console.log(salary);

// let quantity = '45';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); // true => 1, false => 0.
// console.log(Number(value))

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power) // = (base ** power)

// console.log(result);

//Task
//  let base = prompt('Введите число!');
//  base = Number(base);

// // console.log(base);

//  let power = prompt('Введите степень');
//  power = Number(power);

// // console.log(power);

// // const result = base ** power;

// // console.log('Результат:', result);

// console.log(Math.round(Math.random() * (power - base) + base)) //Math.random() * (max - min) + min;


// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'black', 'pink', 'blue', 'red', 'darkgrey', 'green', 'yellow', 'pirple'];

// const max = colors.length - 1;
// const min = 0;

// // Псевдослучайное число 
// const index = Math.round(Math.random() * (max - min) + min);

// // console.log(index);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// Строки


// const message = 'В этой строке 26 символов.';

// // console.log(message.length);


// const i = 'Slavik';
// const plus = ' + ';
// const wife = 'Antonina';

// const family = i + plus + wife;

// console.log(family);

// const room = 716;
// const type = "VIP";

// const welcomeMsg1 = 'Гости ' + i + ' и ' + wife + ' поселяется в ' + type + ' номер ' + room + '.';
// const welcomeMsg = `Гости ${i} и ${wife} поселяется в ${type} номер ${room}.`

// console.log(welcomeMsg1);
// console.log(welcomeMsg);

const brand = "Samsung";
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);