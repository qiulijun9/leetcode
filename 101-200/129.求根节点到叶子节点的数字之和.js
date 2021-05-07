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
var sumNumbers = function (root) {
  const result = []
  helper(root, result, '')

  if (root === null || !result.length) {
    return 0
  }

  const r = result.reduce((pre, cur) => {
    return Number(pre) + Number(cur)
  })
  return r
}

function helper(root, result, path) {
  path += root.val

  if (root.left === null && root.right === null) {
    result.push(path)
  }

  if (root.left) {
    helper(root.left, result, path)
  }

  if (root.right) {
    helper(root.right, result, path)
  }
}
