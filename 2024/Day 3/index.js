const fs = require('fs');

const inputFile = fs.readFileSync('input.txt', 'utf-8');


// Part 1

let result = 0

const x = [...(inputFile).matchAll(/(?:mul\((\d{1,3}),(\d{1,3})\))+?/g)]

x.map((val) => {
  result = result + (val[1] * val[2])
})

// console.log(result)

// ---------------------------------------------------- //

// Part 2

let sum = 0
let isValid = true

const z = [...(inputFile).matchAll(/(?:mul\((\d{1,3}),(\d{1,3})\))+?|(do\(\))|(don't\(\))/g)];

z.map((val) => {
  if (val[0] == "do()") {
      isValid = true;
  } else if (val[0] == "don't()") {
      isValid = false;
  } else if (isValid) {
      sum = sum + (val[1] * val[2]);
  }
})

console.log(sum);