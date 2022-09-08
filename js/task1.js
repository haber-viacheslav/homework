/*
 * Рубрика 'wtf!?' або "Що покаже консоль?"
 */

// function a(value) {
//   return true - value;
// }

// const b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);

// function findNeedle(haystack) {
// 	const toFindValue = 'needle';
// 	let message;
// 	for (let i = 0; i < haystack.length; i += 1) {
// 		if (toFindValue === haystack[i]) {
// 			message = `found the ${toFindValue} at position ${i}`;
// 		}
// 	}
// 	console.log(message);
// 	// your code here
// }

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);

function findAverage(array) {
	let average = 0;
	// your code here
	for (const arr of array) {
		average += arr;
	}
	if (array === undefined) {
		average = 0;
	} else {
		average /= array.length;
	}

	return average;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));
