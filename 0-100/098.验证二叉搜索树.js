/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 利用二叉树的中序遍历，左中右
 *    4
 *   3    5
 * 1  2    6
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = []
  let preRoot = -Infinity

  while (arr.length || root !== null) {
    while (root !== null) {
      arr.push(root)
      root = root.left // 左
    }
    root = arr.pop() // 左子树遍历完毕

    // 当前节点的值小于= 上一个的值
    if (root.val <= preRoot) {
      return false
    }
    preRoot = root.val
    root = root.right // 右
  }
  return true
}
