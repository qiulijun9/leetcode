/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 哨兵 在最前面插入一个空节点
  let first = new ListNode(0)
  first.next = head
  let current = first

  while (current.next !== null) {
    if (current.next.val === val) {
      // 删除节点
      current.next = current.next.next
    } else {
      // 继续遍历
      current = current.next
    }
  }
  // 返回头节点
  return first.next
}
