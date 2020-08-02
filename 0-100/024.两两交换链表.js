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
 * 思路 :定义一个前驱节点,以及需要交换的两个节点,交换这个两个节点,并调整前驱节点的next指向,指向下一个要交换的节点
 */
var swapPairs = function (head) {
  let pre = new ListNode(0)
  pre.next = head
  let self = pre
  while (pre.next && pre.next.next) {
    let a = pre.next
    let b = a.next
    pre.next = b
    a.next = b.next
    b.next = a
    pre = a
  }
  return self.next
}
