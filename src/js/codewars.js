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
