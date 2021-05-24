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
var countNodes = function (root) {
  let leftNode = root
  let rightNode = root
  let hl = 0
  let hr = 0

  if (root === null) {
    return 0
  }
  while (leftNode !== null) {
    leftNode = leftNode.left
    hl++
  }

  while (rightNode !== null) {
    rightNode = rightNode.right
    hr++
  }

  // 满二叉树
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }

  // 普通的二叉树
  return 1 + countNodes(root.left) + countNodes(root.right)
}

// 超出时间限制
var countNodes = function (root) {
  let result = []
  if (root === null) {
    return 0
  }
  traversal(root, result)
  return result.length
}

function traversal(root, result) {
  console.log(result)
  if (root === null) {
    return null
  }

  result.push(root.val)

  traversal(root.left, result)
  traversal(root.right, result)
}

//dfs
var countNodes = function (root) {
  if (root === null) {
    return 0
  }

  return countNodes(root.left) + countNodes(root.right) + 1
}

// 利用完全二叉树的性质
// 普通二叉树和 满二叉树的结合版

var countNodes = function (root) {
  let leftH = 0
  let rightH = 0
  let left = root
  let right = root

  if (root === null) {
    return 0
  }

  while (left !== null) {
    leftH++
    left = left.left
  }

  while (right !== null) {
    rightH++
    right = right.right
  }

  // 是满二叉树时,左子树的高 和右子树的高相同

  if (leftH === rightH) {
    return Math.pow(2, leftH) - 1
  }

  // 普通的二叉树

  return countNodes(root.left) + countNodes(root.right) + 1
}
