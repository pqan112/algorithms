class MyArray {
  length = 0;
  data = {};

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  getAll() {
    return this.data;
  }

  get(index) {
    return this.data[index];
  }
}

const myArr = new MyArray();
myArr.push("batman");
myArr.push("superman");
myArr.push("iron man");
myArr.push("cyborg");
console.log(myArr.data);
console.log(myArr.getAll());
console.log(myArr.pop());
console.log(myArr.getAll());
console.log(myArr.get(0));
console.log(myArr.get(1));
