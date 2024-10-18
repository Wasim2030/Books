console.log("hello");

let f1 = window.alert;
let f2 = window;
let f3 = prompt;
console.log(f1);
console.log(f2);
console.log(f3);

console.log("*********************");

console.log(window);
console.log(console);
console.log(console.log);

console.log(typeof window);
console.log(typeof console);
console.log(typeof console.log);

console.log("*********************");

console.log(isNaN(7));

// let i = 0;
// while (i < 10) {
//   //   console.log(i);
//   i = i + 2;
// }
// console.log(i);

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter++;

  //   console.log(result);
}

console.log(result);

// let yourName;
// do {
//   yourName = prompt("enter your name");
// } while (!yourName);
// {
//   console.log(yourName);
// }

if (false != true) {
  console.log("That makes sense");
  if (1 < 2) {
    console.log("No surprise here");
  }
}

let result1 = 1;
for (let i = 0; i < 10; i++) {
  result1 = result1 * 2;
  if ((result1 = 128)) {
    break;
  }
}
console.log(result1);
