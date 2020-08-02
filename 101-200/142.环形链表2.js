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
 * set 解法
 */
var detectCycle = function (head) {
  let pre = new ListNode(0)
  pre.next = head
  let set = new Set()
  while (pre.next) {
    if (set.has(pre)) {
      return pre
    }
    set.add(pre)
  }
  return null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      break
    }
  }

  if (fast !== slow) return null

  let startNode = head
  let meetNode = fast
  while (startNode !== meetNode) {
    startNode = startNode.next
    meetNode = meetNode.next
  }
  return meetNode
}
