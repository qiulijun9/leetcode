/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // 确定已自己为根的子树的格式(序列化子树)，需要用到后序遍历
  // 在判断当前子树是否和其他子树重复
  const memo = new Map()
  const result = []
  // 序列化子树
  function traverse(root) {
    if (root === null) {
      return '#'
    }

    const left = traverse(root.left)
    const right = traverse(root.right)
    const str = `${left},${right},${root.val}`

    if (memo.get(str)) {
      memo.set(str, memo.get(str) + 1)
    } else {
      memo.set(str, 1)
    }
    // 去除结果中重复的值
    if (memo.get(str) === 2) {
      result.push(root)
    }
    return str
  }

  traverse(root)
  return result
}

//解题思路 ，确定以自己为根的 序列化
// 在对比其他的树的序列化 ，看是否有相同的，
// 要过滤掉数组中的重复值

var findDuplicateSubtrees = function (root) {
  const result = []
  const memo = {}
  function traverse(root) {
    if (root === null) {
      return '#'
    }
    const left = traverse(root.left)
    const right = traverse(root.right)
    const str = `${left},${right},${root.val}`

    if (memo[str]) {
      memo[str] += 1
    } else {
      memo[str] = 1
    }
    if (memo[str] === 2) {
      result.push(root)
    }
    return str
  }

  traverse(root)
  return result
}
