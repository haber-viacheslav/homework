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

function descendingOrder(n) {}
