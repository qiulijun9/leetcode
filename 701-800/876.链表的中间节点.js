/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head
  let slow = head
  // 当快指针走到终点时，慢指针的位置就是中点， 为奇数时，正好为中点，为偶数时 为中间偏右
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
