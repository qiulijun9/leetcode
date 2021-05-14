/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = []
  queue.push(root)
  const result = []
  if (root === null) return result

  while (queue.length) {
    const levelSize = queue.length
    const currentLevelNodes = []

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      currentLevelNodes.push(currentNode.val)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    result.push(currentLevelNodes)
  }
  return result
}

var levelOrder = function (root) {
  const result = []
  if (root === null) {
    return result
  }
  dfs(root, 0)
  function dfs(root, level) {
    if (result.length < level + 1) {
      result.push([])
    }

    result[level].push(root.val)

    if (root.left) {
      dfs(root.left, level + 1)
    }
    if (root.right) {
      dfs(root.right, level + 1)
    }
  }

  return result
}
