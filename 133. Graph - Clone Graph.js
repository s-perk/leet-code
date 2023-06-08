/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

/*
  Given a reference of a node in a connected undirected graph.

  Return a deep copy (clone) of the graph.


  I: 1. Graph node
  O: 2. clone of original graph node
  C: No duplicate values?
  E:

  Strategy:
    - use Map data type in Javascript
    - recurse through and create copies
    - mark each visited value with 'visited' when complete
*/
var cloneGraph = function(node) {

  if (node === null) { return null }

  let map = new Map()

  // I: root node
  // O: node
  let recursion = (node) => {

    // If we haven't saved value yet in map, save now
    if (!map.has(node.val)) {
      map.set(node.val, new Node(node.val))

      // use array.map() function to recursively set neihbors
      map.get(node.val).neighbors = node.neighbors.map(recursion)
    }
    return map.get(node.val)


  }
  recursion(node)

  return map.get(node.val)

};


// ==== TESTING ====
const Node = require('./helper.js').GraphNode

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node3, node1]

console.log(cloneGraph(node1))