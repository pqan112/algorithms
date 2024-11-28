// arr [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]
// low = 0; high = arr.length - 1; value= 37
// mid = 23; value = 37 -> 37 > 23
// [29,31,37,41,43,47,53,59]
// value = 37; mid = 41 -> 41 > 37
// [29,31,37]
// mid = 31, value = 37
// value = 37 -> found

function binarySearch(list, target) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    const midValue = list[midIndex];
    if (midValue === target) return midIndex;

    if (midValue > target) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }

  throw Error("Not found");
}

// console.log(
//   binarySearch([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 0)
// );
console.log(
  binarySearch([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 31)
);
