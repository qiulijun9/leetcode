/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null
  }

  if (root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 后序遍历确定最近的根节点

  // p q 都不在root 中
  if (left === null && right === null) {
    return null
  }

  // p q 都在 root

  if (left !== null && right !== null) {
    return root
  }

  // 只有一个在则返回那个节点
  return left === null ? right : left
}
