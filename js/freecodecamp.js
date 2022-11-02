// function nextInLine(arr, item) {
// 	// Змініть код лише під цим рядком
// 	arr.push(item);
// 	return arr.shift();
// 	// Змініть код лише над цим рядком
// }

// // Налаштування
// let testArr = [1, 2, 3, 4, 5];

// // Відобразити код
// console.log('Before: ' + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));
// console.log(nextInLine([], 5));
// //має повернути до числа.
// console.log(nextInLine([], 1));
// //має повернути до 1
// console.log(nextInLine([2], 1));
// //має повернути до 2
// console.log(nextInLine([5, 6, 7, 8, 9], 1));

/*
Створіть оператора if всередині функції, щоб повернути 
Yes, that was true, якщо параметр wasThatTrue є true та повернути 
No, that was false у протилежному випадку.
 */

// function trueOrFalse(wasThatTrue) {
// 	// Змініть код лише під цим рядком
// 	if (wasThatTrue) {
// 		return 'Yes, that was true';
// 	}
// 	return 'No, that was false';
// 	// Змініть код лише над цим рядком
// }

// Налаштування
// function testStrict(val) {
// 	if (val === 7) {
// 		// Змініть цей рядок
// 		return 'Equal';
// 	}
// 	return 'Not Equal';
// }

// testStrict(10);

/*
Запишіть ланцюжок if/else if для того, щоб виконати наступні умови:

num < 5 дає Tiny
num < 10 дає Small
num < 15 дає Medium
num < 20 дає Large
num >= 20 дає Huge
*/

// function testSize(num) {
// 	// Змініть код лише під цим рядком
// 	if (num < 5) {
// 		return 'Tiny';
// 	} else if (num < 10) {
// 		return 'Small';
// 	} else if (num < 15) {
// 		return 'Medium';
// 	} else if (num < 20) {
// 		return 'Large';
// 	} else if (num >= 20) {
// 		return 'Huge';
// 	}
// 	return 'Change Me';
// 	// Змініть код лише над цим рядком
// }

// console.log(testSize(7));

// const names = [
// 	'Hole-in-one!',
// 	'Eagle',
// 	'Birdie',
// 	'Par',
// 	'Bogey',
// 	'Double Bogey',
// 	'Go Home!',
// ];

// function golfScore(par, strokes) {
// 	// Змініть код лише під цим рядком
// 	if (strokes === 1) {
// 		return names[0];
// 	} else if (strokes <= par - 2) {
// 		return names[1];
// 	} else if (strokes === par - 1) {
// 		return names[2];
// 	} else if (strokes === par) {
// 		return names[3];
// 	} else if (strokes === par + 1) {
// 		return names[4];
// 	} else if (strokes === par + 2) {
// 		return names[5];
// 	} else if (strokes >= par + 3) {
// 		return names[6];
// 	}
// 	return 'Change Me';
// 	// Змініть код лише над цим рядком
// }

// golfScore(5, 4);

// function caseInSwitch(val) {
// 	let answer = '';
// 	// Змініть код лише під цим рядком
// 	switch (val) {
// 		case 1:
// 			answer = 'alpha';
// 			break;
// 		case 2:
// 			answer = 'beta';
// 			break;
// 		case 3:
// 			answer = 'gamma';
// 			break;
// 		case 4:
// 			answer = 'delta';
// 			break;
// 	}
// 	// Змініть код лише над цим рядком
// 	return answer;
// }

// caseInSwitch(1);

// a - apple
// b - bird
// c - cat
// default - stuff

// function switchOfStuff(val) {
// 	let answer = '';
// 	// Змініть код лише під цим рядком
// 	switch (val) {
// 		case 'a':
// 			answer = 'apple';
// 			break;
// 		case 'b':
// 			answer = 'bird';
// 			break;
// 		case 'c':
// 			answer = 'cat';
// 			break;
// 		default:
// 			answer = 'stuff';
// 	}
// 	// Змініть код лише над цим рядком
// 	return answer;
// }

// switchOfStuff(1);

// function sequentialSizes(val) {
// 	let answer = '';
// 	// Змініть код лише під цим рядком
// 	switch (val) {
// 		case 1:
// 		case 2:
// 		case 3:
// 			answer = 'Low';
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			answer = 'Mid';
// 			break;
// 		case 7:
// 		case 8:
// 		case 9:
// 			answer = 'High';
// 	}
// 	// Змініть код лише над цим рядком
// 	return answer;
// }

// sequentialSizes(1);

// function chainToSwitch(val) {
// 	let answer = '';
// 	// Змініть код лише під цим рядком

// 	switch (val) {
// 		case 'bob':
// 			answer = 'Marley';
// 			break;
// 		case 42:
// 			answer = 'The Answer';
// 			break;
// 		case 1:
// 			answer = 'There is no #1';
// 			break;
// 		case 99:
// 			answer = 'Missed me by this much!';
// 			break;
// 		case 7:
// 			answer = 'Ate Nine';
// 	}

// 	// Змініть код лише над цим рядком
// 	return answer;
// }

// Налаштування
function abTest(a, b) {
	// Змініть код лише під цим рядком
	if (a < 0 || b < 0) {
		return;
	}
	// Змініть код лише над цим рядком

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
