/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

var removeElement2 = function(nums, val) {
  return nums.filter(v => v !== val);
};

console.log(removeElement([3, 4, 3, 4, 32, 2], 3));
