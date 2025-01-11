for (let i = 1; i <= 5; i++) {
  // if (i === 3) {
  //   console.log(i);
  //   continue; // Bỏ qua i = 3
  // }
  if (i === 4) {
    console.log(i);
    break; // Thoát khỏi vòng lặp khi i = 4
  }
  if (i === 5) {
    console.log(i);
    continue; // Thoát khỏi vòng lặp khi i = 4
  }
  console.log(i); // In ra các giá trị: 1, 2
}
// Output: 1, 2
