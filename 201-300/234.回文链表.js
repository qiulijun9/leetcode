/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 找到 中心  快慢指针
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 比较以 中心分开的两个链表是否相等  中心扩散法  判断对称的值是否相等
  let left = head
  let right = reserver(slow)

  while (right !== null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}

// 反转链表
function reserver(head) {
  let current = head
  let pre = null

  while (current !== null) {
    const next = current.next
    current.next = pre
    pre = current
    current = next
  }
  return pre
}
