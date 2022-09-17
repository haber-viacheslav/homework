// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let value = 15;

// let answer;

// answer = value === 10 ? console.log('True') : console.log('False');

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// значение '1', то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// function checkSeason(num) {
// 	let result;
// 	switch (num) {
// 		case 1:
// 			result = 'Winter';
// 			break;
// 		case 2:
// 			result = 'Spring';
// 			break;
// 		case 3:
// 			result = 'Summer';
// 			break;
// 		case 4:
// 			result = 'Autemn';
// 			break;
// 		default:
// 			result = 'Please enter number from 1 to 4';
// 			break;
// 	}
// 	return result;
// }

// console.log(checkSeason(3));
// console.log(checkSeason(1));
// console.log(checkSeason(2));
// console.log(checkSeason(4));
// console.log(checkSeason(10));

// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// let i = 0;

// while (i < 50) {

// 	console.log(i);
// 	i += 1;
// }
//Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt('Какое официальное название JavaScript?');

// if (question === 'ECMAScript') {
// 	alert('Верно!');
// } else {
// 	alert('Не знаете? ECMAScript!');
// }

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const userPassword = 'Я главный';
// const question = prompt('Введите логин');

// if (question === 'Админ') {
// 	let password;
// 	password = prompt('Введите пароль');
// 	if (password === userPassword) {
// 		alert('Здравствуйте!');
// 	} else {
// 		alert('Неверный пароль!');
// 	}
// } else if (question === null) {
// 	alert('Отменено');
// } else {
// 	alert('Я вас не знаю');
// }

//При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let total = 0;
// let check = false;
// let yourNumber = prompt('Введите число');

// do {
// 	if (yourNumber) {
// 		check = true;
// 		total += +yourNumber;
// 		yourNumber = prompt('Введите ещё число');
// 		console.log(yourNumber);
// 	} else {
// 		alert(`"Общая сумма введенных чисел равна ${total}."`);
// 		check = false;
// 	}
// } while (check);

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caclculateAverage(...args) {
// 	let total = 0;
// 	let numbers = 0;
// 	for (const arg of args) {
// 		if (typeof arg !== 'number') {
// 			continue;
// 		}
// 		total += arg;
// 		numbers += 1;
// 	}
// 	return total / args.length;
// }

// console.log(caclculateAverage(1, 4, 6, 7, 8, 5, 9, 115, 'sdfs'));

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(styles.indexOf('Блюз'), 1, 'Классика');
// console.log(styles.shift());
// styles.splice(0, 0, 'Рэп', 'Регги');

// console.log(styles);
