// const calculator = {
// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},
// 	add() {
// 		return this.a + this.b;
// 	},
// 	mult() {
// 		return this.a * this.b;
// 	},
// };

// console.log(calculator);
// calculator.read(2, 4);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
// console.log(calculator);

//SECOND--------------------------------

// class User {
// 	constructor(val1, val2) {
// 		this.name = val1;
// 		this.email = val2;
// 	}

// 	get mail() {
// 		console.log(this.email);
// 	}

// 	set mail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// const objA = new User('User', 'usermail@mail.com');
// console.log(objA);

// objA.mail; // get
// objA.mail = 'new@mail.com'; // set

// class Blogger {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} topics ${this.topics}`;
//     }

//     updatePosts() {
//         return this.numberOfPosts += 1;
//     }
// }
