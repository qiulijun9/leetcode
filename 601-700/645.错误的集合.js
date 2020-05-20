/**
 * @param {number[]} nums  1-n 的整数
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	//每次把数组的每一项置为负数,
	//如果再判断到该下标小于0,则证明这个数为重复的数
	//索引对应的数是正数,说明该数是缺失的数
	let repet = -1;
	let miss = -1;
	for (let i = 0; i < nums.length; i++) {
		let index = Math.abs(nums[i]) - 1; //从1-n
		if (nums[index] < 0) {
			repet = Math.abs(nums[i]);
		} else {
			nums[index] *= -1;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			miss = i + 1;
		}
	}
	return [repet, miss];
};

console.log(findErrorNums([2, 2]));
