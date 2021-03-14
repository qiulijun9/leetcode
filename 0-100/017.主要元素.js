/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let resultMap = new Map()
  let temp = -Infinity

  for (let i = 0; i < nums.length; i++) {
    let count = resultMap.get(nums[i])
    if (count) {
      resultMap.set(nums[i], (count += 1))
    } else {
      resultMap.set(nums[i], 1)
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (resultMap.get(nums[i]) > nums.length / 2) {
      temp = nums[i]
    }
  }

  return temp !== -Infinity ? temp : -1
  console.log(resultMap)
}
