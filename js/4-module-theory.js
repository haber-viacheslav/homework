// Колбэк - функции------------------------------------------------------------

//Функция обратного вызова (callback, колбэк) - это функция,
// которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция,
// принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Колбэк-функция
// function greet(name) {
// 	console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
// 	console.log(`Регистрируем гостя ${name}.`);
// 	callback(name);
// }

// registerGuest('Манго', greet);

// // Инлайн колбэки
// //----------------------------
// function registerGuest(name, callback) {
// 	console.log(`Регистрируем гостя ${name}.`);
// 	callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
// 	console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
// 	console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// Несколько колбэков ----------------------------------

// function processCall(recipient) {
// 	// Имитируем доступность абонента случайным числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
// 		// Логика активации автоответчика
// 	} else {
// 		console.log(`Соединяем с ${recipient}, ожидайте...`);
// 		// Логика принятия звонка
// 	}
// }

// processCall('Манго');

// После рефакторинга

// /**
//  *
//  * @param {string} recipient
//  * @param {callback} onAvailable
//  * @param {callback} onNotAvailable
//  * @returns
//  */

// function processCall(recipient, onAvailable, onNotAvailable) {
// 	// Имитируем доступность абонента случайным числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		onNotAvailable(recipient);
// 		return;
// 	}

// 	onAvailable(recipient);
// }

// function takeCall(name) {
// 	console.log(`Соединяем с ${name}, ожидайте...`);
// 	// Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
// 	console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// 	// Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
// 	console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// 	// Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// Абстрагирование повторения------------------------------------------------

// Абстракция - скрытие деталей реализации.
// Позволяет думать о задачах на более высоком(абстрактном) уровне.
// Функции это хороший способ построения абстракций.

// function printValue(value) {
// 	console.log(value);
// }

// function prettyPrint(value) {
// 	console.log('Logging value: ', value);
// }

// function repeat(n, action) {
// 	for (let i = 0; i < n; i += 1) {
// 		action(i);
// 	}
// }

// Передаем printValue как callback-функцию
// repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// function repeatLog(n) {
// 	let newArr = [];
// 	for (let i = 0; i <= n; i++) {
// 		newArr.push(i);
// 		console.log(i);
// 	}
// 	return newArr;
// }

// repeatLog(5);
// repeatLog(20);
// repeatLog(15);
// console.log(repeatLog(5));

// Метод forEach ---------------------------------------

// const numbersFirst = [5, 10, 15, 20, 25];

// numbersFirst.forEach(function callback(element, index) {
// 	// Тело коллбек-функции

// 	console.log(`element: ${element}, index: ${index}`);
// });

// - Поэлементно перебирает массив.
// - Вызызвает коллбек-функцию для каждого элемента массива.
// - Ничего не возвращает.
// Аргументы коллбек - функции это значение текущего элемента element, его индекс index и сам исходный массив array.
// Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

// const numbers = [5, 10, 15, 20, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// // 	console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // // Перебирающий forEach
// // numbers.forEach(function (number, index) {
// // 	console.log(`Индекс ${index}, значение ${number}`);
// // });

// // // Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива,
// // // это задачи с прерыванием выполнения цикла.
// // // Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// // const pureMultiply = (array, value) => {
// // 	const newArray = [];

// // 	array.forEach(element => {
// // 		newArray.push(element * value);
// // 	});

// // 	return newArray;
// // };
// const newArray = [];
// const pureMultiply = (array, value) => {
// 	array.forEach(element => newArray.push(element * value));
// 	return newArray;
// };
// console.log(pureMultiply(numbers, 5));

// Чистые функции
// const numbers = [1, 2, 3, 4, 5];
// const pureMultiply = (array, value) => {
// 	const newArray = [];
// 	array.forEach(element => {
// 		newArray.push(element * value);
// 	});

// 	return newArray;
// };

// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Метод MAP ---------------------------------------------------------------------------
// массив.map((element, index, array) => {
// Тело коллбек-функции
// });
// - Поэлементно перебирает оригинальный массив.
// - Не изменяет оригинальный массив.
// - Результат работа коллбек-функции записывается в новый массив.
// - Возвращает новый массив такой же длины.

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

//Массив объектов
// const students = [
// 	{ name: 'Манго', score: 83 },
// 	{ name: 'Поли', score: 59 },
// 	{ name: 'Аякс', score: 37 },
// 	{ name: 'Киви', score: 94 },
// 	{ name: 'Хьюстон', score: 64 },
// ];

// const names = students.map(student => student.name);
// const scores = students.map(student => (student.score / 100) * 15 + student.score);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
// console.log(scores); // [ 95.45, 67.85, 42.55, 108.1, 73.6 ]

// Метод flatMap() ----------------------------------------------------------------------
//            массив.flatMap((element, index, array) => {
//             Тело коллбек-функции
//            });

// Метод flatMap(callback) аналогичен методу map(),
// но применяется в случаях когда результат это многомерный массив который необходимо «разгладить», но только на глубину одной вложенности.

// const students = [
// 	{ name: 'Манго', courses: ['математика', 'физика'] },
// 	{ name: 'Поли', courses: ['информатика', 'математика'] },
// 	{ name: 'Киви', courses: ['физика', 'биология'] },
// ];

// students.map(student => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const map = students.map(student => student.courses);
// console.log(map);

// const flatMap = students.flatMap(student => student.courses);
// console.log(flatMap);

// Метод filter() --------------------------------------------------------------------------------------

//     Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

//              массив.filter((element, index, array) => {
//              // Тело коллбек-функции
//              });

//  - Не изменяет оригинальный массив. !!!!!!!!!!!!!!
//  - Поэлементно перебирает оригинальный массив.
//  - Возвращает новый массив.
//  - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
//  - Если коллбек вернул true элемент добавляется в возвращаемый массив.
//  - Если коллбек вернул false элемент не добавляется в возвращаемый массив.
//  - Если ни один элемент не удовлетворил условию, возвращает пустой массив.

// const values = [51, -3, 27, 21, -68, 42, -37, 1200, 1324, 5589];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // [1200, 1324, 5589]

// const largeValues = values.filter(value => value > 10000);
// console.log(largeValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37, 1200, 1324, 5589]

// const students = [
// 	{ name: 'Манго', courses: ['математика', 'физика'] },
// 	{ name: 'Поли', courses: ['информатика', 'математика'] },
// 	{ name: 'Киви', courses: ['физика', 'биология'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// console.log(allCourses);

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses);

// Массив объектов

//есть массив студентов с баллами за тест.
//Необходимо отфильтровать лучших(балл выше 80), худших(балл ниже 50) и средних студентов(балл от 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
// 	{ name: 'Манго', score: 83 },
// 	{ name: 'Поли', score: 59 },
// 	{ name: 'Аякс', score: 37 },
// 	{ name: 'Киви', score: 94 },
// 	{ name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score > HIGH_SCORE);
// console.log(best);

// const wrost = students.filter(student => student.score < LOW_SCORE);
// console.log(wrost);

// // const average = students.filter(student => student.score > LOW_SCORE && student.score < HIGH_SCORE);
// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average);

// Метод find()-------------------------------------------------------------------------------------------------------

//Если метод filter(callback) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback)
// позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается.То есть он ищет до первого совпадения.

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
// Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства.
//     Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т.п.

// const colorPickerOptions = [
// 	{ label: 'red', color: '#F44336' },
// 	{ label: 'green', color: '#4CAF50' },
// 	{ label: 'blue', color: '#2196F3' },
// 	{ label: 'pink', color: '#E91E63' },
// 	{ label: 'indigo', color: '#3F51B5' },
// ];

// let colorObjToFind = colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// console.log(colorObjToFind);

// colorObjToFind = colorPickerOptions.find(option => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// console.log(colorObjToFind);

// colorObjToFind = colorPickerOptions.find(option => option.label === 'white'); // undefined
// console.log(colorObjToFind);

// Метод findIndex()-----------------------------------------------------------------------
//   Метод findIndex(callback) это современная замена методу indexOf().
//   Позволяет выполнять поиск по более сложным условиям чем просто равенство.
//   Используется как для поиска в массиве примитивов, так и в массиве обьектов.
//   массив.findIndex((element, index, array) => {
// 		// Тело коллбек-функции
//   });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1

// Методы every() и some() ------------------------------------------------------

// Метод every() ----------------------------------------------------------------
// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// });
// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает true если все элементы массива удовлетворяют условию.
// - Возвращает false если хотябы один элемент массив не удовлетворяет условию.
// - Перебор массива прекращается если коллбек возвращает false.

// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// Метод some() --------------------------------------------------------------------
// Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// массив.some((element, index, array) => {
//   // Тело коллбек-функции
// });

// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// - Возвращает false если ни один элемент массив не удовлетворяет условию.
// - Перебор массива прекращается если коллбек возвращает true.

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// // Массив объектов every, some
// const fruits = [
// 	{ name: 'apples', amount: 100 },
// 	{ name: 'bananas', amount: 0 },
// 	{ name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// Метод reduce()---------------------------------------------------------------------
//Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива
//  с сохранением промежуточного результата, как аккумулятор.
//  Немного сложнее других в усвоении, но результат стоит того.
//          массив.reduce((previousValue, element, index, array) => {
// 	        // Тело коллбек-функции
//           }, initialValue);
// - Не изменяет оригинальный массив.
// - Поэлементно перебирает оригинальный массив.
// - Возвращает что угодно.
// - Делает что угодно.
// - Легче всего представить его работу на примере подсчёта суммы элементов массива.
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
// 	// console.log(previousValue);
// 	// console.log('number', number);

// 	return previousValue + number;
// }, 0);

// console.log(total); // 32

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => previousValue + number, 0);

// console.log(total); // 32

// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному».
// В повседневных задачах его применение сводится к работе с числами.

// Массив объектов

// const students = [
// 	{ name: 'Манго', score: 83 },
// 	{ name: 'Поли', score: 59 },
// 	{ name: 'Аякс', score: 37 },
// 	{ name: 'Киви', score: 94 },
// 	{ name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => total + student.score, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const averageScore = objArray => {
// 	let total = 0;
// 	let result = 0;
// 	for (const objArr of objArray) {
// 		total += objArr.score;
// 	}
// 	result = total / objArray.length;
// 	return result;
// };
// console.log(averageScore(students));

// Продвинутый reduce
// Из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков.

// const tweets = [
// 	{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
// 	{ id: '001', likes: 2, tags: ['html', 'css'] },
// 	{ id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
// 	{ id: '003', likes: 8, tags: ['css', 'react'] },
// 	{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets => {
// 	return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// const tweets = [
// 	{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
// 	{ id: '001', likes: 2, tags: ['html', 'css'] },
// 	{ id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
// 	{ id: '003', likes: 8, tags: ['css', 'react'] },
// 	{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// // const tags = tweets.reduce((allTags, tweet) => {
// // 	allTags.push(...tweet.tags);

// // 	return allTags;
// // }, []);

// // console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
// 	tweets.reduce((allTags, tweet) => {
// 		allTags.push(...tweet.tags);

// 		return allTags;
// 	}, []);

// // console.log(getTags(tweets));

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
// 	if (!acc.hasOwnProperty(tag)) {
// 		acc[tag] = 0;
// 	}

// 	acc[tag] += 1;

// 	return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// Метод sort() ----------------------------------------------
// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов,
// он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.

// При этом порядковый номер заглавных букв меньше чем у прописных.

// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// // Перед сортировкой делают полную копию исходного массива и сортируют уже её.
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Свой порядок сортировки чисел------------------------------------------------------------------------

// Для указания своего порядка сортировки методу sort(compareFunction)
// нужно передать коллбек - функцию с двумя параметрами.Это функция сравнения(compare function),
// порядок сортировки зависит от её результата.
// Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((a, b) => {
// 	// Тело коллбек-функции
// });

//- a - первый элемент для сравнения.
//- b - второй элемент для сравнения.
// Если вызов compareFunction(a, b) возвращает любое отрицательное значение,
//     то есть a меньше b, сортировка поставит a перед b.Это сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Если вызов compareFunction(a, b) возвращает любое положительное значение больше нуля,
//     то есть b больше a, сортировка поставит b перед a.Это сортировка по убыванию.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Свой порядок сортировки строк

// Для сортировки строк в алфавитном порядке,
// по возрастанию или убыванию, используется метод строк localeCompare().

// firstString.localeCompare(secondString)

// Он вызывается на строке которую нужно сравнить(firstString) с той,
//     что передана ему как аргумент(secondString).

// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0

// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.
// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']
// const alphabet = [...students].sort((a, b) => a.localeCompare(b));
// console.log(alphabet);

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

// Сортировка объектов

// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства.
// Например, есть группа студентов с баллами за тест.
// Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
// 	{ name: 'Манго', score: 83 },
// 	{ name: 'Поли', score: 59 },
// 	{ name: 'Аякс', score: 37 },
// 	{ name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);

// const inDescendingScoreOrder = students.sort((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
// 	firstStudent.name.localeCompare(secondStudent.name)
// );
