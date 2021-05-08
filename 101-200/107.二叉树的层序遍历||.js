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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = []
  if (root === null) {
    return []
  }
  dfs(root, result, 0)
  // 自底向上 ： 由之前的从上而下 反转之后的结果
  return result.reverse()
}

function dfs(root, result, level) {
  if (result.length < level + 1) {
    result.push([])
  }
  result[level].push(root.val)

  if (root.left) {
    dfs(root.left, result, level + 1)
  }

  if (root.right) {
    dfs(root.right, result, level + 1)
  }
}
