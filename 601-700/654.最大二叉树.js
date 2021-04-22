/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function (nums) {
  //  构造最大的二叉树 首先要找到最大值作为根节点
  //   然后在递归调用 创建左子树和右子树
  return buildTree(nums, 0, nums.length - 1)
}
function buildTree(arr, min, max) {
  if (max < min) {
    return null
  }

  let index = -1
  let maxVal = -Infinity
  // 找出最大的根节点
  for (let i = min; i <= max; i++) {
    if (maxVal < arr[i]) {
      maxVal = arr[i]
      index = i
    }
  }
  console.log(maxVal)
  // 递归创建左右子树
  const root = new TreeNode()
  root.val = maxVal
  // 从数组左边找最大的作为根节点，构造左子树
  root.left = buildTree(arr, min, index - 1)
  // 从数组右边找最大的作为根节点，构造右子树
  root.right = buildTree(arr, index + 1, max)
  return root
}
