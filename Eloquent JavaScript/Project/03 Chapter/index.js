const square = function(x) {
    return x*x
}

// console.log(square(13))

const makeNoise = function() {
    console.log("Pling!")
}

// console.log(makeNoise())

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result = result*base
    }
    return result;
}

// console.log(power(2, 4))

let x = 10;
if(true) {
    let y = 20;
    var z = 30;
    // console.log(x+y+z)
    // console.log(y+z)
    // console.log(x+z)
}

// console.log(x+z)
// console.log(x+y+z)
// console.log(x+y)

let funcValue = function() {
    console.log("hello")
    return 2
}

// console.log(funcValue())

let newfunc = function(callIt) {
    console.log(callIt)
    console.log(callIt*8)
}

// newfunc(funcValue())

// console.log("The future says: " , future())

function future(){
    return "you'll have flying cars"
}

// console.log("The future says: " , future())

function chicken() {
    return egg()
}

function egg() {
    return chicken()
}

// console.log(chicken() + " came first")

function optionalArg(a,b) {
    console.log(a)
    console.log(b)
}

// // optionalArg(4,3)
// optionalArg(4,3, 4, 5,9)

function optionalArg1(a,b,x,y) {
    console.log(a)
    console.log(b)
    console.log(x)
    console.log(y)
}

// optionalArg1(1,3)

function optionalArg2(a,b,x=99,y=999) {
    console.log(a)
    console.log(b)
    console.log(x)
    console.log(y)
}

// // optionalArg2()
// optionalArg2(2,4,8)

function multiplier(factor) {
    return number => number *factor
} 

let twice = multiplier(2)
console.log(twice(3))