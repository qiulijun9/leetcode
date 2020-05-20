// 1.参数总个数 >=3, 返回sum
// 2.如果总个数 < 3, 可以一直链式调用

// add(2,3,4)=9 add(2)(3,4)=9 add(2)(3)(4)=9 add(2,3)(4)=9

// function add(...args) {
// 	let sum = 0;
// 	let temp = 0;
// 	const addFun = (...args) => {
// 		for (let i = 0; i < args.length; i++) {
// 			sum += args[i];
// 		}
// 		temp += args.length;

// 		if (temp >= 3) {
// 			return sum;
// 		}
// 		return addFun;
// 	};
// 	return addFun(...args);
// }

function add(...args) {
	let sum = 0;
	let temp = 0;
	let addFun = function (...args) {
		for (let i = 0; i < args.length; i++) {
			sum += args[i];
		}
		temp += args.length;
		if (temp > 3) {
			return sum;
		}
		return addFun;
	};
	return addFun(...args);
}
console.log(add(2)(3)(4, 5, 6));

// add(2)(3)(4);

// let b = 3;
// let fn = {
// 	a: this.b,
// 	show: () => {
// 		console.log(this);
// 	},
// 	s: function () {
// 		console.log(this);
// 	},
// };
// fn.show();
