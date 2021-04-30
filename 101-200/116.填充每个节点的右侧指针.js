/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/** 把每一层的节点连接起来
 * @param {Node} root
 * @return {Node}
 */

var connect = function (root) {
  if (root === null) {
    return null
  }
  helper(root.left, root.right)

  return root
}

function helper(node1, node2) {
  if (node1 === null || node2 === null) {
    return null
  }
  node1.next = node2

  // 连接同节点的右侧指针
  helper(node1.left, node1.right)
  helper(node2.left, node2.right)
  // 连接不同节点的右侧指针
  helper(node1.right, node2.left)
}

var connect = function (root) {
  if (root === null) {
    return null
  }
  helper(root.left, root.right)
  return root
}

function helper(node1, node2) {
  if (node1 === null || node2 === null) {
    return null
  }
  node1.next = node2
  node2.next = null

  helper(node1.left, node1.right)
  helper(node2.left, node2.right)
  helper(node1.right, node2.right)
}
