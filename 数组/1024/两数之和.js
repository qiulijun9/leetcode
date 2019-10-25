/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
};

var twoSum2 = function(nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const index = hashMap.get(target - nums[i]);
    if (index !== undefined) {
      return [index, i];
    }
    hashMap.set(nums[i], i);
  }
};
