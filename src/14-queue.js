const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(x) {
    if (this.len === 0) {
      this.tail = new ListNode();
      this.head = this.tail;
    } else {
      this.head.next = new ListNode();
      this.head = this.head.next;
    }
    this.head.value = x;
    this.len++;
  }

  dequeue() {
    if (this.len === 0) return null;
    const x = this.tail.value;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.next;
    }
    this.len--;
    return x;
  }
}

module.exports = Queue;
