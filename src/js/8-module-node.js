// # Lesson 15

// - Терминал
//   - Открыть
//     - `control + ~`
//     - `view > teminal`
//     - через палитру `command + shift + p`
//   - Основные полезные команды
//     - путь (pwd)
//     - лист (ls)
//     - навигация (cd)
//     - очистка `clear` или `control + l`
//     - создание файлов (touch)
//     - создание папок (mkdir)
//     - переименование/перемещение (mv)
//     - удаление (rm)
// - Node.js и npm
//   - установка LTS версии
//   - инициализация и package.json
//   - [npmjs.com](https://www.npmjs.com/)
//   - работа с пакетами
//     - установка
//     - удаление
//   - CommonJS модули
//   - npm-скрипты
//     - pre и post
// - Транспиляция кода
//   - [Babel](https://babeljs.io/)
//   - CLI и npm-скрипты
//   - Пресеты
//   - [Browserslist](https://github.com/browserslist/browserslist)
// - [Сборщик Parcel](https://parceljs.org/)
// - [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
//   - Дефолтный (default) експорт и импорт
//   - Именованный (named) експорт и импорт
//   - Импорт пространства имён (namespace)
// - [Webpack](https://webpack.js.org/)
//   - точка входа
//   - точка вывода
//   - загрузчики
//   - плагины

// console.log('Hello Node');
// const Joi = require('joi');
// const shortid = require('shortid');

// const passwordSchema = Joi.string().min(8).max(16).alphanum();

// console.log(passwordSchema.validate('qswscsccfsc'));
// console.log(passwordSchema.validate('qcfsc!!2`~'));
// console.log(shortid.generate());

// const dog = {
// 	name: 'Mango',
// 	age: 3,
// 	IsHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON);

// const dogAfterParse = JSON.parse(dogJSON);
// console.log(dogAfterParse);

// try {
// 	const data = JSON.parse('Well, this is awkward');
// 	console.log(data);
// } catch (error) {
// 	console.log(error.name); // "SyntaxError"
// 	console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// const settings = {
// 	theme: 'dark',
// 	isAuthenticated: true,
// 	options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// Localstorage -----------------------------------------------
// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Alex', age: 25 }));

// const savedUserData = localStorage.getItem('my-data');
// const parsedUserData = JSON.parse(savedUserData);
// console.log('savedUserData:', savedUserData);

// console.log('parsedUserData:', parsedUserData);

// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

// Feedback --------------------------------------------------
import 'modern-normalize/modern-normalize.css';
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';
import { functions } from 'lodash';

const STORAGE_KEY = 'feedback-msg';

const refs = {
	form: document.querySelector('.js-feedback-form'),
	textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit() {}

// function onFormSubmit(evt) {
// 	evt.preventDefault();

// 	console.log('Отправляем форму');
// 	evt.currentTarget.reset();
// 	localStorage.removeItem(STORAGE_KEY);
// }

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onTextareaInput(e) {
	const value = e.currentTarget.value;

	console.log(value);
}
// function onTextareaInput(evt) {
// 	const message = evt.target.value;

// 	localStorage.setItem(STORAGE_KEY, message);
// }

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
// function populateTextarea() {
// 	const savedMessage = localStorage.getItem(STORAGE_KEY);

// 	if (savedMessage) {
// 		refs.textarea.value = savedMessage;
// 	}
// }

// // Sibebar------------------------------------------------
// import '../css/common.css';
// import '../css/sidebar.css';

// const DEFAULT_OPENED_CLASS = 'is-open';
// const DEFAULT_LOCALSTORAGE_KEY = 'sidebar-status';

// class SidebarWidget {
// 	constructor({
// 		selector,
// 		opednedClass = DEFAULT_OPENED_CLASS,
// 		localStoageKey = DEFAULT_LOCALSTORAGE_KEY,
// 	}) {
// 		this._sidebarRef = document.querySelector(selector);
// 		this._opednedClass = opednedClass;
// 		this._localStorageKey = localStoageKey;
// 		this._init();
// 	}

// 	_init() {
// 		const persistedSidebarState = localStorage.getItem(
// 			this._localStorageKey
// 		);
// 		if (persistedSidebarState !== null) {
// 			const shouldOpenSidebar = JSON.parse(persistedSidebarState);
// 			if (shouldOpenSidebar) {
// 				this.open();
// 			} else {
// 				this.close();
// 			}
// 		}
// 	}

// 	open() {
// 		this._sidebarRef.classList.add(this._opednedClass);
// 		this._saveOpenedStateToLS(true);
// 	}

// 	close() {
// 		this._sidebarRef.classList.remove(this._opednedClass);
// 		this._saveOpenedStateToLS(false);
// 	}

// 	toggle() {
// 		this._sidebarRef.classList.toggle(this._opednedClass);
// 	}

// 	_saveOpenedStateToLS(state) {
// 		localStorage.setItem(this._localStorageKey, state);
// 	}
// }

// // Правый
// const rightSidebar = new SidebarWidget({
// 	selector: '#my-sidebar',
// 	localStoageKey: 'right-sidebar-status',
// });

// document
// 	.querySelector('[data-open-right-sidebar]')
// 	.addEventListener('click', () => rightSidebar.open());

// document
// 	.querySelector('[data-close-right-sidebar]')
// 	.addEventListener('click', () => rightSidebar.close());

// // document
// //     .querySelector('[data-toggle-sidebar]')
// //     .addEventListener('click', () => rightSidebar.toggle());

// // Левый
// const leftSidebar = new SidebarWidget({
// 	selector: '#left-sidebar',
// 	localStoageKey: 'left-sidebar-status',
// });

// document
// 	.querySelector('[data-open-left-sidebar]')
// 	.addEventListener('click', () => leftSidebar.open());

// document
// 	.querySelector('[data-close-left-sidebar]')
// 	.addEventListener('click', () => leftSidebar.close());
