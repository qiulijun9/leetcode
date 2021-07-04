/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 利用递归：
 * 如果 l1 < l2 return l1 ,在此之前确定l1.next
 *  如果 12 <11 return l2 ,在此之前确定l2.next
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
