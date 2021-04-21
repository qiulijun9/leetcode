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
var invertTree = function (root) {
  if (root === null) {
    return null
  }

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)
  return root
}

var invertTree = function (root) {
  // 明确root 节点需要做什么
  // 翻转二叉树 ,也就是交换左右子树上的值， 那就需要一个变量来进行交换

  if (root === null) {
    return null
  }
  const temp = root.left
  root.left = root.right
  root.right = temp

  //  子节点进行递归,做相同的事情
  invertTree(root.left)
  invertTree(root.right)

  return root
}

// 左右根  312 967 --- 472 96 31
// 根左右  472  312 967 -- 472 96 31
// 左根右  312  472  213 967 - 472 13 69       4721369
