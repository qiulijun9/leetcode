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
  // === 根节点
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }
  // 左子树
  const left = lowestCommonAncestor(root.left, p, q)
  // 右子树
  const right = lowestCommonAncestor(root.right, p, q)
  // 左子树 为空返回右子树
  if (left === null) {
    return right
  }
  // 右子树为空返回左子树
  if (right === null) {
    return left
  }
  return root
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 二叉搜索树的特点 左子树的值都小于根节点，右子树的值都大于根节点，，利用该特点递归实现
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果p,q 都小于根节点，说明都在左子树中
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  // 如果p,q 都大于根节点，说明都在右子树中
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *  非递归形式
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else {
      break
    }
  }
  return root
}
