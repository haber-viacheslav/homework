// function DNAtoRNA(dna) {
// 	// create a function which returns an RNA sequence from the given DNA sequence
// 	const stringArr = dna.split('');
// 	for (let i = 0; i < stringArr.length; i += 1) {
// 		if (stringArr[i] === 'T') {
// 			stringArr[i] = 'U';
// 		} else if (stringArr[i] === 'U') {
// 			stringArr[i] = 'T';
// 		}
// 	}
// 	return stringArr.join('');
// }
// function DNAtoRNA(dna) {
// 	return dna.replace(/T/g, 'U');
// }

// function DNAtoRNA(dna) {
// 	const newStr = dna.replaceAll('T', 'U');
// 	return newStr;
// }

// function DNAtoRNA(dna) {
// 	let strDNA = dna;
// 	const newStr = strDNA.replaceAll('T', 'U');
// 	return newStr;
// }
// console.log(DNAtoRNA('GTMPT'));
// console.log(DNAtoRNA('TTTTT'));
// console.log(DNAtoRNA('GACCGCCGCC'));

// Implement a function which convert the given boolean
//  value into its string representation.

// function booleanToString(b) {
// 	return b.toString();
// }

/**Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

// function solution(str, ending) {
// 	return str.endsWith(ending);
// }

// console.log(solution('abcde', 'e'));
// console.log(solution('abcde', 'abcde'));
// console.log(solution('abcde', 'f'));

// With validation

// function solution(str, ending) {
// 	if (typeof str != 'string' || typeof ending != 'string') throw 'wrong type';
// 	if (ending.length > str.length) return false;
// 	return str.substr(str.length - ending.length, ending.length) == ending;
// }

/**Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

// function reverseWords(str) {
// 	return str
// 		.split(' ')
// 		.map(word => word.split('').reverse().join(''))
// 		.join(' ');
// }

// console.log(reverseWords('This is an example!'));

/**
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

// function descendingOrder(n) {
// 	return parseInt(
// 		n
// 			.toString()
// 			.split('')
// 			.sort((a, b) => b - a)
// 			.join('')
// 	);
// }

// console.log(descendingOrder(1423242));

// function openOrSenior(data) {
// 	const output = [];
// 	data.map(sliceData => {
// 		if (sliceData[0] >= 55 && sliceData[1] > 7) {
// 			output.push('Senior');
// 		} else {
// 			output.push('Open');
// 		}
// 	});
// 	return output;
// }

// console.log(
// 	openOrSenior([
// 		[45, 12],
// 		[55, 21],
// 		[19, -2],
// 		[104, 20],
// 	])
// );

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
	const arr = [];
	let diff = 4;
	for (let i = 0; i < n - 1; i += 1) {
		if (n === 0) {
			arr.push(1);
			break;
		} else if (n > 0) {
			arr.push(1 / diff);
			diff += 3;
		}
	}
	console.log(arr);

	result = arr.reduce((acc, value) => {
		return acc + value;
	}, 0);
	return result.toFixed(2);
}

console.log(SeriesSum(10));
