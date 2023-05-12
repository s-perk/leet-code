/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
  I: two linked list head nodes
  O: node of a merged linked list
  C:
  E:

  Strategy:
    - while loop through each linked list until no more nodes
    - compare values and insert into new linked list
*/
var mergeTwoLists = function(list1, list2) {
  let prev = null
  let head = null
  let curr = null

  while ((list1) || (list2)) {
    curr = new ListNode()


    // If we've already made it through one list, then we can just set current equal to the remaining values in a list

    if (list1 === null) {
      curr = list2
      list2 = null

    } else if (list2 === null) {
      curr = list1
      list1 = null

    } else if (list1.val <= list2.val) { // Otherwise set current node value equal to lower value
      curr.val = list1.val
      list1 = list1.next
    } else {
      curr.val = list2.val
      list2 = list2.next
    }

    // set up for next iteration
    if (prev === null) {
      head = curr // save our head for the first iteration
    } else {
      prev.next = curr
    }

    prev = curr
    curr = curr.next
  }

  return head
};


// ==== TESTING ====
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
console.log(mergeTwoLists(list1, list2))