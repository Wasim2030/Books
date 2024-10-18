console.log(Infinity);
console.log(-Infinity);

console.log(Infinity - 1);

let inf = Infinity - 1;
console.log("type of inf is ", typeof inf);

console.log(NaN);
console.log(typeof NaN);

// NaN is a Special number and its data type is number
// examples of NaN
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(typeof Infinity - Infinity);

console.log("*************");
console.log(NaN == NaN);
console.log(Infinity == Infinity);
console.log(Infinity - Infinity == Infinity - Infinity);
console.log(Infinity - Infinity);
console.log(Infinity - 90);

console.log("*************");
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

console.log(null);
console.log(undefined);
console.log(11111);
console.log("string");
console.log(false);

console.log("*************");

let a = null;
console.log(0 == false);
console.log("" == false);
console.log(NaN == false); // ????
console.log(a == false); // ????
console.log(0 / 0 == false); // ????

console.log(false == false);
console.log(0 == false);
console.log(-0 == false);
console.log("" == false);
console.log(null == false);
console.log(undefined == false);
console.log(NaN == false);

console.log("**************************");
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

console.log(Boolean("")); // false

console.log("**************************");
console.log(Boolean("a")); // false
