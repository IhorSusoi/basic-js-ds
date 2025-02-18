const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.root = null;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let node = this.root;
    while(node.next){
      node = node.next;
    }
    node.next = newNode;
  }

  dequeue() {
    if (!this.root) {
      return null;
    }
    let nodeToRemove = this.root;
    this.root = nodeToRemove.next;
    return nodeToRemove.value;
  }
}


module.exports = {
  Queue
};
