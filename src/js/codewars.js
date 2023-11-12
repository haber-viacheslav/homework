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

// camelCase => camel Case
// function solution(string) {
// 	const charArray = string.split('');
// 	const indexes = [];
// 	let x = 0;
// 	for (let i = 0; i < charArray.length; i += 1) {
// 		if (charArray[i] === charArray[i].toUpperCase()) {
// 			indexes.push(i);
// 		}
// 	}
// 	if (indexes.length && string) {
// 		for (const index of indexes) {
// 			charArray.splice(index + x, 0, ' ');
// 			x += 1;
// 		}
// 		return charArray.join('');
// 	}
// 	return string;
// }
// function solution1(text) {
// 	return text.split(/(?=[A-Z])/).join(' ');
// }
// function solution2(string) {
// 	return string.replace(/([A-Z])/g, ' $1');
// }

// console.log(solution('djCabgTahGtt'));
// console.log(solution1('djCabgTahGtt'));
// console.log(solution2('djCabgTahGtt'));

// console.log(solution(''));
// console.log(solution1(''));
// console.log(solution2(''));

// console.log(solution('djahtt'));
// console.log(solution1('djahtt'));
// console.log(solution2('djahtt'));
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// function getCount(str) {
// 	let count = 0;
// 	const vowels = ['a', 'e', 'o', 'i', 'u'];
// 	const chars = str.split('');
// 	for (const char of chars) {
// 		if (vowels.includes(char)) {
// 			count += 1;
// 		}
// 	}
// 	return count;
// }

// function getCount(str) {
// 	return (str.match(/[aeiou]/gi) || []).length;
// }
// console.log(getCount('sot sar'));

// function getCount(str) {
// 	return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
// }

// function getCount(str) {
// 	return str.replace(/[^aeiou]/gi, '').length;
// }

// function bouncingBall(h, bounce, window) {
// 	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
// 		return -1;
// 	}
// 	let counter = 1;
// 	let currentHeight = h;
// 	while (currentHeight * bounce > window) {
// 		counter += 2;
// 		currentHeight *= bounce;
// 	}
// 	return counter;
// }

// console.log(bouncingBall(30, 0.66, 1.5));

// function towerBuilder(nFloors) {
// 	const resultArray = [];
// 	let resultString = '';
// 	for (let i = 0; i <= nFloors; i += 1) {
// 		for (let j = 0; j < nFloors - 1; j += 1) {
// 			resultString += ' ';
// 		}
// 		for (let k = 0; k < 2 * i + 1; k++) {
// 			resultString += '*';
// 		}

// 		resultArray.push(resultString);
// 		resultString = '';
// 	}
// 	return resultArray;
// }
// function towerBuilder(nFloors) {
// 	const tower = [];

// 	for (let floor = 1; floor <= nFloors; floor++) {
// 		const spaces = ' '.repeat(nFloors - floor);

// 		const asterisks = '*'.repeat(2 * floor - 1);

// 		tower.push(`${spaces}${asterisks}${spaces}`);
// 	}

// 	return tower;
// }
// console.log(towerBuilder(6));

// function towerBuilder(nFloors, nBlockSz) {
// 	const tower = [];

// 	for (let floor = 1; floor <= nFloors; floor++) {
// 		const spaces = ' '.repeat(nFloors - floor);

// 		const asterisks = '*'.repeat(2 * floor - 1).repeat(nBlockSz);

// 		tower.push(`${spaces}${asterisks}${spaces}`);
// 	}

// 	return tower;
// }
// console.log(towerBuilder(3, 1));
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }

// console.log(result);

// function towerBuilder(floors, blockSize) {
// 	const [width, height] = blockSize;
// 	const tower = [];

// 	for (let floor = 1; floor <= floors; floor++) {
// 		const spaces = ' '.repeat((floors - floor) * width);
// 		const blocks = '*'.repeat(2 * floor * width - width);

// 		for (let row = 0; row < height; row++) {
// 			const line = spaces + blocks + spaces;
// 			tower.push(line);
// 		}
// 	}

// 	return tower;
// }
// console.log(buildTowerAdvanced(3, [4, 2]));

function sortArray(array) {
	const indexes = [];
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
