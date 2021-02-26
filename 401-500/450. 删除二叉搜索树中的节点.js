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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 1. 末端节点 直接删除
  // 2. 只有一个子节点，则删除该节点，然后子节点补上来
  // 3. 有两个节点，要找左子树上最大的节点，或右子树最小的节点来替换自己

  if (root === null) {
    return null
  }
  // 找到将要删除的节点
  if (root.val === key) {
    if (root.left === null) {
      return root.right
    }
    if (root.right === null) {
      return root.left
    }
    // 找出右节点最小的那个
    const minNode = getMinNode(root.right)
    root.val = minNode.val
    // 删除minNode
    root.right = deleteNode(root.right, minNode.val)
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  return root
}

function getMinNode(root) {
  while (root.left !== null) {
    root = root.left
  }
  return root
}
