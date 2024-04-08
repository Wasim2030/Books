let total = 0;
let count = 1;

while (count <= 10) {
  total = total + count;
  count = count + 1;
  // count++;
}
// console.log(total);
// console.log(count);   // why the result of count is 11 ??

// console.log(sum(range(1,10))) // if range and sum is defined

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));
