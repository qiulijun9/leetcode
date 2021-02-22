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
  // 求出最大的值
  // 构建左右子树
  return buildTree(nums, 0, nums.length - 1)
}

const buildTree = (nums, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return null
  }
  let maxVal = -Infinity
  let index = -1
  // 找出最大值根
  for (let i = leftIndex; i <= rightIndex; i++) {
    if (maxVal < nums[i]) {
      maxVal = nums[i]
      index = i
    }
  }
  let root = new TreeNode(maxVal)
  // 添加左子树和右子树
  root.left = buildTree(nums, leftIndex, index - 1)
  root.right = buildTree(nums, index + 1, rightIndex)

  return root
}
