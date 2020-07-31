/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let length = nums.length
  if (length === 0) return 0
  if (length === 1) return nums[0]

  let arr = new Array(nums.length)
  arr[0] = nums[0]
  arr[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i])
  }
  return arr[length - 1]
}

console.log(rob([1, 2, 3, 1]))

var rob2 = function (nums) {
  let length = nums.length
  if (length === 0) return 0
  if (length === 1) return nums[0]

  let arr = new Array(nums.length)
  let pre = nums[0]
  let next = Math.max(nums[0], nums[1])
  for (let i = 2; i < length; i++) {
    let temp = next
    next = Math.max(next, pre + nums[i])
    pre = temp
  }
  return next
}
