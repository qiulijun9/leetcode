/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] == nums[i]) return true;
    }
  }
  return false;
};

var containsDuplicate2 = function(nums) {
  const hashMap = {};
  return nums.some(num => {
    if (hashMap[num]) {
      return true;
    } else {
      hashMap[num] = true;
      return false;
    }
  });
};

containsDuplicate2([2, 34, 54, 54, 3, 2, 3]);
