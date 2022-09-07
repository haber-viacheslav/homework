// For

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
// 	const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
// 	console.log(`ЗП работника номер ${i} - ${salary}`);

// 	totalSalary += salary;
// }

// console.log('totalSalary:', totalSalary);

// const min = 6;
// const max = 1000;
// let total = 0;

// Обычная логика

// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 === 0) {
// 		console.log('чётное: ', i);
// 		total += i;
// 	}
// }

// От обратного, с проверкой на худший кейс

// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 !== 0) {
// 		console.log('не чётное: ', i);
// 		continue;
// 	}

// 	// пишем в сумму
// 	console.log('чётное: ', i);
// 	total += i;
// }

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

// const max = 10;
// for (let i = 0; i <= 10; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }

// const stars = 5;
// let price;

//  Вариант IF - ELSE

//  if (stars === 1){
//     price = 20;
// } else if (stars === 2){
//     price = 30;
// } else if (stars === 3){
//     price = 50;
// } else if (stars === 4){
//     price = 70;
// } else if (stars === 5){
//     price = 120;
// } else {
//     console.log('Такого количества звёзд не существует!');
// }

// console.log(price);

// Вариант с использованием Switch

// switch (stars) {
//     case 1:
//     price = 20;
//     break;

//     case 2:
//     price = 30;
//     break;

//     case 3:
//     price = 50;
//     break;

//     case 4:
//     price = 70;
//     break;

//     case 5:
//     price = 120;
//     break;

//     default:
//     console.log('Такого количества звёзд не существует!');
// }
// console.log(price);

// if (stars === 1 || stars === 2) {
// 	price = 20;
// } else if (stars === 3 || stars === 4) {
// 	price = 30;
// } else if (stars === 5) {
// 	price = 120;
// } else {
// 	console.log('Такого количества звёзд не существует!');
// }

// console.log(price);

// Вариант с использованием Switch - 2

// switch (stars) {
// 	case 1:
// 	case 2:
// 		price = 20;
// 		break;

// 	case 3:
// 	case 4:
// 		price = 30;
// 		break;

// 	case 5:
// 		price = 120;
// 		break;

// 	default:
// 		console.log('Такого количества звёзд не существует!');
// }
// console.log(price);

// function isChoise(option) {
// 	let message;
// 	switch (option) {
// 		case 1:
// 			message = 'Можете забрать товар завтра с 12';
// 			break;
// 		case 2:
// 			message = 'Курьер доставит товар завтра с 9 - 18';
// 			break;
// 		case 3:
// 			message = 'Посылка будет отправлена сегодня';
// 			break;
// 		default:
// 			message = 'Вам перезвонит менеджер';
// 			break;
// 	}
// 	return console.log(message);
// }

// isChoise(1);
