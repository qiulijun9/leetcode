/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur = nums[0]

  for (let i = 1; i < nums.length; ) {
    if (nums[i] === cur) {
      nums.splice(i, 1)
    } else {
      cur = nums[i++]
    }
  }
  return nums.length
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 设置快慢指针
  // left 比 fast 快 异步， 快指针先走一步，当发现值不同 slow ++ ,替换该值 nums[slow] = nums[fast] 如果值重复 fast ++
  // 结果为 slow +1

  if (!nums.length) {
    return 0
  }

  let slow = 0
  let fast = 1

  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }

    fast++
  }
  return slow + 1
}
