const preOrder = (node) => {
  if (node === null) { return; }
  console.log(node.val) // evaluate parent at beginning
  preOrder(node.left)
  preOrder(node.right)
}

const inOrder = (node) => {
  if (node === null) { return; }
  inOrder(node.left)
  console.log(node.val) // evaluate parent in middle
  inOrder(node.right)
}

const postOrder = (node) => {
  if (node === null) { return; }
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.val)  // evaluate parent at the end
}

/* === TESTING ===
                  A
            /         \
          B           C
        /   \       /   \
      D     E      F     G
    /   \         /  \    \
  H     I       J     K    L
*/

const TreeNode = require('./helper.js').BinaryTreeNode

let nodeL = new TreeNode('L')
let nodeK = new TreeNode('K')
let nodeJ = new TreeNode('J')
let nodeI = new TreeNode('I')
let nodeH = new TreeNode('H')
let nodeG = new TreeNode('G', null, nodeL)
let nodeF = new TreeNode('F', nodeJ, nodeK)
let nodeE = new TreeNode('E')
let nodeD = new TreeNode('D', nodeH, nodeI)
let nodeC = new TreeNode('C', nodeF, nodeG)
let nodeB = new TreeNode('B', nodeD, nodeE)
let nodeA = new TreeNode('A', nodeB, nodeC)


/* === TESTING ===
                11
            /         \
          6           15
        /   \       /    \
      3     8      13     17
    /   \         /  \      \
  1     5       12     14    19
*/

let node19 = new TreeNode(19)
let node14 = new TreeNode(14)
let node12 = new TreeNode(12)
let node5 = new TreeNode(5)
let node1 = new TreeNode(1)
let node17 = new TreeNode(17, null, node19)
let node13 = new TreeNode(13, node12, node14)
let node8 = new TreeNode(8)
let node3 = new TreeNode(3, node1, node5)
let node15 = new TreeNode(15, node13, node17)
let node6 = new TreeNode(6, node3, node8)
let node11 = new TreeNode(11, node6, node15)



//preOrder(nodeA)

inOrder(node11)



