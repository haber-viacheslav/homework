// var number = 5;
// alert(number);
// let userInput = null;
// userInput = prompt('Введите число');

// console.log(Number(userInput));

// let num = 10;
// num = 7;

// const pi = 3.14;

// console.log(pi);

// let balance = 10000;
// const payment = 20000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`);

// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталос ${balance} кредитов`);
//     console.log('Всё хорошо, снимаем деньги ... Спасибо за покупку!');
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');


// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c} `);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


//  Task 24/36
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if (totalSpent >= 50000) {
//       discount = GOLD_DISCOUNT;
//     }
//     else if (totalSpent >= 20000 && totalSpent < 50000) {
//       discount = SILVER_DISCOUNT;
//     }
//     else if (totalSpent >= 5000 && totalSpent < 20000) {
//       discount = BRONZE_DISCOUNT;
//     }
//     else {
//       discount = BASE_DISCOUNT;
//     }
//     // Change code above this line
//     return discount;
//   }
  
//   console.log(`Your discount ${getDiscount(3800)}`);
//   console.log(`Your discount ${getDiscount(38000)}`);
//   console.log(`Your discount ${getDiscount(6800)}`);
//   console.log(`Your discount ${getDiscount(15300)}`);
//   console.log(`Your discount ${getDiscount(18700)}`);
//   console.log(`Your discount ${getDiscount(35000)}`);
//   console.log(`Your discount ${getDiscount(33000)}`);
//   console.log(`Your discount ${getDiscount(27698)}`);
//   console.log(`Your discount ${getDiscount(50001)}`);
//   console.log(`Your discount ${getDiscount(150000)}`);

    // Task 27/36
    // function getSubscriptionPrice(type) {
    //     let price;
    //     // Change code below this line
      
    //    switch (type) { // Change this line
    //       case "starter": // Change this line
    //         price = 0; // Change this line
    //         break;
      
    //       case "professional": // Change this line
    //         price = 20; // Change this line
    //         break;
      
    //       case "organization":// Change this line
    //         price = 50; // Change this line
    //         break;
    //     }
      
    //     // Change code above this line
    //     return price;
    //   }

    //   console.log(getSubscriptionPrice("professional"));
    //   console.log(getSubscriptionPrice("starter"));
    //   console.log(getSubscriptionPrice("organization"));


// Task 29/36

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     const China = 100;
//     const Chile = 250;
//     const Australia = 170;
//     const Jamaica = 120;
  
//     switch (country) {
//         case "China":
//       message = `Shipping to ${country} will cost ${China} credits`;
//         break;
//         case "Chile":
//       message = `Shipping to ${country} will cost ${Chile} credits`;
//         break;
//         case "Australia":
//       message = `Shipping to ${country} will cost ${Australia} credits`;
//         break;
//         case "Jamaica":
//       message = `Shipping to ${country} will cost ${Jamaica} credits`;
//         break;
//         default: 
//         message = "Sorry, there is no delivery to your country";
//     }
  
//     // Change code above this line
//     return message;
//   }

//   console.log(getShippingCost("Chile"));
//   console.log(getShippingCost("Australia"));
//   console.log(getShippingCost("Africa"));
//   console.log(getShippingCost("Jamaica"));

//  While

// let counter = 1;

// while (counter < 5) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//  Do While

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

//  For

// const target = 50;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

const max = 10;
for (let i = 0; i <= 10; i += 1) {
    console.log(`${max} % ${i} = `, max % i);
}

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


// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'black', 'pink',];

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

// const brand = "Samsung";
// const normalizedBrand = brand.toLowerCase();

// console.log(normalizedBrand);