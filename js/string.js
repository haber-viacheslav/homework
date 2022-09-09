const string = 'JavaScriptisTheBest';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
	// console.log(letter);
	// if (letter === letter.toLowerCase()) {
	// 	console.log('Эта буква в нижнем регистре!!!! - ', letter);

	// 	invertedString += letter.toUpperCase();
	// } else {
	// 	console.log('Эта буква в верхнем регистре!!!! - ', letter);
	// 	invertedString += letter.toLocaleLowerCase();
	// }
	invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLocaleLowerCase();
}

console.log('Inverted string ' + invertedString);
