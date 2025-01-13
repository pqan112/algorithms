function a(array) {
  const len = array.length;
  for (let i = 1; i < len; i++) {
    array[i] += array[i - 1];
  }
  return array;
}

// time complexity: O(n)
// space complexity: O(1)
console.log(a([1, 1, 1, 1, 1]));
console.log(a([3, 1, 2, 10, 1]));
