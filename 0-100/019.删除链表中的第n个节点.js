/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 哨兵节点 在头节点前插入   最后返回fist.next
  const first = new ListNode(0)
  // 快慢指针
  let slow = first
  let fast = first
  first.next = head

  // 让快指针比慢指针快n 个节点
  while (n--) {
    console.log(9999)
    fast = fast.next
  }

  // 当快指针指到null时 ，slow 的下一个便是要删除的节点，直接删除slow.next = slow.next.next
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
    console.log(fast, slow)
  }
  slow.next = slow.next.next

  return first.next
}
