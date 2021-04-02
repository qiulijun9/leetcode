// 一共有 N 件物品，背包限重为 w ,  第i个物品的重量w[i]，第 i 个物品的价值 val[i]
// dp [i][j] 表示 当前第i件商品装进限重为 j 的背包里的最大值
// 不放入背包，此时的状态  dp[i][j] = dp[i-1][j]
// 放入背包，重量是 剩余的总量加上 当前 物品的价值。就是当前背包能装的最大价值 dp[i][j] = dp[i-1][j - w[i-1]] +val[i-1]

function knapsack() {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= W; j++) {
      // 背包装不下的情况
      if (j - w[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        // 择优
        dp[i][j] = Math.max(dp[i - 1][j - w[i - 1]] + val[i - 1], dp[i - 1][j])
      }
    }
  }
}


// 背包伪代码
for 状态1 in 状态1 的值{
  for 状态2 in 状态2 的值{
     dp[转态1][转态2] = 计算（选择1，选择2）
  }
}