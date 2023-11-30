/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

    } else {

      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {

      newNode.next = this.head;
      this.head = newNode;

    }
    this.length++;

  }

  /** pop(): return & remove last item. */
  pop() {
    if (this.length === 0) return undefined; // Return undefined when the list is empty

    let removedValue;
    if (this.length === 1) {
      removedValue = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      removedValue = currentNode.val;
      previousNode.next = null;
      this.tail = previousNode;
    }

    this.length--;
    return removedValue;
  }


  /** shift(): return & remove first item. */

  shift() {

    if (this.length === 0) return undefined;

    let currentNode = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {

      this.head=this.head.next
        }
        this.length--

    return currentNode;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined; // Return undefined for invalid index
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.val;
  }




  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx < 0 || idx >= this.length) {
      return undefined; // Return undefined for invalid index
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    currentNode.val=val
    return currentNode.val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false; // Return undefined for invalid index
    }
    const newNode = new Node(val);
    if (idx === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let currentIndex = 0;

      while (currentIndex < idx) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      newNode.next = currentNode;
      prevNode.next = newNode;

  }
  this.length++; // Increment the length after successful insertion
    return true;
}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length

  }
}

module.exports = LinkedList;


