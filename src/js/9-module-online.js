function foo(a, b, c) {
	console.log('foo function');
	console.log('a', a);
	console.log('b', b);
	console.log(`${a}${b}${c}`);
}

const idInt = setInterval(foo, 800, 'arg', 'arg2', 3);

const idTim = setTimeout(foo, 500, 'Arr', 'object', true);

setTimeout(() => clearInterval(idInt), 8000);
