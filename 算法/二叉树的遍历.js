/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = []
  addResult(root, result)
  return result
}
function addResult(root, result) {
  if (root === null) {
    return null
  }
  result.push(root.val)
  addResult(root.left, result)
  addResult(root.right, result)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  addResult(root, result)
  return result
}

function addResult(root, result) {
  if (root === null) {
    return null
  }

  addResult(root.left, result)
  result.push(root.val)
  addResult(root.right, result)
}

// 后序遍历
var postorderTraversal = function (root) {
  const result = []
  addResult(root, result)
  return result
}
function addResult(root, result) {
  if (root === null) {
    return null
  }

  addResult(root.left, result)
  addResult(root.right, result)
  result.push(root.val)
}
