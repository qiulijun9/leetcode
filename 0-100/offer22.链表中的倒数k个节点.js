/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  // 快指针先走 k 步， 然后再让快慢指针同时走，当fast 到终点时，slow 的位置就是倒数k的位置

  let fast = head
  let slow = head

  while (k-- > 0) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
