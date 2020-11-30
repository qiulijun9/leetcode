/**
 * @param {number[]} prices
 * @return {number}
 *  贪心算法：
 * 每次看后一天是否比前一天大，这样就前一天买入，后一天卖出， 时间复杂度O(n)
 */
var maxProfit = function (prices) {
  let res = 0
  if (prices.length < 2) return 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}

console.log(maxProfit([1, 2, 3, 4, 5]))

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

/**
 * @param {number[]} prices
 * @return {number}
 *  动态规划：
 * 保存每一天，0股时的状态，1 股时的状态 dp[i][0] dep[i][1]
 *  保留上一个状态，每天和前一天比较，只保存最大的利润   时间复杂度O(n)
 */

var maxProfit2 = function (prices) {
  let dp0 = 0
  let dp1 = -prices[0]

  for (let i = 0; i < prices.length; i++) {
    // 前一天 卖出
    const newDp0 = Math.max(dp0, dp1 + prices[i])
    //买入
    const newDp1 = Math.max(dp1, dp0 - prices[i])
    dp0 = newDp0
    dp1 = newDp1
  }
  return dp0
}

console.log(maxProfit2([1, 2, 3, 4, 5]))
