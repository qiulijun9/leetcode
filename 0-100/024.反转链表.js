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

// 1--》2 --》3 --》4 --》5

// // 递归
// head.next 2

// 1<--2 <-- 3--》4 --》5

// head.next 3
// 1<-- 2 <-- 3 <-- 4 --》5

// head.next 4
// 1<--2 <-- 3 <-- 4 <--5

// 如果要反转3 ---4m =3, n=4
// head 之向n的前面一个 m-1

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  const last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
