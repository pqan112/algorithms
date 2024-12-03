function reverseArray(array) {
  let result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
}

function _reverseArray(array) {
  for (let index = 0; index < array.length / 2; i++) {
    [array[index], array[array.length - 1 - index]] = [
      array[array.length - 1 - index],
      array[index],
    ];
  }

  return array;
}

console.log(_reverseArray([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]
// [5, 2, 3, 4, 1]
// [5, 4, 3, 2, 1]
