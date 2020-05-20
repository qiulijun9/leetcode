function getString(val) {
	let str = '';
	if (typeof val === 'string') {
		return `${val.length}:${val}`;
	}
	if (typeof val === 'number') {
		return `i${val}e`;
	}
	if (val instanceof Array) {
		let newStr;

		val.forEach(item => {
			str += getString(item);
		});
		newStr = `l${str}e`;
		return newStr;
	}
	if (val instanceof Object) {
		let oStr;
		for (let [key, value] of Object.entries(val)) {
			str += `1:${key}${getString(value)}`;
		}
		oStr = `d${str}e`;
		return oStr;
	}
}

console.log(getString('abc'));
console.log(getString('aaaa'));
console.log(getString(123));
console.log(getString([123, '123', [234, '123', [456]]]));
console.log(getString([[]]));
console.log(getString({}));
console.log(getString({ x: 123, y: 'ref' }));
console.log(getString({ x: 123, y: 'ref', obj: { a: 5, b: 'aa' } }));
