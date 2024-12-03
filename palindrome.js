// aaBAA -> AABaa -> Palindrome
// aaBAc -> cABaa -> is not palindrome

function isPalindrome(str) {
  // const newStr = str.toLowerCase();
  // const reversedString = newStr.split("").reverse().join("");
  // return newStr === reversedString;
  const newStr = str.toLowerCase();

  let reversedStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }
  return newStr === reversedStr;
}

console.log(isPalindrome("aaBAA"));
console.log(isPalindrome("cABaa"));
