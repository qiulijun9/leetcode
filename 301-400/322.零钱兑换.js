/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   let dp = new Array( amount + 1 ).fill( Infinity );
//   dp[0] = 0;

//   for (let i = 1; i <= amount; i++) {
//     for (let coin of coins) {
//       if (i - coin >= 0) {
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
//   }

//   return dp[amount] === Infinity ? -1 : dp[amount];
// };

var coinChange = function (coins, amount) {
  function dp(n) {
    if (n === 0) return 0
    if (n < 0) return -1

    let result = 0
    for (let i = 0; i < coins.length; i++) {
      let subproblem = dp(n - coins[i])
      result = Math.min(result, subproblem + 1)
    }
  }

  return dp(amount)
}

// 动态规划，dp 方程 ： dp[i] = Math.min(dp[i],dp[i- coins[j]]+1)
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)

  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // 硬币的值小于求和的这个值才
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}
