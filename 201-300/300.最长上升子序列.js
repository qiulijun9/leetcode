/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }

  return res
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i] 表示以nums[i] 为结尾的最长递增子序列的长度
  const dp = new Array(nums.length).fill(1)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }
  return res
}
