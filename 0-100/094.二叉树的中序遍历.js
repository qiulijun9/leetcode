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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []

  function helper(root) {
    if (!root) {
      return
    }
    // 左
    root.left && helper(root.left)
    // 中
    result.push(root.val)
    // 右
    root.right && helper(root.right)
  }

  helper(root)

  return result
}
