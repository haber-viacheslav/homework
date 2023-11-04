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

/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

// function isIsogram(str) {
// 	str = str.toLowerCase();
// 	let freq = {};
// 	for (var i = 0; i < str.length; i++) {
// 		let char = str[i]; //?
// 		if (freq[char]) {
// 			return false; //?
// 		}
// 		freq[char] = 1; //?
// 	}

// 	return true;
// }

// isIsogram('gfjdl');
// isIsogram('abbaaababa');
// isIsogram('Dermatoglyphics');

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x) {
// 	return x.reduce((acc, element) => acc + +element, 0);
// }
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); //?

// function findFirstNonConsecutive(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] !== arr[i - 1] + 1) {
// 			return arr[i];
// 		}
// 	}

// 	return null; // If the array is consecutive
// }

// firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]); //?
// firstNonConsecutive([1, 2, 3, 4]); //?

// function greet(language = 'english') {
// 	const languageDB = {
// 		english: 'Welcome',
// 		czech: 'Vitejte',
// 		danish: 'Velkomst',
// 		dutch: 'Welkom',
// 		estonian: 'Tere tulemast',
// 		finnish: 'Tervetuloa',
// 		flemish: 'Welgekomen',
// 		french: 'Bienvenue',
// 		german: 'Willkommen',
// 		irish: 'Failte',
// 		italian: 'Benvenuto',
// 		latvian: 'Gaidits',
// 		lithuanian: 'Laukiamas',
// 		polish: 'Witamy',
// 		spanish: 'Bienvenido',
// 		swedish: 'Valkommen',
// 		welsh: 'Croeso',
// 	};
// 	if (languageDB[language]) {
// 		return `${languageDB[language]}. Try again.`;
// 	}
// }

// greet('chech'); //?
// greet('czech'); //?
// greet('IP_ADDRESS_INVALID'); //?

// const quarterOf = month => {
// 	const db = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
// 	if (month >= 1 && month <= 12) {
// 		return db[month];
// 	}
// };

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

// function SeriesSum(n) {
// 	const arr = [];
// 	let diff = 4;
// 	for (let i = 0; i < n - 1; i += 1) {
// 		if (n === 0) {
// 			arr.push(1);
// 			break;
// 		} else if (n > 0) {
// 			arr.push(1 / diff);
// 			diff += 3;
// 		}
// 	}
// 	console.log(arr);

// 	result = arr.reduce((acc, value) => {
// 		return acc + value;
// 	}, 0);
// 	return result.toFixed(2);
// }

// console.log(SeriesSum(10));
