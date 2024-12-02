const fs = require('fs');

const lines = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
inputFile.split(/\r?\n/).forEach(line =>  {
  
  const value = [...line.match(/\S+/g)].map((x) => parseInt(x));
  lines.push(value)
});

// Part 1
let numberOfSafeReports = 0

lines.map((line) => {
  let isSafe = true
  for(let i = 1; i<line.length; i++) {
    const levelDistance = line[i - 1] - line[i]
    const diff = Math.abs(levelDistance)

    if (diff > 3 || diff < 1){
      isSafe = false
    }

    if (line[0] > line[1] && diff != levelDistance || line[0] < line[1] && diff != -levelDistance) {
      isSafe = false
    }
  }

  if (isSafe) {
    numberOfSafeReports++
  }
})

// console.log(numberOfSafeReports)


// ---------------------------------------------------- //

// Part 2

let numberOfDampenerSafeReports = 0

const checkSafeValues = (line) => {
  let isLineSafe = true
  for(let i = 1; i<line.length; i++) {
    const levelDistance = line[i - 1] - line[i]
    const diff = Math.abs(levelDistance)

    if (diff > 3 || diff < 1){
      isLineSafe = false
    }

    if (line[0] > line[1] && diff != levelDistance || line[0] < line[1] && diff != -levelDistance) {
      isLineSafe = false
    }
  }

  return isLineSafe
}

lines.map((line) => {
  let isSafe = checkSafeValues(line)

  if (isSafe) {
    numberOfDampenerSafeReports++
  } else {
    let isNewLineSafe = false
    for (let i = 0; i < line.length; i++) {
      const n = [...line]
      n.splice(i, 1)

      const result = checkSafeValues(n)

      if (result) {
        isNewLineSafe = true
      }
    }
    if (isNewLineSafe) {
      numberOfDampenerSafeReports++
    }
  }
})

// console.log(numberOfDampenerSafeReports)