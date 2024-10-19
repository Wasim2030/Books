console.log("wasim"[0]);

let name1 = "akhter";
console.log(name1[3]);
console.log(name1[name1.length - 1]);

function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  return count;
}

console.log(countBs("ASim"));
console.log(countBs("WASim AKHter"));

function countChar(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count = count + 1;
  }
  return count;
}

console.log(countChar("wsim"));
console.log(countChar("wasimakhter"));

function countChar1(str, chr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == chr) {
      count++;
    }
  }
  return count;
}

console.log(countChar1("WASiMM", "M"));
