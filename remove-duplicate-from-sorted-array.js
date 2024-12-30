var removeDuplicates = function (nums) {
  var len = nums.length;
  var last = nums[0];
  var count = 1;

  // len === 0 -> mảng có 0 phần tử
  // len === 1 -> mảng có 1 phần tử
  if (len === 0 || len === 1) {
    return len;
  }

  for (var i = 1; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
