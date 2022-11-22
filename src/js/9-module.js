// const isSuccess = true;

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve('Success! Value passed to resolve function');
// 		} else {
// 			reject('Error! Error passed to reject function');
// 		}
// 	}, 2000);
// });

// promise1
// 	.then(value => {
// 		console.log(value);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

// const promise = new Promise((resolve, reject) => {
// 	let random = Math.random() > 0.4;
// 	setTimeout(() => {
// 		if (random) {
// 			resolve(5);
// 		} else {
// 			reject('Error');
// 		}
// 	}, 500);
// });

// promise
// 	.then(value => {
// 		console.log(value); // 5
// 		return value * 2;
// 	})
// 	.then(value => {
// 		console.log(value); // 10
// 		return value * 3;
// 	})
// 	.then(value => {
// 		console.log(value); // 30
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log('Final task');
// 	});

const fetchUserFromServer = (username, onSuccess, onError) => {
	console.log(`Fetching data for ${username}`);

	setTimeout(() => {
		// Change value of isSuccess variable to simulate request status
		const isSuccess = true;

		if (isSuccess) {
			onSuccess('success value');
		} else {
			onError('error');
		}
	}, 2000);
};

const onFetchSuccess = user => {
	console.log(user);
};

const onFetchError = error => {
	console.error(error);
};

fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

const makePromise = (text, delay) => {
	return new Promise(resolve => {
		setTimeout(() => resolve(text), delay);
	});
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
	.then(value => console.log(value)) //["promiseA value", "promiseB value"]
	.catch(error => console.log(error));
