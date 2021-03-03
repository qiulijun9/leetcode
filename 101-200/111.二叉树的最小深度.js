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
var minDepth = function (root) {
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
      if (node.left === null && node.right === null) {
        return deep
      }
      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    deep++
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
/** dfs
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) {
    return 0
  }

  if (root.left === null) {
    return 1 + minDepth(root.right)
  }

  if (root.right === null) {
    return 1 + minDepth(root.left)
  }

  const minLeft = minDepth(root.left)
  const minRight = minDepth(root.right)

  return 1 + Math.min(minLeft, minRight)
}
