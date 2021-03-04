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
var reverseList = function (head) {
  let current = head
  let pre = null
  while (current) {
    current.next = pre
    pre = current
    current = current.next
  }
  return pre
}

// 1--> 2 -->3 -->4 -->5

//  递归第一次
//                 head head.next
// 1--> 2 --> 3--> 4 <--5 -->null

// 递归第二次
// 1--> 2 --> 3 <-- 4 <--5 -->null

// 递归第三次
// 1--> 2 <-- 3 <-- 4 <--5 -->null

// 递归第四次
// 1<-- 2 <-- 3 <-- 4 <--5 -->null

// 如果要反转3 ---4m =3, n=4
// head 之向n的前面一个 m-1

var reverseList = function (head) {
  // 拆解成 头节点和子问题
  if (head === null || head.next === null) {
    return head
  }

  // 子链表问题
  const last = reverseList(head.next)
  // 头节点
  head.next.next = head
  head.next = null
  return last
}
