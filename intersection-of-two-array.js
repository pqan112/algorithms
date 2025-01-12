const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

function a(nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      return nums1[i];
    }
  }
}

console.log(a(nums1, nums2));

// TODO: C2
function a2(nums1, nums2) {}

console.log(a2(nums1, nums2));
