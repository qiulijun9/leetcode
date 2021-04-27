/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  return helper(root.left, root.right)
}

function helper(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) {
    return true
  }

  if (
    leftNode === null ||
    rightNode === null ||
    leftNode.val !== rightNode.val
  ) {
    return false
  }
  return (
    helper(leftNode.left, rightNode.right) &&
    helper(leftNode.right, rightNode.left)
  )
}
