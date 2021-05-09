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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  traverse(root)
  function traverse(root) {
    if (root === null) {
      return null
    }
    // 中序倒序遍历
    traverse(root.right)
    sum += root.val
    // 把当前树变成累加的和
    root.val = sum
    traverse(root.left)
  }

  return root
}
