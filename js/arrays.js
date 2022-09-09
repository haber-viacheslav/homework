// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let cost = 0;
//     const words = message.split(" ");
//     console.log(words);
//     return cost = words.length * pricePerWord;

//     // Change code above this line
//  }

//    console.log(calculateEngravingPrice("Доброго вечора ми з України", 10));
//    console.log(calculateEngravingPrice("Web-development is creative work", 20));
//    console.log(calculateEngravingPrice("Web-development is creative work", 40));
//    console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) ;
//    console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function makeArray(firstArray, secondArray, maxLength) {
//     let newArr = firstArray.concat(secondArray);
//     if (newArr.length > maxLength) {
//       newArr = newArr.slice(0, (maxLength));
//     }
//     return newArr;
// }
//     console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//     console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// function calculateTotal(number) {
//     // Change code below this line
//     let sum = 0;
//      for (let i = 1; i <= number; i+=1) {
//        sum = sum + i;

//      }
//      console.log(sum);
//      return sum;
//     }

//     calculateTotal(1);
//     calculateTotal(5);
//      calculateTotal(3);
//      calculateTotal(7);
//     calculateTotal(20);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);

//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 10);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i of order) {
//     // Change this line
//     total += i;
//     console.log(total);
//   }
//   // Change code above this line
//   return total;

// }

// calculateTotalPrice([412, 371, 94, 63, 176])

// const friends = ["Mongo", "Kivi", "Poly", "Ajax"];

// friends.push("Antony", "Ebony", "Sarah");

// console.log(friends);
// console.log(friends.length);

// friends.pop();

// console.table(friends);

// Цикл проверки на вхождение имя пользователя в массив\
// Обычный способ!

// const logins = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];
// const loginToFind = prompt('Введите логин:');
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
// 	const login = logins[i];
// 	if (login === loginToFind) {
// 		message = `Пользователь ${loginToFind} найден`;
// 	} else {
// 		message = `Пользователь ${loginToFind} не найден`;
// 	}
// }
// console.log(message);

// Второй способ с использованием break вместо else!

// const logins = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];
// const loginToFind = prompt('Введите логин:');
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
// 	const login = logins[i];
// 	if (login === loginToFind) {
// 		message = `Пользователь ${loginToFind} найден`;
// 		break;
// 	}
// 	message = `Пользователь ${loginToFind} не найден`;
// }
// console.log(message);

// Третий способ от обратного!

// const logins = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];
// const loginToFind = prompt('Введите логин:');
// let message = `Пользователь ${loginToFind} не найден`;

// for (let login of logins) {
// 	if (login === loginToFind) {
// 		message = `Пользователь ${loginToFind} найден`;
// 	}
// }
// console.log(message);

// Четвёртый способ includes!

// const logins = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];
// const loginToFind = prompt('Введите логин:');
// let message = '';

// // for (const login of logins) {
// // 	console.log(login);
// message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;
// // }
// console.log(message);

// console.log(logins.includes(loginToFind));

// Скрипт дял поиска наименшего числа в масиве

// const numbers = [33, 55, 74, 10, 11, 16, 18, 19, 21, 80];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number);
// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// }

// console.log('smallestNumber: ', smallestNumber);

// Собрать значения массива в одну строку с методом JOIN

// const friends = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];

// const listFriends = friends.join(', ') + '.';

// console.log('Our friends are: ' + listFriends);

const friends = ['Alex', 'Kirillo', 'Sam', 'Erica', 'Denis', 'Kate'];
let list = '';

for (const friend of friends) {
	list += friend + ', ';
	// list += ',';
}

list = list.slice(0, list.length - 2);

console.log('Our friends are: ' + list + '.');
