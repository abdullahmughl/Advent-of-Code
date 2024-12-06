const fs = require('fs');

let grid = []

const inputFile = fs.readFileSync('input.txt', 'utf-8');
inputFile.split(/\r?\n/).forEach(line =>  {
  grid.push(line)
 });


// Part 1

let guradPosition = undefined
const direction = {
  'up': [-1, 0],
  'down': [1, 0],
  'left': [0, -1],
  'right': [0, 1]
}
let currentDirection = direction.up
let locationsVisited = []

const changeDirection = () => {
  if (currentDirection.toString() == direction.up.toString()) return direction.right
  if (currentDirection.toString() == direction.right.toString()) return direction.down
  if (currentDirection.toString() == direction.down.toString()) return direction.left
  if (currentDirection.toString() == direction.left.toString()) return direction.up
}

for (let i = 0; i < grid.length; i++){
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[i][j] === '^'){
      guradPosition = [i, j]
      locationsVisited.push([i, j])
      break;
    }
  }
}

// let uniqueArray = undefined

while (true){
  const newPosition = [guradPosition[0] + currentDirection[0], guradPosition[1] + currentDirection[1]]

  if (newPosition[0] < 0 || newPosition[0] >= grid[0].length || newPosition[1] < 0 || newPosition[1] >= grid.length ) {
    break;
  }
  console.log(newPosition)
  if (grid[newPosition[0]][newPosition[1]] == '#'){
    currentDirection = changeDirection()
  } else {
    guradPosition = newPosition
    locationsVisited.push(newPosition)
  }

}

const uniqueArray = locationsVisited.filter((item, index, self) =>
  index === self.findIndex((innerArray) => JSON.stringify(innerArray) === JSON.stringify(item))
);

console.log(uniqueArray.length)