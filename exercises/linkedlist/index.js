// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, node = null) {
    this.data = value;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
   let count = 0;
   let node = this.head;

   while(node) {
    count++;
    node = node.next;
   }

   return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    while(lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(this.head) {
      let node = this.head.next;
      this.head = node;
    }
  }

  removeLast() {
    if(!this.head) {
      return
    }
    if(!this.head.next){
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const node = new Node(data, null);

    if(!this.head) {
      this.head = node;
    } else {

      let current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    // if(this.head) {
    //   let last = this.getLast();
    //   last.next = node;
    // } else {
    //   this.head = node;
    // }
  }

  getAt(val) {
    let ind = 0;
    let node = this.head;

    while(node) {
      if(ind === val) {
        return node;
      }
      ind++;
      node = node.next;
    }
    return null;
  }

  removeAt(ind) {
    if(this.size()) {
      if(ind === 0) {
        const node = this.head.next;
        this.head = node;
      } else {
        const prevNode = this.getAt(ind-1);
        const nextNode = this.getAt(ind+1);
        if(prevNode){
          prevNode.next = nextNode;
        }
      }
    }
  }

  insertAt(data, ind) {
    if(ind === 0) {
      const node = this.head;
      this.head = new Node(data, node);
    } else {
        if(ind >= this.size()) {
          this.getAt(this.size()-1).next = new Node(data, null);
        } else {
          const prevNode = this.getAt(ind-1);
          if(prevNode) {
            const node = prevNode.next;
            prevNode.next = new Node(data, node);
          }
        }
    }
  }

  forEach(fn) {
    //loop through linked list
      //foreach node cal fn with node, ind

    let node = this.head;
    let ind = 0;

    while(node) {
      fn(node, ind);
      node = node.next;
      ind++;
    }
  }
}


module.exports = { Node, LinkedList };
