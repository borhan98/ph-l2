//* Array Implementation
class Queue {
  constructor() {
    this.items = [];
  }

  // o(1)
  enqueue(val) {
    this.items.push(val);
  }

  // 0(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  // o(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // o(n)
  print() {
    console.log("start => ", this.items.join(" => "), "End =>");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();