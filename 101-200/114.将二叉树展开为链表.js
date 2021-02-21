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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return
  }
  // 递归展开左子树和右子树
  flatten(root.left)
  flatten(root.right)

  // 先保存右子树
  const temp = root.right
  // 将左子树作为右子树
  root.right = root.left
  // 左子树置空
  root.left = null

  // 找到最右边的节点
  while (root.right !== null) {
    root = root.right
  }
  // 将连接好的左子树连接到原先的右子树末端
  root.right = temp
}
