/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let resultMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (resultMap.get(nums[i])) {
      resultMap.set(nums[i], resultMap.get(nums[i]) + 1)
    } else {
      resultMap.set(nums[i], 1)
    }
    if (resultMap.get(nums[i]) > 1) {
      return nums[i]
    }
  }
}
