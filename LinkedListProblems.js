function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function solution(l) {
  let node = l
  let array = []

  while (node) {
      array.push(node.value)
      node = node.next
  }

  // split into array
  let string = array.join('')
  let stringReverse = array.reverse().join('')

  // Compare
  if (string === stringReverse) {
      return true
  } else {
      return false
  }
}
