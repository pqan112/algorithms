// time complexity: sort() -> O(nlogn)
// space complexity: O(logn)

function isAnagram(s, t) {
  const reverseArr = s.split("").sort();
  const targetArr = t.split("").sort();
  const maxLength = s.length;
  if (s.length !== t.length) return false;

  for (let i = 0; i < maxLength; i++) {
    if (reverseArr[i] !== targetArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

function isAnagram2(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    map.set(charS, (map.get(charS) || 0) + 1);
    map.set(charT, (map.get(charT) || 0) - 1);
  }

  for (let count of map.values()) {
    if (count !== 0) return false;
  }

  return true;
}

console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("rat", "car"));
