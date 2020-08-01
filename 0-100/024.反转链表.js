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
 * 思路:让当前链表的next 指向上一个节点
 */
var reverseList = function (head) {
  let pre = null
  let current = head // 当前链表
  while (current) {
    let temp = current.next
    current.next = pre // 当前链表的next 指向上一个
    pre = current
    current = temp //链表往后移
  }
  return pre
}

// var reverseList = function (head) {
//   ;[pre, current] = [null, head] // 当前链表
//   while (current) {
//     ;[current.next, pre, current] = [pre, current, current.next]
//   }
//   return pre
// }
