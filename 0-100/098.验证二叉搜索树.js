/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 利用二叉树的中序遍历，左中右
 *    4
 *   3    5
 * 1  2    6
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = []
  let preRoot = -Infinity

  while (arr.length || root !== null) {
    while (root !== null) {
      arr.push(root)
      root = root.left // 左
    }
    root = arr.pop() // 左子树遍历完毕

    // 当前节点的值小于= 上一个的值
    if (root.val <= preRoot) {
      return false
    }
    preRoot = root.val
    root = root.right // 右
  }
  return true
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let preRoot = -Infinity
  let result = true

  // 中序遍历
  function helper(root) {
    if (!root) {
      return
    }
    helper(root.left) //左
    // 中

    if (root.val <= preRoot) {
      result = false
      return
    }
    preRoot = root.val
    // 右
    helper(root.right)
  }

  helper(root)

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity)
}
// 递归
function helper(root, min, max) {
  if (root === null) {
    return true
  }
  if (min !== null && root.val <= min) {
    return false
  }
  if (max !== null && root.val >= max) {
    return false
  }

  return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}
