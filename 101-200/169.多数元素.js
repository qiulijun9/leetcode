/**
 * @param {number[]} nums
 * @return {number}
 *
 * [2,2,1,1,1,2,2]
 */
var majorityElement = function (nums) {
  //1.暴力  时间复杂度 O(n)2
  // for (let i = 0; i < nums.length; i++) {
  //   let count = 1
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       count++
  //     }
  //     if (count >= Math.floor(nums.length / 2)) {
  //       return nums[i]
  //     }
  //   }
  // }
  // return current
  // 2.map 时间复杂度 O(n)  空间O(n)
  // let numMap = {}
  // for (let i = 0; i < nums.length; i++) {
  //   if (numMap[nums[i]]) {
  //     numMap[nums[i]] += 1
  //   } else {
  //     numMap[nums[i]] = 1
  //   }
  //   if (numMap[nums[i]] >= nums.length / 2) {
  //     return nums[i]
  //   }
  // }
  // 3.sort O(nlogn)
  // nums.sort()
  // return nums[Math.floor(nums.length / 2)]

  // 4. 分治O(nlogn) 分别求left和 right的最大值 ，如果都相同，则为最终的majority，否则计算count 值，返回count 最大的那个

  // 计算元素在数组中出现的次数
  const ComputerCount = (nums, ele, left, right) => {
    let count = 0
    for (let i = left; i <= right; i++) {
      if (nums[i] === ele) {
        count++
      }
    }
    return count
  }

  const computerMajorityElement = (nums, left, right) => {
    if (left === right) {
      return nums[left]
    }

    const mid = Math.floor((right - left) / 2) + left
    const leftEle = computerMajorityElement(nums, left, mid)
    const rightEle = computerMajorityElement(nums, mid + 1, right)

    if (leftEle === rightEle) {
      return leftEle
    }

    const leftCount = ComputerCount(nums, leftEle, left, right)
    const rightCount = ComputerCount(nums, rightEle, left, right)
    console.log(888, leftCount, rightCount)
    return leftCount > rightCount ? leftEle : rightEle
  }

  return computerMajorityElement(nums, 0, nums.length - 1)
}

console.log(majorityElement([8, 9, 8, 9, 8]))
