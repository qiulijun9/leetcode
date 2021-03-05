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
 * 思路:
 *  1. 需要反转链表的方法,返回头和尾
 *  2. 定义一个额外的变量,存链表的head
 *  3. 反转k个范围的链表,记录返回的头和尾.以tail的next.为了让反转好的链表指向下一组反转的
 */

function reverseNodeList(head, tail) {
  // 1--2--3--4--5
  let prev = null
  let current = head
  while (prev !== tail) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return [tail, head]
}

var reverseKGroup = function (head, k) {
  const hair = new ListNode(0)
  hair.next = head
  let pre = hair

  while (head) {
    let tail = pre
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }
    const nex = tail.next
    ;[head, tail] = reverseNodeList(head, tail)
    // 把子链表重新接回原链表
    pre.next = head
    tail.next = nex
    pre = tail
    head = tail.next
  }
  return hair.next
}

//  首先是反转链表
function reverseList(head) {
  let current = head
  let pre = null

  while (current !== null) {
    const temp = current.next
    current.next = pre
    pre = current
    current = temp
  }

  return pre
}

// 再反转区间的链表  只需要结束条件改成 b
function reserver(a, b) {
  let pre = null
  let current = a

  while (current !== b) {
    const next = current.next
    current.next = pre
    pre = current
    current = next
  }
  // 反转后的链表
  return pre
}

function reverseKGroup(head, k) {
  if (head === null) {
    return null
  }
  // 拆分成反转 head 和 剩余数组的子问题

  let a = head
  let b = head

  for (let i = 0; i < k; i++) {
    if (b === null) {
      return head
    }
    // 让b 指向k 之后的那个链表
    b = b.next
  }

  let newHead = reserver(a, b)
  // 再让已经反转的和后面的链表连起来
  a.next = reverseKGroup(b, k)

  return newHead
}
