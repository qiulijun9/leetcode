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

  // set
  // 广度优先搜索bfs 层层遍历 ,树中的节点不会重复，图中的节点可能会重复，一般会用visited set来存储已遍历过的节点
  while (queue.length) {
    const leverSize = queue.length
    const currentLevel = []

    for (let i = 0; i < leverSize; i++) {
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

  dfs(result, root, 0)
  return result
}
// 深度优先搜索，利用递归的方式
function dfs(result, node, level) {
  if (result.length < level + 1) {
    result.push([])
  }
  result[level].push(node.val)

  if (node.left !== null) {
    dfs(result, node.left, level + 1)
  }
  if (node.right !== null) {
    dfs(result, node.right, level + 1)
  }
}
