const fs = require('fs');

const lines = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
inputFile.split(/\r?\n/).forEach(line =>  {
 lines.push(line)
});


const R = lines.length;
const C = lines[0].length;
let count = 0;

const pattern = ['XMAS', 'SAMX']

// Part 1

for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {

    if (c + 3 < C) {
      const value = lines[r][c] + lines[r][c + 1] +lines[r][c + 2] + lines[r][c + 3]
      if (pattern.includes(value)) {
        count++;
      }
    }

    if (r + 3 < R) {
      const value = lines[r][c] + lines[r + 1][c] + lines[r + 2][c] + lines[r + 3][c]
      if (pattern.includes(value)) {
        count++;
      }
    }


    if (r + 3 < R && c + 3 < C) {
      const value = lines[r][c] + lines[r + 1][c + 1] + lines[r + 2][c + 2] + lines[r + 3][c + 3]
      if (pattern.includes(value)) {
        count++;
      }
    }

    if (r - 3 >= 0 && c + 3 < C) {
      const value = lines[r][c] + lines[r - 1][c + 1] + lines[r - 2][c + 2] + lines[r - 3][c + 3]
      if (pattern.includes(value)) {
        count++;
      }
    }
  }
}

console.log(count); 
