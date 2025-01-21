// perfect square: 2^2 = 4 3^2 = 9 1^2 = 1
// not perfect square: 3.7416 * 3.7416 = 14

function isPerfectSquare(num) {
  let i = 1;
  while (i * i <= num) {
    if (i * i === num) return true;
    i++;
  }
  return false;
}

function isPerfectSquare(num) {
  let l = 1,
    r = num;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}
