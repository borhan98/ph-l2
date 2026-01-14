class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.first) {
      console.log(this.first.value);
    }

    return undefined;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("List is empty!");
      return this;
    }

    const nodeToBeRemove = this.first;

    if (this.first === this.last) {
      this.first = this.last = null;
      this.length = 0;
      return this;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    const queueList = [];
    let currentNode = this.first;

    while (currentNode !== null) {
      queueList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(queueList.join(" -> "), "-> null");
    console.log("Length is:", this.length);
  }
}

const queue = new Queue();

queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
queue.dequeue().dequeue();
queue.peek();


queue.print();