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
// let question = prompt('Введите логин');

// if (question === 'Админ') {
// 	let password;
// 	password = prompt('Введите пароль');

// 	if (password === userPassword) {
// 		alert('Здравствуйте!');
// 	} else if (password === null) {
// 		alert('Отменено');
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
// 	return total / numbers;
// }

// console.log(caclculateAverage('sdfs', 55, 66, 77, 8, 5, 9, 115));

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(styles.indexOf('Блюз'), 1, 'Классика');
// console.log(styles.shift());
// styles.splice(0, 0, 'Рэп', 'Регги');

// console.log(styles);

// Область видимости

// let b = 20;

// if (true) {
// 	let b = 50;

// 	b = 30;

// 	if (true) {
// 		b = 10;

// 		console.log(b);
// 	}
// 	console.log(b);
// }
// console.log(b);

// let b = 20;

// if (true) {
// 	let b = 50;

// 	b = 30;

// 	if (true) {
// 		let b = 5;

// 		b = 10;

// 		console.log(b);
// 	}
// 	console.log(b);
// }
// console.log(b);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let total = 0;
// let average = 0;

// for (const value of arr) {
// 	console.log('значение элемента массива', value);
// 	total += value;
// }
// console.log(total);

// average = total / arr.length;

// console.log(average);

// function expression
// fooExpression(1555); // не сработает....

// const fooExpression = function (value) {
// 	console.log(value);
// };

// fooExpression(1555);

// // function declaration

// fooDeclaration(444); // сработает....)))

// function fooDeclaration(value) {
// 	console.log(value);
// }

// fooDeclaration(1555);

// Array.from and for of ..

// function getSum() {
// 	let result = 0;
// 	console.log(arguments);
// 	let newArray = Array.from(arguments);
// 	console.log(newArray);
// 	for (const arr of newArray) {
// 		result += arr;
// 	}

// 	return result;
// }

// console.log(getSum(1, 5, 7, 9, 77, 4, 22, 55, 78));
// console.log(getSum(1, 5, 7, 9, 27, 4, 31, 15, 18));

// REST and for of ..

// function getSum(...arguments) {
// 	let result = 0;
// 	for (const arg of arguments) {
// 		result += arg;
// 	}

// 	return result;
// }

// console.log(getSum(1, 5, 7, 9, 77, 4, 22, 55, 78));
// console.log(getSum(1, 5, 7, 9, 27, 4, 31, 15, 18));

// FOR OF .. rest, Array.from

// function getSum() {
// 	const arr = Array.from(arguments);
// 	const arr2 = [...arguments];
// 	console.log(arr2);

// 	let result = 0;
// 	for (let i = 0; i < arr.length; i += 1) {
// 		result += arr[i];
// 	}

// 	return result;
// }

// console.log(getSum(1, 5, 7, 9, 77, 4, 22, 55, 78));
// console.log(getSum(1, 5, 7, 9, 27, 4, 31, 15, 18));

// const string = 'Enjoy Your Favorite ';
// function getStringlength() {
// 	let strLength = 0;
// 	let arrFromString = [];
// 	arrFromString = string.split('');
// 	for (const arg of arrFromString) {
// 		if (arg !== ' ') {
// 			strLength += 1;
// 			continue;
// 		}
// 	}
// 	return strLength;
// }

// console.log(getStringlength(string));

// Стэк вызова функций

// function foo() {
// 	console.log('start foo');
// }

// function boo() {
// 	console.log('start boo');
// 	foo();
// 	console.log('end boo');
// }

// function moo() {
// 	console.log('start moo');
// 	boo();
// 	console.log('end moo');
// }

// foo();
// boo();
// moo();

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourse(name) {
// 	if (courses.indexOf(name) === -1) {
// 		courses.push(name);
// 		return courses;
// 	}
// 	return console.log('У Вас уже есть этот курс');
// }

// addCourse('Express');
// console.log(courses);
// addCourse('CSS');
// console.log(courses);

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// console.log(courses);

// function addCourse(name) {
// 	if (!courses.includes(name)) {
// 		courses.push(name);
// 		return;
// 	}
// 	return 'У Вас уже есть этот курс';
// }

// function removeCourse(name) {
// 	if (courses.includes(name)) {
// 		let index = courses.indexOf(name);
// 		courses.splice(index, 1);
// 		return `Курс ${name} успешно удалён`;
// 	}

// 	return 'Курса с таким названием не найдено';
// }

// function updateCourse(oldName, newName) {
// 	// console.time('foo');
// 	if (courses.includes(oldName)) {
// 		let idx = courses.indexOf(oldName);
// 		courses.splice(idx, 1, newName);
// 		// OR
// 		// courses[idx] = newName;

// 		return;
// 	}
// 	// console.timeEnd('foo');
// 	return `Курс с названием ${oldName} не найден`;
// }
// let result = addCourse('CSS');
// addCourse('Express');
// console.log(courses);
// console.log('result of add: ', result);

// result = removeCourse('React');
// console.log(result);
// console.log(courses);
// result = removeCourse('Vue');
// console.log('result of delete: ', result);
// console.log(courses);
// updateCourse('Express', 'NextJS');

// result = updateCourse('Angular', 'NestJS');
// console.log(result);
// console.log(courses);

//  ТОП Задачка))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

//
// Вам потрібно розрахувати суму чайових, яку потрібно дати в кафе
// Робочий процес:

//1. Контрольна сума введених користувачем даних.  (Use "prompt" function).
//2. Відсоток чайових, введених користувачем.  (Use "prompt" function).
//3. Для скасованого введення показати «Скасовано».
//4. Вам потрібно перевірити вхідні дані: обидва значення мають бути числами,
//контрольна сума не може бути від'ємним числом, відсоток не може бути від'ємним і перевищувати 100.
//5. Якщо введені дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Use "alert" function).
//6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
//7. Показати повідомлення: (приклад). (Use "alert" function).
//
//Чекова сума: 200
//Порада: 15%
//Сума чайових: 30
//Загальна сума до оплати: 230 грн
//
//

// const summ = prompt('Input check summ !');
// const percentage = prompt('Input percentage !');
// if (summ === null || percentage === null) {
// 	alert('Canceled');
// } else {
// 	const parseSum = Number.parseFloat(summ);
// 	const parsePercentage = Number.parseFloat(percentage);

// 	console.log(parseSum);
// 	console.log(parsePercentage);

// 	if (
// 		Number.isNaN(parseSum) ||
// 		Number.isNaN(parsePercentage) ||
// 		parseSum <= 0 ||
// 		parsePercentage <= 0 ||
// 		parsePercentage > 100
// 	) {
// 		alert('Invalid input data');
// 	} else {
// 		const percentageSum = Number(((parseSum / 100) * parsePercentage).toFixed(2));
// 		const total = Number((parseSum + percentageSum).toFixed(2));
// 		alert(
// 			`Check summ: ${parseSum}
// 			Tip: ${parsePercentage}%
// 			Tip amount: ${percentageSum}
// 			Total sum to pay: ${total}`
// 		);
// 	}
// }
