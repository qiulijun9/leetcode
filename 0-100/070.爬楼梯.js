/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return n
  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 2

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n
  let a = 1
  let b = 2
  let temp = 0
  for (let i = 2; i < n; i++) {
    temp = a + b
    a = b
    b = temp
  }

  return temp
}

console.log(climbStairs(6))

function foo(a, b) {
  console.log('a:' + a, 'b:' + b)
}
foo.apply(null, [2, 3])
