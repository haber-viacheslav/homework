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

console.log('Hello Node');
const Joi = require('joi');
const shortid = require('shortid');

const passwordSchema = Joi.string().min(8).max(16).alphanum();

console.log(passwordSchema.validate('qswscsccfsc'));
console.log(passwordSchema.validate('qcfsc!!2`~'));
console.log(shortid.generate());
