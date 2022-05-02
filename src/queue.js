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

  constructor() {
    this.head = null
    this.next = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const el = new ListNode(value);
    if(!this.head){
      this.head = el
      this.next = el
    }else{
      this.next.next = el
      this.next = el
    }
  }

  dequeue() {
    if(!this.head){
      return null
    }
    const res = this.head.value
    this.head = this.head.next;
    return res
  }
}

module.exports = {
  Queue
};
