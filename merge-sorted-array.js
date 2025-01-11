function mergeSortedArray(array1, m, array2, n) {
  array1.splice(m, n, ...array2);
  return array1.sort();
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function mergeSortedArray1(array1, m, array2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && array1[i] > array2[j]) {
      array1[k] = array1[i];
      i--;
    } else {
      array1[k] = array2[j];
      j--;
    }
    k--;
  }
  return array1;
}

console.log(mergeSortedArray1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
