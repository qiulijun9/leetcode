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
var reverseKGroup = function (head, k) {}

function reverseNodeList(head) {
  let pre = null
  let current = head
  while (current) {
    let temp = current.next
    current.next = pre
    pre = current
    current = temp
  }
  return pre
}
