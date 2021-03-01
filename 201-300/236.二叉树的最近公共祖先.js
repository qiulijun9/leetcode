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
  // 后序遍历，确定访问的是最近的公共祖先
  // 1. 如果p,q 都在以root 为根的树中，那就返回root
  // 2. 如果p,q 都不在root 上，则返回null
  // 3. 如果p,q 有一个在root上，则返回这个节点，在用这个节点和另一个p或q 继续递归

  if (root === null) {
    return null
  }

  if (root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left !== null && right !== null) {
    return root
  }

  if (left === null && right === null) {
    return null
  }

  return left !== null ? left : right
}
