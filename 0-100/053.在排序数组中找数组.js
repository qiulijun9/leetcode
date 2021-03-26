/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    console.log(obj)
    if (obj[nums[i]]) {
      obj[nums[i]] += 1
    } else {
      obj[nums[i]] = 1
    }
  }
  return obj[target] || 0
}
