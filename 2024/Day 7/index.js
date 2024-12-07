const fs = require('fs');

let lines = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
inputFile.split(/\r?\n/).forEach(line =>  {
  lines.push(line)
})

let total = 0

// Part 1

function findCombination(numbers, result, combinations) {
  if (numbers.length === 0) {
      combinations.push(result);
      return
  }

  const nextNumber = numbers[0];
  const remainingNumbers = numbers.slice(1);

  findCombination(remainingNumbers, result + nextNumber, combinations);
  findCombination(remainingNumbers, result * nextNumber, combinations);
}

lines.map((line) => {
  const val = line.split(':')
  const target = parseInt(val[0])
  let nums = val[1].trim().split(" ").map(x => parseInt(x))

  let combinations = []

  findCombination(nums, 0, combinations)
  if (combinations.includes(target)){
    total += target
  }
})

console.log(total)
