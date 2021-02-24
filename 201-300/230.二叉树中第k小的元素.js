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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = 0
  let key = 0
  traverse(root, k)

  // 中序遍历的树结果是升序的
  function traverse(root, k) {
    if (root === null) {
      return
    }
    traverse(root.left, k)
    key++

    if (key === k) {
      result = root.val
    }

    traverse(root.right, k)
  }

  return result
}
// 有点不懂。。。
var kthSmallest2 = function (root, k) {
  let m = getNodeNumber(root.left)

  if (m + 1 === k) {
    return root.val
  }
  if (m >= k) {
    return kthSmallest(root.left, k)
  }

  if (m < k) {
    return kthSmallest(root.right, k - m - 1)
  }
}

function getNodeNumber(root) {
  if (root === null) {
    return 0
  }
  return getNodeNumber(root.left) + getNodeNumber(root.right) + 1
}
