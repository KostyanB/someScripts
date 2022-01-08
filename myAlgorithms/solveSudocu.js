'use strict';

const input = [
  ['5', '3', ' ', ' ', '7', ' ', ' ', ' ', ' '],
  ['6', ' ', ' ', '1', '9', '5', ' ', ' ', ' '],
  [' ', '9', '8', ' ', ' ', ' ', ' ', '6', ' '],
  ['8', ' ', ' ', ' ', '6', ' ', ' ', ' ', '3'],
  ['4', ' ', ' ', '8', ' ', '3', ' ', ' ', '1'],
  ['7', ' ', ' ', ' ', '2', ' ', ' ', ' ', '6'],
  [' ', '6', ' ', ' ', ' ', ' ', '2', '8', ' '],
  [' ', ' ', ' ', '4', '1', '9', ' ', ' ', '5'],
  [' ', ' ', ' ', ' ', '8', ' ', ' ', '7', '9'],
];

// const input = [
//   ['4', '.', '1', '.'],
//   ['.', '2', '.', '.'],
//   ['.', '.', '3', '.'],
//   ['.', '.', '2', '.'],
// ];

// const input = [
//   ['4', '.', '1', '.'],
//   ['.', '2', '.', '.'],
//   ['.', '2', '3', '.'],
//   ['.', '.', '2', '.'],
// ];

// const input = [
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', ''],
// ];

const solveSudocu = board => {
  const size = board[0].length;
  const boxSize = Math.floor(Math.sqrt(size));
  const emptyCellSymbol = getSymOfEmptyCell(board);

  function getSymOfEmptyCell(board) {
    const emptyCellCoord = findEmptyCell(board);
    const [row, col] = emptyCellCoord;

    return board[row][col];
  }

  function findEmptyCell(board) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (!parseInt(board[row][col])) {
          return [row, col];
        }
      }
    }
    return null;
  }

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

  const solveCells = () => {
    const currPos = findEmptyCell(board);

    if (currPos === null) return true;

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validateCell(currNum, currPos, board);

      if (isValid) {
        const [row, col] = currPos;
        board[row][col] = currNum;

        if (solveCells()) return true;

        board[row][col] = emptyCellSymbol;
      }
    }

    return false;
  };
  solveCells();

  return board;
};

console.table(input);
console.table(solveSudocu(input));
