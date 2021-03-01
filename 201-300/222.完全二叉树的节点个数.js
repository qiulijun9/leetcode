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
 * @return {number}
 */
var countNodes = function (root) {
  let leftNode = root
  let rightNode = root
  let hl = 0
  let hr = 0

  if (root === null) {
    return 0
  }
  while (leftNode !== null) {
    leftNode = leftNode.left
    hl++
  }

  while (rightNode !== null) {
    rightNode = rightNode.right
    hr++
  }

  // 满二叉树
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }

  // 普通的二叉树
  return 1 + countNodes(root.left) + countNodes(root.right)
}
