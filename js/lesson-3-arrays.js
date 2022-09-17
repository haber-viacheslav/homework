// https://www.codewars.com/join?language=javascript
// ---------------Kahoot---------//
// console.log([1, 2, 3] === [1, 2, 3]); // False

// const arr = [ 1,2,3]
// arr.push(4,5,6);
// // arr.push(5);
// // arr.push(6);
// console.log(arr);

// const arr = [7, 3, 8, 9, 2];

// console.log('новый массив: ', arr.slice(3));
// console.log('старый массив: ', arr);
// const arr = [7, 3, 8, 3, 9, 3, 2];
// const idx = arr.indexOf(3);
// // // indexOf повертає індекс елемента якщо він присутній в масиві, якщо елемент не присутній в масиві indexOf повертає  -1

// const nextIdx = arr.indexOf(3, idx + 1);
// console.log(nextIdx);

// Мутабельный или деструктивный метод splice
// const array = [1, 5, 4, 3, 6, 7, 11, 12, 15, 17, 63, 24, 17, 13, 24];
// let idx = array.indexOf(11);
// console.log('индекс элемента: ', idx);
// let array1 = array.splice(0, 3);
// console.table(array1);
// console.table(array);

// const array = [1, 5, 4, 3, 6, 7, 11, 12, 15, 17, 11, 63, 24, 17, 11, 13, 24];
// const indx = array.indexOf(11);
// const nextIndx = array.indexOf(11, indx + 1);
// const nextIndx2 = array.indexOf(11, nextIndx + 1);
// console.log(indx);
// console.log(nextIndx);
// console.log(nextIndx2);
// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ['Mango', 'Poly', 'Ajax'];
// const string = 'script';
// console.log(clients);
// // // Імутабельні
// // string[0] = 'q'
// // console.log(string);

// // // Мутабельні
// clients.splice(1, 1, 'Igor', 'Erica');

// console.log('splice(1, 1, Igor, Erica) - ', clients);

// clients.splice(-1, 0, 'Ira', 'Frank');

// console.log('splice(-1, 0, Ira, Frank) - ', clients);

// clients.splice(-1, 2, 'Timon', 'Pumba');

// console.log('splice(-1, 1, Timon, Pumba) - ', clients);
// По посиланю
// Складні (якщо говорити правильно то тільки Object)
//  Object
//  Array
// const arr = [1, 2, 3];
// const arr1 = arr;

// arr.splice(1,0,999)
// console.log('arr',arr);
// console.log("arr1",arr1);
// arr1.splice(-1,1)
// console.log('arr',arr);
// console.log("arr1",arr1);

// По значеню
// Примітивні
// String
// Number
// Boolean
// null
// undefined

// let a = 10;
// let b = a;
// a = 15;
// console.log('a', a);
// console.log('b', b);
// b = 999;
// console.log('a', a);
// console.log('b', b);

// ПЕРЕРВА ДО "20:30"

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами Jazz і Blues.
// Додайте "Rock'n'roll" в кінець.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// Методи push unshift shift splice
// [] літерал масиву
//індекс            0       1        2
const genres = ['Jazz', 'Blues'];
console.log('Массив начальное значение - ', genres);

const delLastElement = genres.pop();
console.log('Значение последнего удалённого элемента - ', delLastElement);
console.log('Массив после удаления последнего элемента - ', genres);

genres.push(delLastElement, "Rock'n'roll");
console.log('Массив после добавления последнего элемента - ', genres);

const firstElement = genres[0];
console.log('Значение первого элемента массива - ', firstElement);

const lastElement = genres[genres.length - 1];
console.log('Значение последнего элемента массива - ', lastElement);

const delFirstElement = genres.shift();
console.log('Значение первого удалённого элемента массива с методом shift - ', delFirstElement);
console.log('Значение массива после удаления первого элемента - ', genres);

// const addFirstElement = genres.unshift('Country', 'Reggae');
// console.log('Метод unshift возвращает длинну массива после добавления в него элементов - ', addFirstElement);
// console.log('Возвращает значение массива после добавления в него элементов через unshift - ', genres);

// SPLICE универсальный метод для работы с элементами массива. Вставляет значение перед индексом элемента

genres.splice(0, 0, 'Country', 'Reggae', delFirstElement);
console.log('Возвращает значение массива после добавления в него элементов через splice - ', genres);

// console.log(genres[genres.length]);
//порядковий номер  1       2
// genres.push("Rock'n'roll");
// const firstEl = genres[0]
// console.log(firstEl);
// const lastEl = genres[genres.length - 1]
// console.log(lastEl);
// const deleteFirstE = genres.shift();
// console.log(deleteFirstE);
// console.log(genres);
// genres.unshift('Country', 'Reggae');
// console.log(genres);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// genres.splice(-2 , 1, 'Country')

// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються в змінній величині у вигляді рядка. Значення гарантовано розділені пробілом.
// Метод split

// const values = '8 11';
// const arr = values.split(' ');
// const firstValue = Number(arr[0]);
// const lastValue = Number(arr[arr.length - 1]);
// const total = firstValue * lastValue;

// console.log(total);

// const values = 'asd 11';
// const arr = values.split(' ');
// const firstValue =arr[0];
// const lastValue = Number(arr[arr.length - 1]);
// console.log(isNaN(firstValue));
// // if(NumberisNaN(firstValue))
// console.log(firstValue);
// console.log(firstValue * lastValue);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// window.isNaN// примусово  приводить до типу даних Number

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Number.isNaN// НЕ ПРИВОДИТЬ до типу даних Number

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів має починатися з першого.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// // i += 1
// // i = i + 1

// for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
//     // console.log(`Порядковий номер ${i+1}`, fruits[i]);
//     console.log(`Порядковий номер ${num}`, fruits[i]);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
// Метод split
// const names = 'Jacob,William,Solomon,Kate';
// const phones = '38001234567,38001112233,380055566377,38099912233';
// const arrNames = names.split(',');
// const arrPhones = phones.split(',')
// console.log(arrPhones);
// for (let i = 0; i < arrNames.length, i< arrPhones.length; i += 1){
//     console.log(`ім'я: ${arrNames[i]} номер телефону: ${arrPhones[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.
// методи splice pop shift
// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// words.shift();
// console.log(words);
// words.pop();
// console.log(words);
// const str = words.join(' ');
// console.log(str);

// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// console.log(words.slice(1,3).join(' '));
// console.log(words);

// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// words.splice(0,1);
// words.splice(words.length -1,1); // console.log(words.splice(-1,1));
// console.log(words);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розвертає» рядок (зворотній порядок літер) і виводить його в консоль.
// Методи split reverse join

// const string = 'Welcome to the future';
// // const arr = string.split('');
// // const rev = arr.reverse();
// // const result = rev.join('');
// const result = string.split('').reverse().join('');
// console.log(result);

// Example 7 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код має працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [101, 78, 12, 76, 5, 11, 9];
// const min  = Math.min(...numbers)
// console.log(min);

// let min = numbers[0];
// let a;
// console.log(a);
// console.log(object);
// const prop = prompt();
// console.log(prop);
// if(true){
//     if(true){

//     }
// }
// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// const numbers = [101, 78, 12, 76, 5, 11, 9];

// function foo(arr) {
// arr.splice(0,3)

// }
// foo(numbers)
// console.log(numbers);
