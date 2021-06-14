/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const left = helper(nums, target, 'left')
  const right = helper(nums, target, 'right')
  return [left, right]
}

function helper(nums, target, key) {
  let left = 0
  let right = nums.length - 1
  let res = -1

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left
    if (nums[mid] === target) {
      if (key === 'left') {
        right = mid - 1
      } else {
        left = mid + 1
      }
      res = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
