/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 * 找到要删除的字符串的ascii
 */
var memo
var minimumDeleteSum = function (s1, s2) {
  const m = s1.length
  const n = s2.length
  memo = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  return dp(s1, 0, s2, 0)
}

function dp(s1, i, s2, j) {
  let res = 0
  if (i === s1.length) {
    for (; j < s2.length; j++) {
      res += s2.charCodeAt(j)
    }
    return res
  }

  if (j === s2.length) {
    for (; i < s1.length; i++) {
      res += s1.charCodeAt(i)
    }
    return res
  }

  if (memo[i][j]) {
    return memo[i][j]
  }

  if (s1[i] === s2[j]) {
    memo[i][j] = dp(s1, i + 1, s2, j + 1)
  } else {
    memo[i][j] = Math.min(
      s1.charCodeAt(i) + dp(s1, i + 1, s2, j),
      s2.charCodeAt(j) + dp(s1, i, s2, j + 1),
    )
  }

  return memo[i][j]
}

console.log(minimumDeleteSum('sea', 'eat'))
