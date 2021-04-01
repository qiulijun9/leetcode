/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// var change = function (amount, coins) {
//   const n = coins.length
//   // dp[i][j] 表示使用前i 个物品，容量为j 时 有dp[i][j] 种方法装满背包
//   // 定义二维数组
//   const dp = new Array(n + 1)
//   for (let i = 0; i <= n; i++) {
//     dp[i] = new Array(amount + 1).fill(0)
//   }

//   i = 0
//   while (i < dp.length) {
//     dp[i][0] = 1
//     i++
//   }

//   console.log(dp)
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= amount; j++) {
//       // 状态 装入背包和不装入背包
//       if (j - coins[i - 1] < 0) {
//         // 不装入背包  此时的状态是之前的状态
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         // 总共的凑法为两者之和
//         dp[i][j] = dp[i - 1][j - coins[i - 1]] + dp[i - 1][j]
//       }
//     }
//   }

//   return dp[n][amount]
// }

var change = function (amount, coins) {
  const n = coins.length
  // dp[i][j] 表示使用前i 个物品，容量为j 时 有dp[i][j] 种方法装满背包
  // 定义二维数组
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= amount; j++) {
      // 状态 装入背包和不装入背包
      if (j - coins[i] >= 0) {
        // 总共的凑法为两者之和
        dp[j] = dp[j - coins[i]] + dp[j]
      }
    }
  }
  console.log(dp)

  return dp[amount]
}
console.log(change(5, [1, 2, 5]))
