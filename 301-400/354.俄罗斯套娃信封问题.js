/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // 对二维数组进行排序， 宽度按升序排列，当宽度一样时高度降序排,在求最长子序列
  let n = envelopes.length
  envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })

  let res = 0
  let dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}
