class MyStack {
  q1 = [];
  q2 = [];

  constructor() {}

  push(x) {
    this.q2.push(x);
    while (this.q1.length) {
      this.q2.push(this.q1.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    return this.q1.shift();
  }

  top() {
    return this.q1[0];
  }

  empty() {
    return this.q1.length === 0;
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.q1);
console.log(myStack.top());
myStack.pop();
console.log(myStack.empty());
myStack.pop();
console.log(myStack.empty());
