const fs = require('fs');

const lines = []
const rules = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
const inputSplit = inputFile.split('\n\n')

inputSplit[0].split(/\r?\n/).forEach(line =>  {
 rules.push(line)
});

inputSplit[1].split(/\r?\n/).forEach(line =>  {
 lines.push(line)
});

// Part 1

let rulesSet = {}
let middleCount = 0
let validLines = []

rules.map((rule) => {
  const [before, after] = rule.split('|')
  rulesSet[before] ? rulesSet[before].push(after) : rulesSet[before] = [after] 
})

lines.map((line) => {
  const values = line.split(',')
  let isLineValid = true
  for (let i = 0; i< values.length - 1 ; i++) {
    if (![...values].splice(i+1, values.length - 1).every((num) => rulesSet[values[i]] && rulesSet[values[i]].includes(num))){
      isLineValid = false
      break;
    }
  }

  if (isLineValid) {
    validLines.push(line)
  }
})

validLines.map((line) => {
  const values = line.split(',')
  middleCount = middleCount + parseInt(values[Math.floor(values.length / 2)])
})
console.log(middleCount)