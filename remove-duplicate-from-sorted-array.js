const { i } = require("framer-motion/client");

const removeDuplicates1 = (nums) => {
  const len = nums.length;
  let last = nums[0]; // gán số ở vị trí đầu mảng cho last
  let count = 1; // vì set last là vị trí đầu mảng rồi nên không check số tại index = 0

  // len === 0 -> mảng có 0 phần tử
  // len === 1 -> mảng có 1 phần tử
  if (len === 0 || len === 1) {
    return len;
  }

  for (let i = 1; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeDuplicates1([1, 1, 2]));
console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const removeDuplicates2 = (nums) => {
  const len = nums.length;
  if (len === 0 || len === 1) {
    return len;
  }

  let count = 1;
  let j = 1;
  while (j < len) {
    if (nums[j] !== nums[j - 1]) {
      nums[count] = nums[j];
      count++;
    }
    j++;
  }

  return count;
};

console.log(removeDuplicates2([1, 1, 2]));
console.log(removeDuplicates2([0, 1, 2, 1, 1, 2, 2, 3, 3, 4]));
