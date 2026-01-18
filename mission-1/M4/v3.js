class Stack {
  constructor() {
    this.items = [];
  }

  // o(1)
  push(val) {
    this.items.push(val);
  }

  // o(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.pop();
  }

  // o(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  // o(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // o(n)
  print() {
    console.log(this.items.slice().reverse().join(" -> "));
  }
}


//* Problem statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//    Open brackets must be closed by the same type brackets.
//    Open brackets must be closed in the correct order.
//    Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//?"()[]{}" => true
//? "([{}])" => true
//?"(]" => false
//?"(()" => false

const bracketChecker = (stringBracket) => {
  const stack = new Stack();

  const expectedBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  for (let i = 0; i < stringBracket.length; i++) {
    let bracket = stringBracket[i];

    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else if (bracket === ")" || bracket === "}" || bracket === "]") {
      if (stack.isEmpty()) {
        return false;
      }

      if(stack.pop() !== expectedBracket[bracket]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(bracketChecker("([{}])"));
console.log(bracketChecker("(])"));