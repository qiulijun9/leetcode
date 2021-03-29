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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // if 两颗子树  left right 存在 left === right right === left
  // 都不存在  true
  // 存在一个 是false 或者两个子树值不同

  function helper(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) {
      return true
    }

    if (leftNode === null || rightNode === null) {
      return false
    }

    return (
      leftNode.val === rightNode.val &&
      helper(leftNode.left, rightNode.right) &&
      helper(leftNode.right, rightNode.left)
    )
  }

  return helper(root, root)
}
