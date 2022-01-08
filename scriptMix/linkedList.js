'use strict';
// Linked list (связный список)
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // O(1)
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    // O(1)
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) this.tail = newNode;

    return this;
  }

  find(value) {
    // O(n)
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    // O(n)
    if (!this.head) return null;

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) this.tail = currentNode;

    return deletedNode;
  }

  insertAfter(value, prev) {
    // O(n)
    const newNode = new LinkedListNode(value);

    const prevNode = this.find(prev);
    if (prevNode === null) return this;

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray()
      .map(node => node.toString())
      .toString();
  }
}

const initList = new LinkedList();

const list = initList.append('a').append('b').append('c').append('d');
console.log('init array abcd: ', list.toArray());
console.log('init abcd: ', list.toString());

//prepend
list.prepend('d');
console.log('prepend d: ', list.toString());

//find
console.log('find c: ', list.find('c'));
console.log('find r: ', list.find('r'));

// delete
console.log('deleted d: ', list.delete('d'));
console.log('after delete d: ', list.toString());

//insertAfter in middle
list.insertAfter('k', 'b');
console.log('insert in middle: ', list.toString());
//insertAfter to end
list.insertAfter('l', 'c');
console.log('insert to end: ', list.toString());
