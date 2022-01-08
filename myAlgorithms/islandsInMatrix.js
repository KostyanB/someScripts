// острова в матрице
/*
 * остров - '1' граничащие по вертикали и горизонтали
 * один - тоже остров
 */
const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]; //out 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]; //out 3

const grid3 = [['1', '1', '0', '1', '0']]; //out 2

const islandsNum = grid => {
  let count = 0,
    rowsL = grid.length,
    colsL = grid[0].length;

  if (rowsL === 0) return 0;

  const markNeighbour = (grid, row, col) => {
    grid[row][col] = '6';

    if (grid[row][col - 1] === '1') markNeighbour(grid, row, col - 1);
    if (grid[row][col + 1] === '1') markNeighbour(grid, row, col + 1);
    if (grid?.[row - 1]?.[col] === '1') markNeighbour(grid, row - 1, col);
    if (grid?.[row + 1]?.[col] === '1') markNeighbour(grid, row + 1, col);
  };

  for (let r = 0; r < rowsL; r++) {
    for (let c = 0; c < colsL; c++) {
      if (grid[r][c] === '1') {
        count++;
        markNeighbour(grid, r, c);
      }
    }
  }

  return count;
};

console.log(islandsNum(grid1));
console.log(islandsNum(grid2));
console.log(islandsNum(grid3));
