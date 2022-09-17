// const userName = 'Igor';
// const userMail = 'igor-shokin@gmail.com';

// const objAppartment = {
// 	floor: 7,
// 	rooms: 2,
// 	street: 'Heroiv Kryt',
// 	userName,
// 	userMail,
// };

// console.log(objAppartment);

const products = [
	{ name: 'Radar', price: 1300, quantity: 4 },
	{ name: 'Scanner', price: 2700, quantity: 3 },
	{ name: 'Droid', price: 400, quantity: 7 },
	{ name: 'Grip', price: 1200, quantity: 9 },
];

console.table(products);

for (const product of products) {
	console.log(product);
}

function getAllPropValues(propName) {
	// Change code below this line
	// Change code above this line
}

// const apartment = {
// 	imgUrl: 'https://via.placeholder.com/640x480',
// 	descr: 'Spacious apartment in the city center',
// 	rating: 4.7,
// 	price: 5000,
// 	tags: ['premium', 'promoted', 'top', 'trusted'],
// 	owner: {
// 		name: 'Henry Sibola',
// 		phone: '982-126-1588',
// 		email: 'henry.carter@aptmail.com',
// 	},
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// // const location = {{country: "Jamaica", apartment: "Kingston"}}
// apartment.location = { country: 'Jamaica', city: 'Kingston' };
// console.log(apartment);

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	// Change code below this line
// 	const valueSalary = Object.values(salaries);

// 	for (const value of valueSalary) {
// 		totalSalary += 1;
// 	}
// 	// Change code above this line
// 	return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
// 	{ hex: '#f44336', rgb: '244,67,54' },
// 	{ hex: '#2196f3', rgb: '33,150,243' },
// 	{ hex: '#4caf50', rgb: '76,175,80' },
// 	{ hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
// 	hexColors.push(color.hex);
// 	rgbColors.push(color.rgb);
// }

// const products = [
// 	{ name: 'Radar', price: 1300, quantity: 4 },
// 	{ name: 'Scanner', price: 2700, quantity: 3 },
// 	{ name: 'Droid', price: 400, quantity: 7 },
// 	{ name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	// Change code below this line
// 	let arrValue = [];
// 	let arrKeys = [];

// 	for (const key of products) {
// 		arrKeys = Object.keys(key);

// 		console.log(arrKeys);
// 			if (propName === key) {
// 				arrValue.push(key.propName);
// 			}
// 		}
// 	}

// 	return arrValue;
// }

// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
