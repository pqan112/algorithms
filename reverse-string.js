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
function reverseString1(s) {
  reverse(s, 0, s.length - 1);

  return s;
}

function reverse(s, l, r) {
  if (l >= r) {
    return;
  }

  let temp = s[l];
  s[l] = s[r];
  s[r] = temp;

  reverse(s, l + 1, r - 1);
}
// time complexity -> O(n)
// space complexity: In the loop, each element is processed recursively, causing a function to be pushed onto the call stack. Once the function completes, it is popped from the call stack. Since the recursion is called for n elements, the space complexity is O(n).

console.log(reverseString1(["h", "e", "l", "l", "o"]));

function reverseString2(s) {
  const stack = [];

  // Push each character of the array onto the stack
  for (const char of s) {
    stack.push(char);
  }

  // Pop characters from the stack and put them back into the array
  let i = 0;
  while (stack.length > 0) {
    s[i++] = stack.pop();
  }

  return s;
}

console.log(reverseString2(["h", "e", "l", "l", "o"]));
