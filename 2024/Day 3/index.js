const fs = require('fs');

const inputFile = fs.readFileSync('input.txt', 'utf-8');


// Part 1

let result = 0

const x = [...(inputFile).matchAll(/(?:mul\((\d{1,3}),(\d{1,3})\))+?/g)]

x.map((val) => {
  result = result + (val[1] * val[2])
})

console.log(result)

// ---------------------------------------------------- //

// Part 2

