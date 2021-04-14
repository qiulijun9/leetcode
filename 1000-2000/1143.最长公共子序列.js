/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var memo
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  memo = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  return dp(text1, 0, text2, 0)
}

function dp(s1, i, s2, j) {
  if (i === s1.length || j === s2.length) {
    return 0
  }
  if (memo[i][j]) {
    return memo[i][j]
  }

  if (s1[i] === s2[j]) {
    // s1,s2 都在最小子序列中
    console.log(memo[i][j])
    memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1)
  } else {
    // s1,s2 至少有一个不在 最小子序列中
    memo[i][j] = Math.max(dp(s1, i + 1, s2, j), dp(s1, i, s2, j + 1))
  }

  return memo[i][j]
}

// var longestCommonSubsequence = function (text1, text2) {
//   const m = text1.length
//   const n = text2.length
//   const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1]
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
//       }
//     }
//   }

//   return dp[m][n]
// }

console.log(longestCommonSubsequence('abcde', 'ace'))
