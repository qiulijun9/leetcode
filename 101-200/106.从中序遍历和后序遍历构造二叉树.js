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

var buildTree = function (inorder, postorder) {
  return helper(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
  )
}

function helper(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  // 后序遍历的根
  const rootNode = postorder[postEnd]
  let index = -1

  if (inStart > inEnd) {
    return null
  }

  // 中序遍历根据根找出左子树和右子树
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootNode) {
      index = i
    }
  }

  const leftSize = index - inStart
  const root = new TreeNode(rootNode)

  root.left = helper(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1,
  )
  root.right = helper(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1,
  )

  return root
}
