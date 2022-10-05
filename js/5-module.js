// 10/20
// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}

// 	getItems() {
// 		return this.items;
// 	}

// 	addItem(goodName) {
// 		this.items.push(goodName);
// 		return this.items;
// 	}

// 	removeItem(goodName) {
// 		return this.items.splice(this.items.indexOf(goodName), 1);
// 	}
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//11/20
// class StringBuilder {
// 	constructor(initialValue) {
// 		this.value = initialValue;
// 	}

// 	getValue() {
// 		return this.value;
// 	}

// 	padEnd(str) {
// 		this.value += str;
// 		return this.value;
// 	}

// 	padStart(str) {
// 		this.value = str + this.value;
// 		return this.value;
// 	}

// 	padBoth(str) {
// 		this.value = str + this.value + str;
// 		return this.value;
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
