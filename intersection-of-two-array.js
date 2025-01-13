const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];

function a(nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }

  // let j = 0;
  // let previous;
  // while (j < result.length) {
  //   if (previous === result[j]) {
  //     result.pop(result[j]);
  //   }
  //   previous = result[j];
  //   j++;
  // }
  // return result;

  return [...new Set(result)];
}

console.log(a(nums1, nums2));
console.log(a(nums3, nums4));

// // TODO: C2
// function a2(nums1, nums2) {}

// console.log(a2(nums1, nums2));
