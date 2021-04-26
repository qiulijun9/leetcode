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

// 二叉树的层级遍历
// 广度优先搜索
var levelOrder = function (root) {
  const queue = []
  queue.push(root)
  const result = []
  if (root === null) {
    return result
  }

  while (queue.length) {
    const levelNodes = []
    const levelSize = queue.length
    // 保留queue的层级 ，之后的queue.shift() 会改变queue.length
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      levelNodes.push(currentNode.val)

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result.push(levelNodes)
  }

  return result
}

// 深度优先遍历

var levelOrder = function (root) {
  const result = []
  if (root === null) {
    return result
  }
  dfs(result, root, 0)

  return result
}

function dfs(result, root, level) {
  // 在遍历到该层时 ,同时创建下层的空数组做为备用
  // eg: [3,9,20,null,null,15,7]
  // [ [] ] 1
  // [ [ 3 ], [] ] 2
  // [ [ 3 ], [ 9 ] ] 2
  // [ [ 3 ], [ 9, 20 ], [] ] 3
  // [ [ 3 ], [ 9, 20 ], [ 15 ] ] 3

  if (result.length < level + 1) {
    result.push([])
  }

  result[level].push(root.val)
  if (root.left !== null) {
    dfs(result, root.left, level + 1)
  }
  if (root.right !== null) {
    dfs(result, root.right, level + 1)
  }
}
