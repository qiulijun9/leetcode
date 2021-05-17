/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let result = []

  helper(root)
  console.log(result)
  return result[k - 1]
  function helper(root) {
    if (root === null) {
      return
    }
    helper(root.right)
    result.push(root.val)
    helper(root.left)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 把数组换成变量来记录索引
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let result = null
  let index = 0

  helper(root)
  return result

  function helper(root) {
    if (root === null) {
      return
    }

    helper(root.right)
    index++
    if (index === k) {
      result = root.val
    }

    helper(root.left)
  }
}
