const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, valueToDelete) {
  let currNode=list;
  let nextNode;
  let nodeToRemove;
  if(!currNode.next)return;
  if(currNode && currNode.value === valueToDelete) {
    nodeToRemove = currNode;
    list = currNode.next;
    nodeToRemove = null;
    currNode = list;
  }
  while (currNode && currNode.next) {
    nextNode = currNode.next;
    if (nextNode.value === valueToDelete) {
      nodeToRemove = nextNode;
      currNode.next = nextNode.next;
      nodeToRemove = null;
    } else {
      currNode = nextNode;
    }
  }
  return list;
}

module.exports = {
  removeKFromList
};
