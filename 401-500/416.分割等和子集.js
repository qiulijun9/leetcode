/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 背包的可装载的重量为 sum /2
  let sum = 0
  for (const num of nums) {
    sum += num
  }

  if (sum % 2 !== 0) {
    return false
  }
  if (nums.length < 2) {
    return false
  }
  sum = sum / 2
  const n = nums.length
  const dp = new Array(n + 1).fill(0).map(v => new Array(sum + 1, false))

  // dp[..][0] = true dp[0][..] = false   背包无空闲说明装满了
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }

  // 当前物品重量为 nums[i-1]
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // j - nums[i] 背包剩余量
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }

      // console.log(dp[i][j])
    }
  }

  return dp[n][sum] || false
}

// 降维
var canPartition = function (nums) {
  // 背包的可装载的重量为 sum /2
  let sum = 0
  for (const num of nums) {
    sum += num
  }

  if (sum % 2 !== 0) {
    return false
  }
  if (nums.length < 2) {
    return false
  }
  sum = sum / 2
  const n = nums.length
  const dp = new Array(sum + 1).fill(false)
  dp[0] = true

  // 当前物品重量为 nums[i-1]
  for (let i = 1; i <= n; i++) {
    for (let j = sum; j >= 0; j--) {
      if (j - nums[i] >= 0) {
        dp[j] = dp[j] || dp[j - nums[i]]
      }

      // console.log(dp[i][j])
    }
  }

  return dp[sum]
}

console.log(canPartition([1, 5, 11, 5]))
