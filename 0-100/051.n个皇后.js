/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = []
  backtrack(n, [], result)
  return result
}

function backtrack(n, board, result) {
  if (n === board.length) {
    result.push(
      board.map(item => {
        let strArr = Array(n).fill('.')
        strArr.splice(item, 1, 'Q')
        return strArr.join('')
      }),
    )
    return
  }

  for (let col = 0; col < n; col++) {
    // 排除不合法选择
    if (isValid(board, col)) {
      board.push(col)
      backtrack(n, board, result)
      board.pop(col)
    }
  }
}

function isValid(tmp, j) {
  let i = tmp.length
  for (let x = 0; x < i; x++) {
    let y = tmp[x]
    if (y === j || x - y === i - j || x + y === i + j) {
      return false
    }
  }
  return true
}
