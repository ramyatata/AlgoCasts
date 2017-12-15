// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //input = size of matrix n*n
  //output = spiral matrix of size n
  //CONSIDER FOUR LOOP PARTS - TOP ROW, RIGHT COL, BOTTOM ROW, LEFT COL
  //create a empty array of array of size n using loop
  //create a counter and intialize to 1 - this keeps track of value to be inserted
  //create four variable to hold - startRow = 0, endRow = n-1, startCol = 0, endCol = n-1
  //iterate until startRow <= endRow && startCol <= endCol
    //*******  top row ********
    //loop through startCol to endCol
      //insert counter value at results[startRow][loopVal]
      //increment counter
    //increement startRow as startRow is filled

    //******* right row ********
    //loop through startRow to endRow
      //insert counter value at results[loopValue][endColumn]
      //increement counter
    //decrement endCol as endCol is filled

    //******* bottom row *******
    //loop through endCol to startCol
      //insert counter value at results[endRow][loopVal]
      //increment counter
    //decrement endRow

    //*******  left row *******
    //loop through endRow through startRow
      //insert counter value at results[loopVal][startCol]
      //increment counter
    //increment startCol

  //return results array

  let results = [];
  let counter = 1;

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let startRow = 0;
  let endRow = n-1;
  let startCol = 0;
  let endCol = n-1;

  while (startRow <= endRow && startCol <= endCol) {

    /**********  Top row **********/
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    /********** Right Col  *********/
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    /********* Bottom Row *********/
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    /********** Left Row  *********/
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return results;
}

module.exports = matrix;
