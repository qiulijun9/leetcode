/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 思路:采用快慢指针.快指针走两步.慢指针走一步.当慢指针和快指针相遇也就是想等时就为有环.否则无环
 * 时间复杂度:O(n)
 **/

var hasCycle = function (head) {
  if (!head || !head.next) return false
  let fast = head
  let slow = head
  while (slow && fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
/**
 * @param {ListNode} head
 * @return {boolean}
 *思路:利用set 进行存储,判断是否有环
 * 时间复杂度:O(n)
 * */

var hasCycle = function (head) {
  let pre = new ListNode(0)
  pre.next = head
  let setmap = new Set()
  while (pre.next) {
    if (setmap.has(pre)) {
      return true
    }

    setmap.add(pre)
    pre = pre.next
  }
  return false
}
