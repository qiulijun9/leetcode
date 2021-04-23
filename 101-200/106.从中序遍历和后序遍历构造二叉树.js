/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
  )
}

function build(inorder, inoStart, inoEnd, postorder, postStart, postEnd) {
  const rootVal = postorder[postEnd]
  let index = -Infinity

  if (inoEnd < inoStart) {
    return null
  }
  for (let i = inoStart; i <= inoEnd; i++) {
    if (inorder[i] === rootVal) {
      index = i
      break
    }
  }

  const leftSize = index - inoStart
  let root = new TreeNode(rootVal)

  root.left = build(
    inorder,
    inoStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1,
  )
  root.right = build(
    inorder,
    index + 1,
    inoEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1,
  )
  return root
}
