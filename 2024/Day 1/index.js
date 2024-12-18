const fs = require('fs');

const x = []
const y = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
inputFile.split(/\r?\n/).forEach(line =>  {
  
  const [val1, val2] = [...line.match(/\S+/g)];
  x.push(val1)
  y.push(val2)
});

x.sort()
y.sort()

// Part 1
const lengthOfArray = x.length
let result = 0

for (let i=0; i< lengthOfArray; i++) {
  result = result + Math.abs(x[i]-y[i])
}

// ---------------------------------------------------- //

// Part 2

const frequency = {}
let similarityScore = 0

y.forEach((val) => {
  frequency[val] = (frequency[val] || 0) + 1
})

x.map((value) => {
  if (frequency[value]) {
    similarityScore = similarityScore + (value *frequency[value])
  }
})

console.log('The similarity is: ', similarityScore)