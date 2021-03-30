// 一共有 N 件物品，背包限重为 w ,  第i个物品的重量w[i]，第 i 个物品的价值 val[i]
// dp [i][j] 表示 当前第i件商品装进限重为 j 的背包里的最大值
// 不放入背包，此时的状态  dp[i][j] = dp[i-1][j]
// 放入背包，重量是 剩余的总量加上 当前 物品的价值。就是当前背包能装的最大价值 dp[i][j] = dp[i-1][j - w[i-1]] +val[i-1]

function knapsack() {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= W; j++) {
      // 背包装不下的情况
      if (j - w[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        // 择优
        dp[i][j] = Math.max(dp[i - 1][j - w[i - 1]] + val[i - 1], dp[i - 1][j])
      }
    }
  }
}

var canPartition = function (nums) {
  const n = nums.length
  if (n < 2) {
    return false
  }
  let sum = 0,
    maxNum = 0
  for (const num of nums) {
    sum += num
    maxNum = maxNum > num ? maxNum : num
  }
  if (sum & 1) {
    return false
  }
  const target = Math.floor(sum / 2)
  if (maxNum > target) {
    return false
  }
  const dp = new Array(n).fill(0).map(v => new Array(target + 1, false))
  for (let i = 0; i < n; i++) {
    dp[i][0] = true
  }
  dp[0][nums[0]] = true
  for (let i = 1; i < n; i++) {
    const num = nums[i]
    for (let j = 1; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n - 1][target]
}
