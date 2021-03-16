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

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  nums.sort()
  // 主要元素的个数超过一半，那排序之后主要元素就在数组的中间
  const center = nums[Math.floor(nums.length / 2)]
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    console.log(center)
    if (nums[i] === center) {
      count++
    }
    if (count > nums.length / 2) {
      return nums[i]
    }
  }

  return -1
}
