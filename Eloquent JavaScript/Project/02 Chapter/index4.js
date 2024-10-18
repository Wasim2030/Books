/**
 * Fizz and Buzz and FizzBuzz
 */

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Fizz Buzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// }

// for (let n = 1; n <= 100; n++) {
//   let output = "";

//   if (n % 3 == 0) {
//     output += "Fizz";
//   }

//   if (n % 5 == 0) {
//     output += "Buzz";
//   }

//   console.log(output || n);
// }

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0) {
    output = output + "fizz";
  }
  if (i % 5 == 0) {
    output = output + "buzz";
  }

  console.log(output || i);
}
