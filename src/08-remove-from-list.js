/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function nextNotK(xs, k) {
  if (xs.next === null) return null;
  if (xs.next.value === k) return xs.next.next;
  return xs.next;
}

function removeKFromList(xs, k) {
  let head = xs;
  while (head !== null && head.value === k) {
    head = head.next;
  }
  if (head === null) return null;

  let next = head;

  while (next !== null) {
    next.next = nextNotK(next, k);
    next = next.next;
  }

  return head;
}

module.exports = removeKFromList;
