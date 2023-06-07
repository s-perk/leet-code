/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


/*
  I: head of linked list
  O: head of linked list (reversed)
  C:
  E:

  Strategy:
    - maintain prev, curr, and next nodes
    - just set curr.next = prev, and continue until you reach end
*/
var reverseList = function(head) {

  let next = null
  let curr = head
  let prev = null

  while (curr) {
      next = curr.next
      curr.next = prev // set to previous

      prev = curr // set new node to previous (for next iteration)
      curr = next
  }

  return prev
};


