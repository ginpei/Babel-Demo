// ES2015
class Foo {
	constructor({ name }) {
		console.log(`Hello ${name}!`);
	}
}

const foo = new Foo({ name: 'Ginpei' });

// ES2016
console.log('2 ^ 10 = ', 2 ** 10);  // => 1024

// ES2017
async function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(resolve, duration);
	});
}

async function doLater() {
	console.log('Let mee sleep for 3 sec...');
	for (var i = 3; i > 0; i--) {
		console.log(i);
		await sleep(1000);
	}
	console.log('Wow!');
}

doLater();
