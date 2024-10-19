const makeNoise = function () {
  console.log("boom");
  return 99;
};

makeNoise();
console.log(makeNoise());

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result = result * base;
  }
  return result;
};

console.log(power(2, 10));

function Car(brand1, model1) {
  this.brand = brand1;
  this.model = model1;

  this.drive = function () {
    console.log(this.brand + " is driving!"); // 'this' refers to the instance
  };
}

const car2 = new Car("Honda", "Civic");
console.log(car2);
console.log(typeof car2);

console.log("******************************");

for (var y = 0; y < 5; y++) {}
console.log(y);

var z = 20;
function fun1() {
  //   var z = 23;
  console.log(z);
}

fun1();
// console.log(z);

console.log("the futere says : ", future());

function future() {
  return "this is function from the future";
}

// console.log(fut());

const fut = function () {
  return "this will not work as the futute function";
};

const sq1 = (x) => {
  return x * x;
};
const sq2 = (x) => x * x;

console.log(sq1(2));
console.log(sq2(3));

/* stack overflow */
// function chicken() {
//   egg();
// }
// function egg() {
//   chicken();
// }

// console.log(chicken() + " comes first");

function name1(n1, n2, n3) {
  return `this is ${n1} ${n2} ${n3}`;
}

console.log(name1("one"));

function name1(n1) {
  return `this is ${n1} `;
}

console.log(name1("one", "two"));

console.log("******************************");

function wrapValue(n) {
  let local = n;
  console.log("dum");
  //   return () => local;
  return local;
}

let wrap1 = wrapValue(1);
console.log(wrapValue(8));
let wrap2 = wrapValue(2);

console.log(wrap1);
console.log(wrap2);
console.log(wrapValue(3));

function wrapValue1(n) {
  let local = n;
  return () => local;
}

let wrap3 = wrapValue1(1);
let wrap4 = wrapValue1(2);

console.log(wrap3);
console.log(wrap4);

console.log(wrap3());
console.log(wrap4());

// console.log(wrapValue1(8));
// console.log(wrapValue1(3));

function multiplier(factor) {
  return (num) => num * factor;
}

let twice = multiplier(2);
let thrice = multiplier(3);

console.log(twice);
console.log(twice(5));

console.log(thrice);
console.log(thrice(5));
