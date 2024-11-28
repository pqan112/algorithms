function bubbleSort(array) {
  const arr = [...array];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      let cur = arr[j];
      let next = arr[j + 1];
      if (cur > next) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999];
console.log(bubbleSort(arr));
