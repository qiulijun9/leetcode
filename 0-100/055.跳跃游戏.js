//https://leetcode-cn.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //贪心算法 求出每一个能跳到的最远距离
  let maxlength = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxlength = Math.max(maxlength, i + nums[i]);
    if (maxlength <= i) {
      //当为0 时,为跳不到最后
      return false;
    }
  }
  return maxlength >= nums.length - 1;
};

console.log(canJump([0]));
