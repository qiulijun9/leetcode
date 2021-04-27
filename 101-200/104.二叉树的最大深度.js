/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**  bfs 解法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }

  const queue = []
  queue.push(root)
  let deep = 1

  while (queue.length) {
    const leverSize = queue.length
    for (let i = 0; i < leverSize; i++) {
      const node = queue.shift()
      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    if (queue.length) {
      deep++
    }
  }
  return deep
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** dfs 解法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  const leftMax = maxDepth(root.left)
  const rightMax = maxDepth(root.right)

  return Math.max(leftMax, rightMax) + 1
}

var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}

var maxDepth = function (root) {
  const queue = []
  queue.push(root)
  let result = 0
  if (root === null) {
    return 0
  }

  while (queue.length) {
    const leverSize = queue.length

    for (let i = 0; i < leverSize; i++) {
      const currentNode = queue.shift()

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result++
  }

  return result
}
