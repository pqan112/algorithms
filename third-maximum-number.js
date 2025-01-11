/**
 * getThirdMaximunNumber0  O(n log n)
 */

function getThirdMaximumNumber0(array) {
  const sortedArray = [...array].sort((a, b) => b - a); // O(n log n)
  const arrLength = sortedArray.length;

  let firstMax = sortedArray[0];
  let secondMax = null;
  let thirdMax = null;

  if (arrLength < 3) {
    console.log("result", Math.max(...sortedArray));
    return Math.max(...sortedArray);
  }

  for (let i = 1; i < arrLength; i++) {
    if (sortedArray[i] < firstMax && secondMax === null) {
      secondMax = sortedArray[i];
    } else if (sortedArray[i] < secondMax) {
      thirdMax = sortedArray[i];
      break;
    }
  }
  console.log("result", thirdMax);
  return thirdMax;
}

getThirdMaximumNumber0([8, 4, 6, 8, 7, 5]);
getThirdMaximumNumber0([1, 2]);

/**
 * getThirdMaximunNumber1 O(n log n)
 */

function getThirdMaximumNumber1(array) {
  const cloneArray = [...array];
  const sortedArray = cloneArray.sort((a, b) => a - b); // O(n log n)
  const arrLength = sortedArray.length;

  let uniqueCount = 0;
  let previousNumber = null;

  if (arrLength < 3) {
    console.log("result", Math.max(...sortedArray));
    return Math.max(...sortedArray);
  }

  for (let i = arrLength - 1; i >= 0; i--) {
    if (sortedArray[i] !== previousNumber) {
      uniqueCount++;
      previousNumber = sortedArray[i];

      if (uniqueCount === 3) {
        console.log("result", sortedArray[i]);
        return sortedArray[i];
      }
    }
  }
}

getThirdMaximumNumber1([8, 4, 6, 8, 7, 5]);
getThirdMaximumNumber1([1, 2]);

/**
 * getThirdMaximunNumber2 O(n)
 */
function getThirdMaximumNumber2(array) {
  const cloneArray = [...array];
  const arrLength = cloneArray.length;
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  for (let i = 0; i < arrLength; i++) {
    if (cloneArray[i] > firstMax) {
      firstMax = cloneArray[i];
    }
  }

  for (let i = 0; i < arrLength; i++) {
    if (cloneArray[i] > secondMax && cloneArray[i] < firstMax) {
      secondMax = cloneArray[i];
    }
  }

  for (let i = 0; i < arrLength; i++) {
    if (cloneArray[i] > thirdMax && cloneArray[i] < secondMax) {
      thirdMax = cloneArray[i];
    }
  }

  console.log("result", thirdMax === -Infinity ? firstMax : thirdMax);
  return thirdMax === -Infinity ? firstMax : thirdMax;
}

getThirdMaximumNumber2([8, 4, 6, 8, 7, 5]);
getThirdMaximumNumber2([1, 2]);

/**
 * getThirdMaximumNumber3
 */

function getThirdMaximumNumber3(nums) {
  let third = null;
  let second = null;
  let first = null;

  for (const num of nums) {
    if (num === third || num === second || num === first) {
      continue;
    }

    if (first === null || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === null || num > second) {
      third = second;
      second = num;
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third === null ? first : third;
}

console.log(getThirdMaximumNumber3([8, 4, 6, 8, 7, 5]));
console.log(getThirdMaximumNumber3([1, 2]));
