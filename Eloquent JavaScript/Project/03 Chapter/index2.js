/**
 * RECURSION
 */

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

/**
function power(base, exponent) {
  return base * power(base, exponent - 1);
}

console.log(power(2, 3));
*/

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} +5)`) ||
        find(current * 3, `(${history}*3)`)
      );
    }
  }
  //   return find(24, "1000");
  //   return find(25, "1");
  return find(1, "1");
}

console.log(findSolution(24)); // output : (((1*3) +5)*3)
console.log(findSolution(13)); // output : (((1*3) +5) +5)

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(8, 99));
console.log(min(89, 9));

function isEven(n) {
  if (n == 0) {
    return "even";
  } else if (n == 1) {
    return "odd";
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(77));
console.log(isEven(58));
console.log(isEven(-1));
console.log(isEven(-9));
console.log(isEven(-12));
