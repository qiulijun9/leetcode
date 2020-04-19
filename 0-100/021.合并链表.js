//将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newListNode = new  ListNode(-1);
  let  poniter = newListNode;
  while(l1 && l2){
    if(l1 .val < l2.val){
      poniter.next = l1;
      l1 = l1.next;
      poniter = poniter.next;
    }else{
      poniter.next = l2;
      l2 = l2.next;
      poniter = poniter.next;
    }     
  }
  if(l1 === null){ poniter.next = l2 }
  if(l2 === null){ poniter.next = l1 }
  return newListNode.next;
};


var mergeTwoLists2 = function(l1, l2) {
        
  if (!l1 )  return l2;
  if (!l2 )  return l1;

  if (l1.val < l2.val) {
      l1.next = mergeTwoLists2(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists2(l1, l2.next);
      return l2;
  }

};
       
