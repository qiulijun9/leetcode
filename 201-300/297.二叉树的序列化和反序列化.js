/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 * 1,2,#,4,#,#,3,#,#,
 * 前序遍历
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = []
  helper(root)

  function helper(root) {
    // 前序遍历位置 根左右
    if (root === null) {
      result.push('#')
      return
    }
    result.push(root.val)
    helper(root.left)
    helper(root.right)
  }
  return result.join()
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',')

  if (!arr.length) {
    return null
  }

  return getRoot(arr)
}

function getRoot(arr) {
  // 因为前序遍历的结果是根左右的顺序，所以第一个值是 根，构造树的顺序和数组的顺序一致
  const node = arr.shift()
  if (node === '#') {
    return null
  }
  const root = new TreeNode(node)
  root.left = getRoot(arr)
  root.right = getRoot(arr)
  return root
}
// 后序遍历...
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 * 1,2,#,4,#,#,3,#,#,
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = []
  helper(root)

  function helper(root) {
    if (root === null) {
      result.push('#')
      return
    }
    // 后序遍历顺序为左右根
    helper(root.left)
    helper(root.right)
    result.push(root.val)
  }
  console.log(result.join())
  return result.join()
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',')

  if (!arr.length) {
    return null
  }

  return getRoot(arr)
}

function getRoot(arr) {
  // 后序遍历最后一个为根节点 ，然后是右子树，再是左子树
  const node = arr.pop()
  if (node === '#') {
    return null
  }
  const root = new TreeNode(node)
  root.right = getRoot(arr)
  root.left = getRoot(arr)
  return root
}

// dfs 写法
/**
 * Encodes a tree to a single string.
 * 1,2,#,4,#,#,3,#,#,
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = []
  const queue = []
  queue.push(root)

  while (queue.length) {
    const node = queue.shift()
    if (node === null) {
      result.push('#')
    } else {
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  console.log(result.join())
  return result.join()
}

var deserialize = function (data) {
  // 一层 根 二层 左 右 ...

  const arr = data.split(',')
  if (arr[0] === '#') {
    return null
  }
  const root = new TreeNode(arr[0])
  const queue = []
  queue.push(root)
  let point = 1

  while (point < arr.length) {
    const node = queue.shift()
    if (node === '#') {
      return null
    }

    const left = arr[point]
    if (left !== '#') {
      node.left = new TreeNode(left)
      queue.push(node.left)
    } else {
      node.left = null
    }

    const right = arr[point + 1]
    if (right !== '#') {
      node.right = new TreeNode(right)
      queue.push(node.right)
    } else {
      node.right = null
    }

    // 1,2,3,#,#,4,5,#,#,#,#
    // left 为 2， right 3 point 下次应跨过上次的左右节点 2，所以加2
    point += 2
  }
  return root
}

var serialize = function (root) {
  let result = []
  traverse(root, result)
  return result.join('')
}

function traverse(root, result) {
  if (root === null) {
    result.push('#')
    return
  }
  result.push(root.val)

  traverse(root.left, result)
  traverse(root.right, result)
}

var deserialize = function (data) {
  const arr = data.split(',')
  return getRoot(arr)
}

function getRoot(arr) {
  //前序遍历第一是根节点
  const currentNode = arr.shift()
  if (currentNode === '#') {
    return null
  }

  const root = new TreeNode(currentNode)
  root.left = getRoot(arr)
  root.right = getRoot(arr)
  return root
}
