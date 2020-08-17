/**
 * 利用双端队列，找最大值
 * 时间复杂度O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return []
  let window = [] //下标
  let res = [] //结果
  for (let i = 0; i < nums.length; i++) {
    // 窗口往后移
    if (window[0] <= i - k) {
      window.shift()
    }
    // 如果窗口的数，小于当前添加进来的数，就删除小的数
    while (window && nums[window[window.length - 1]] <= nums[i]) {
      window.pop()
    }
    window.push(i)
    // i=0 [0,1,2] 为滑动窗口，window[0]为每次窗口的最大值
    if (i >= k - 1) {
      res.push(nums[window[0]])
    }
  }

  return res
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums, 3))
