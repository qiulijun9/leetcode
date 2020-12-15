/**
 * 1 ()
 * 2 ()() (())
 * 递归 + 剪枝
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = []
  gen(results, n, '', 0, 0)
  return results
}

function gen(results, n, result, left, right) {
  // 匹配正确的括号，左括号和右括号的个数相等且都等于n
  if (left === n && right === n) {
    results.push(result)
    return
  }
  // 左括号若小于n 就可以一直+（
  if (left < n) {
    gen(results, n, result + '(', left + 1, right)
  }
  // 右括号的条件，同时满足后 +） 避免多一次递归
  if (right < n && right < left) {
    gen(results, n, result + ')', left, right + 1)
  }
}

console.log(generateParenthesis(3))
