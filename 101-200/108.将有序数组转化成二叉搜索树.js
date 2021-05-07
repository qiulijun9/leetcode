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
var sortedArrayToBST = function (nums) {
  // 找出root
  // 递归生成 left right

  return dfs(nums, 0, nums.length - 1)
}

function dfs(nums, l, r) {
  if (r < l) {
    return null
  }
  // 根节点
  let mid = Math.floor((r - l) / 2) + l
  let root = new TreeNode(nums[mid])

  root.left = dfs(nums, l, mid - 1)
  root.right = dfs(nums, mid + 1, r)

  return root
}
