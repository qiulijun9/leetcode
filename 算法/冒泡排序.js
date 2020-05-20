function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let flag = true;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				flag = false;
			}
		}
		if (flag) {
			break;
		}
	}
	return arr;
}

let arr = [43, 655, 3, 2, 3, 4, 9, 4, 5, 6, 7, 2, 1];
console.log(bubbleSort(arr));
