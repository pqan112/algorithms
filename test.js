for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // khi i = 3 -> continue thì sẽ bỏ qua phần code còn lại của vòng lặp -> không log ra số 3
  }
  console.log(i);
}
// Skips the rest of the current iteration and moves to the next iteration of the loop.
// Output: 1, 2, 4, 5

// Terminates the loop or switch immediately.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // khi i = 3 -> return thì nghỉ luôn
  }
  console.log(i);
}
// Output: 1, 2

// Stops the function execution and optionally passes a value back to the caller.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    return; // khi i = 3 -> return thì nghỉ luôn
  }
  console.log(i);
}
// Output: 1, 2
