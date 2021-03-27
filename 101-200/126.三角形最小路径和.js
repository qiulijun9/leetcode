/**
 * @param {number[][]} triangle
 * @return {number}
 *  超时
 */
var minimumTotal = function (triangle) {
  return helper(triangle, 0, 0)
}

function helper(triangle, i, j) {
  if (i === triangle.length - 1) {
    return triangle[i][j]
  }

  return (
    Math.min(helper(triangle, i + 1, j), helper(triangle, i + 1, j + 1)) +
    triangle[i][j]
  )
}

// 动态规划 自底向上
// 最底的一层的 和是其本身
// 定义状态 dp[i,j]  从下一层的节点走到i，j这个点的路径和的最小值
// dp 方程 dp[i,j] = Math.min(dp(i+1,j),dp(i+1，j+1))+triangle[i][j]

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle.length; j++) {
      triangle[i][j] =
        Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return triangle[0][0]
}

/**
 * @param {number[][]} triangle
 * @return {number}
 * 二维数组将为一维数组 保存 dp[i][j]的值
 */
var minimumTotal = function (triangle) {
  var dp = new Array(triangle.length + 1).fill(0)
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle.length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
      console.log(dp[j], dp[j + 1])
    }
  }

  return dp[0]
}
