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
