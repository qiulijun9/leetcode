/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) {
    return 1
  }

  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    // 两个较大数相加会溢出
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  console.log(dp)
  return dp[n - 1]
}
