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

var kthSmallest3 = function (root, k) {
  // 二叉搜索树 中序遍历是有序的， 要找到第k 小的元素，就是找数组的第 k 个值
  const result = []

  traverse(root, result)
  return result[k - 1]
}

function traverse(root, result) {
  if (root === null) {
    return
  }
  traverse(root.left, result)

  result.push(root.val)

  traverse(root.right, result)
}

var kthSmallest = function (root, k) {
  //  获取自己的排名
  const m = computerRootSize(root.left)

  console.log(m)
  if (m + 1 === k) {
    return root.val
  }

  // 有序数组  如果 k 小于当前 m 的排名 应该去左子树上查找
  if (k < m + 1) {
    return kthSmallest(root.left, k)
  }
  if (k > m + 1) {
    return kthSmallest(root.right, k - m - 1)
  }
}

// 计算以自己为根的这颗二叉树有多少个节点
function computerRootSize(root) {
  if (root === null) {
    return 0
  }

  return computerRootSize(root.left) + computerRootSize(root.right) + 1
}
