class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Append is like the push() method in js array.
  */
  append(val) {
    const newNode = new Node(val);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Prepend is like the unshift() method in js array.
  */
  prepend(val) {
    const newNode = new Node(val);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Insert method will insert new item anywhere into the list.
  */
  insert(index, val) {
    // check the index number is valid or not
    if (index < 0 || index > this.length) {
      console.log("Index is out of bound. Failed to insert!");
      return undefined;
    }

    // check if the insert position is in the start (head) of the list
    if (index === 0) {
      return this.prepend(val);
    }

    // check if the insert position is in the end (tail) of the list
    if (index === this.length) {
      return this.append(val);
    }

    // find out the leading(previous) node
    const leadingNode = this._traverseToIndex(index - 1);

    const newNode = new Node(val);
    newNode.next = leadingNode.next;
    leadingNode.next = newNode;
    this.length++;
    return this;
  }

  /**
   * Remove method to remove a node from the list
  */
  remove(index) {
    // check the index number is valid or not
    if (index < 0 || index >= this.length) {
      console.log("Index is out of bound. Failed to remove!");
      return undefined;
    }

    // if want to remove head (first node)
    if (index === 0) {

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
      }

      this.head = this.head.next;
      this.length--;
      return this;
    }

    // get leadingNode and the nodeToBeRemove
    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToBeRemove = leadingNode.next;

    // if want to remove tail (last node)
    if (nodeToBeRemove.next === null) {
      leadingNode.next = null;
      this.tail = leadingNode;
      this.length--;
      return this;
    }

    // it will remove from anywhere from the linkedList if others condition not matched
    leadingNode.next = nodeToBeRemove.next;
    this.length--;
    return this;
  }

  // reusable private helper method to traverse index
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  // Print method
  print() {
    const linkedListArr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(linkedListArr.join(" -> "), "-> null");
  }
}


const linkedList = new LinkedList();

// use append method
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
linkedList.append(1).append(2).append(3).append(4);

// use prepend method
// linkedList.prepend(10);
// linkedList.prepend(20);
// linkedList.prepend(30);
// linkedList.prepend(40);
linkedList.prepend(10).prepend(20).prepend(30).prepend(40);

// use insert method
// linkedList.insert(3, 100);
// linkedList.insert(4, 200);
// linkedList.insert(20, 500);
linkedList.insert(3, 100).insert(4, 200).insert(0, 300).insert(20, 500);

// remove a node
// linkedList.remove(2);
// linkedList.remove(0);
// linkedList.remove(20);
linkedList.remove(2).remove(0).remove(20);

linkedList.print();