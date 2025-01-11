function reverseString(s) {
  const length = s.length;
  let left = 0;
  let right = length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}

// loop each element once -> time complexity: O(n)
// because reverse in-place and do not create new array -> space complexity: O(1)

console.log(reverseString(["h", "e", "l", "l", "o"]));

function reverseString1(s) {}

// recursion
console.log(reverseString1(["h", "e", "l", "l", "o"]));
