/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n - 1]
}

var fib2 = function (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  let a = 0
  let b = 1
  let temp

  for (let i = 2; i <= n; i++) {
    temp = (a + b) % 1000000007
    a = b
    b = temp
  }
  return temp
}

console.log(fib2(3))
