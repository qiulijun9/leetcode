/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false
  }
  //  防止 [1,2] 1  没有右子树返回true 的判断
  if (root.val === targetSum && root.left === null && root.right === null) {
    return true
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}
