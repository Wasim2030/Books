// for (let line = "#"; line.length < 8; line += "#") {
//   console.log(line);
// }

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  //   console.log(i);
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br />");
}
