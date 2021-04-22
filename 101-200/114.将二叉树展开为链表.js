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

/*      1
 *     /
 *    2
 *   / \
 *  3  4
 */

// 展开左子树，展开右子树
// 将左子树作为右子树  1--2 --3
// 再将原来的右子树接到刚才的右子树上 1--2--3--4
var flatten = function (root) {
  if (root === null) {
    return null
  }
  // 展开左子树，展开右子树
  flatten(root.left)
  flatten(root.right)
  // 将左子树作为右子树
  const temp = root.right
  root.right = root.left
  root.left = null

  // 连接右子树
  while (root.right !== null) {
    root = root.right
  }
  root.right = temp
}
