/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 找到根节点  确定左右子树
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}

function build(preorder, preStart, preEnd, inorder, inoStart, inoEnd) {
  //找到 前序遍历的根节点， 和中序遍历的根节点 根据 中序的根节点确定左右子树

  if (preEnd < preStart) {
    return null
  }

  const rootVal = preorder[preStart]
  let index = -Infinity

  for (let i = inoStart; i <= inoEnd; i++) {
    if (inorder[i] === rootVal) {
      index = i
      break
    }
  }

  const root = new TreeNode(rootVal)
  const leftSize = index - inoStart
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inoStart,
    index - 1,
  )
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inoEnd,
  )

  return root
}
