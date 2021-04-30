// 利用层序遍历
var connect = function (root) {
  if (root === null) {
    return null
  }
  const queue = []
  queue.push(root)

  while (queue.length) {
    let levelSize = queue.length
    let pre = new Node()

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      //  利用空节点 把每一层串起来
      if (i >= 1) {
        pre.next = currentNode
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      pre = currentNode
    }
  }

  return root
}
