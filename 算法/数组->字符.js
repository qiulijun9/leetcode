// input: [[["java", "maven", "spring"], "python"], ["machine learning", "deep learning"]]
// output: (("java" OR "maven" OR "spring") AND "python") AND ("machine learning" OR "deep learning")

function test(arr) {
  let result = ''
  return dfs(arr, result).substring(1)
}

function dfs(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result += '"' + arr[i] + '"'
      if (i < arr.length - 1) {
        result += ' OR '
      }
    } else {
      if (i === arr.length - 1) {
        return dfs(arr[i], result)
      }
      result += dfs(arr[i], result) + ' AND '
    }
  }
  return '(' + result + ')'
}

console.log(
  test([
    [['java', 'maven', 'spring'], 'python'],
    ['machine learning', 'deep learning'],
  ]),
)
