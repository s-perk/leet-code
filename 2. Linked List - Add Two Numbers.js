/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /*
    I: two linked lists
    O: linked list representing sum of first numbers
    C:
    E:  - assume nodes contain single digit
        - assume no leading zero except zero alone
 */


  let ListNode = require('./helper.js').SinglyLinkedListNode



  var addTwoNumbers = function(l1, l2) {
    let num1 = +linkedListString(l1)
    let num2 = +linkedListString(l2)

    let sum = String(num1 + num2)
    let prevList
    let currList

    for (var i = 0; i < sum.length; i++) {

      if (prevList === undefined) {
        prevList = null
      }
      currList = new ListNode(sum[i], prevList)
      prevList = currList
    }

    return currList

  };

  // Takes in a linked list and returns a string of numbers
  const linkedListString = (linkedList) => {
      // base: linkedList === undefined
      if (linkedList === null) {
          return ''
      }

      // recursive:
      return String(linkedList.val) + linkedListString(linkedList.next)
  }

  // ==== TESTING =====
  // let ll1 = new ListNode(3)
  // let ll2 = new ListNode(4, ll1)
  // let ll3 = new ListNode(2, ll2)
  // console.log(linkedListString(ll3))

  // let ll4 = new ListNode(4)
  // let ll5 = new ListNode(6, ll4)
  // let ll6 = new ListNode(5, ll5)
  // console.log(linkedListString(ll6))



  let ll1 = new ListNode(9)
  let ll2 = new ListNode(4, ll1)
  let ll3 = new ListNode(2, ll2)
  console.log(linkedListString(ll3))

  let ll4 = new ListNode(9)
  let ll5 = new ListNode(4, ll4)
  let ll6 = new ListNode(6, ll5)
  let ll7 = new ListNode(5, ll6)
  console.log(linkedListString(ll7))

  let res = addTwoNumbers(ll3, ll7)

  console.log(linkedListString(res))