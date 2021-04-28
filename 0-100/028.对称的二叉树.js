var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  return helper(root.left, root.right)
}

function helper(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) {
    return true
  }

  if (
    leftNode === null ||
    rightNode === null ||
    leftNode.val !== rightNode.val
  ) {
    return false
  }
  return (
    helper(leftNode.left, rightNode.right) &&
    helper(leftNode.right, rightNode.left)
  )
}

var isSymmetric = function (root) {
  let queue = []
  if (root === null) {
    return true
  }
  queue.push(root.left)
  queue.push(root.right)

  while (queue.length) {
    const leftNode = queue.shift()
    const rightNode = queue.shift()

    if (leftNode === null && rightNode === null) {
      continue
    }

    if (
      leftNode === null ||
      rightNode === null ||
      leftNode.val !== rightNode.val
    ) {
      return false
    }

    queue.push(leftNode.left)
    queue.push(rightNode.right)

    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }
  return true
}
