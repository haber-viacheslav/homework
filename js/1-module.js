// Math
// const value = 25.5;

// console.log(`Round form ${value} =`, Math.round(value)); // округление алгебраическое
// console.log(`Floor form ${value} =`, Math.floor(value)); // округление в низ
// console.log(`Ceil form ${value} =`, Math.ceil(value)); // округление в верх

// const user1 = 100;
// const user2 = 123;
// const user3 = 50;
// const user4 = 230;
// const user5 = 115;
// const user6 = 85;

// console.log(Math.max(user1, user2, user3, user4, user5, user6));
// console.log(Math.min(user1, user2, user3, user4, user5, user6));

// console.log('d'.charCodeAt()); // проверка символа на его значение unicode!!!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // // и управление передаётся на следующую итерацию.
// for (const number of numbers) {
// 	if (number < threshold) {
// 		continue;
// 	}

// 	console.log(`Число больше чем ${threshold}: ${number}`); // 18, 29, 34
// }

// let site = 'http://www.google.com';
// console.log(site.endsWith('/'));

// // console.log(site[site.length - 1] !== '/');

// // if (site[site.length - 1] !== '/') {
// // 	site += '/';
// // }

// if (!site.endsWith('/')) {
// 	site = `${site}/`;
// }

// console.log(site);

// const min = Number(prompt('Enter min value'));
// const max = Number(prompt('Enter max value'));

// if (!isNaN(min) && !isNaN(max)) {
// 	console.log('это число');
// 	for (let i = min; i <= max; i += 1) {
// 		if (i % 5 === 0) {
// 			console.log(i);
// 			// continue;
// 		}
// 	}
// } else {
// 	console.log('это не число, введите число');
// }

const color = prompt('Enter a color: ').toLowerCase();
// let normalizeColor = color.toLowerCase();
// console.log(normalizeColor);

console.log(color);

switch (color) {
	case 'green':
		console.log('Go!!');
		break;
	case 'yellow':
		console.log('Attention');
		break;
	case 'red':
		console.log('Stop');
		break;
	default:
		console.log("Don't work");
}
