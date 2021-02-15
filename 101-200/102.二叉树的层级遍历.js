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
  const result = []
  if (root === null) {
    return result
  }

  const queue = []
  queue.push(root)

  // 广度优先搜索bfs
  while (queue.length) {
    const leverSize = queue.length
    const currentLevel = []

    for (let i = 0; i <= leverSize - 1; i++) {
      const currentNode = queue.shift()
      currentLevel.push(currentNode.val)

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result.push(currentLevel)
  }
  return result
}
