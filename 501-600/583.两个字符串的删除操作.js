/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length

  const lcs = longestCommonSubsequence(word1, word2, m, n)
  console.log(888, lcs, 3 - 2, 3 - 2)
  return m - lcs + n - lcs
}

// 最长公共子序列
const longestCommonSubsequence = (s1, s2, m, n) => {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  return dp[m][n]
}

console.log(minDistance('sea', 'eat'))
