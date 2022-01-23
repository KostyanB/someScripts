'use strict';
/*
 *
 */
'use strict';

const input1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]; // "Finished!"

const input2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]; // "Try again!"

const checkSudocuSolution = board => {
  const size = 9,
    boxSize = 3;
  let res = 'Finished';

  const validateCell = (num, position, board) => {
    const [row, col] = position;

    // check rows
    for (let y = 0; y < size; y++) {
      if (board[y][col] === num && y !== row) {
        return false;
      }
    }

    // check columns
    for (let x = 0; x < size; x++) {
      if (board[row][x] === num && x !== col) {
        return false;
      }
    }

    // check cells inside current box
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;

    for (let y = boxRow; y < boxRow + boxSize; y++) {
      for (let x = boxCol; x < boxCol + boxSize; x++) {
        if (board[y][x] === num && y !== row && x !== col) {
          return false;
        }
      }
    }

    return true;
  };

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const currNum = board[i][j],
        currPos = [i, j];

      if (!validateCell(currNum, currPos, board)) res = 'Try again!';
      console.log('res: ', res);
    }
  }

  return res;
};

console.log(checkSudocuSolution(input1));
console.log(checkSudocuSolution(input2));
