// TODO: Stateless vs Stateful

// ? Stateless
const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};
console.log(counter(3));
console.log(counter(2));

// ! Output will be : 3 and 2
// Because function doesn't hold state, it destroy values or state after complete its operation.


// ? Stateful
const counter2 = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  }
};

counter2.add(3);
counter2.add(2);

counter2.print();
// ! Output will be: 5
// Because object hold state, it doesn't destroy state or its value after complete a operation