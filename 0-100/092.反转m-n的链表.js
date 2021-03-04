/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right)
  }

  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}

// 反转前 n 个节点
function reverseN(head, n) {
  let successor = null

  if (n === 1) {
    // 保存 n+1 后驱节点，用来把前n 个反转的节点和后面连接起来
    successor = head.next
    return head
  }

  const last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor

  return last
}
