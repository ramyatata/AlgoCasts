// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid2(n) {
  //input = lines of pyramid
  //output- pyramid with n lines
  //loop from 0 to n - rows
    //create a empty string level
    //iterate through columns 0 to 2n-1
    //check condition to display # - FIND THE MIDPOINT OF 2N-1 AND CURRENT ROW = NO.OF '#' TO BE ADDED.
    //calculate upperlimit and lower limit
      //if cols is in range add '#'
      //else add ' '
    // log level on console

  let midpoint = Math.floor((2*n - 1)/2);

  for (let rows = 0; rows < n; rows++) {
    let level = '';
    let upperIndex = midpoint + rows;
    let lowerIndex = midpoint - rows;

    for (let cols = 0; cols < 2*n - 1 ; cols++) {
      if (cols >= lowerIndex && cols <= upperIndex) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

function pyramid(n, rows = 0, level='') {
  //***************   recursion  ***************/

  if (rows === n) {
    return;
  }

  if (level.length === (2*n - 1)) {
    console.log(level);
    rows++;
    return pyramid(n, rows);
  }

  let midpoint = math.floor((2*n - 1)/2);
  let upperlimit = midpoint + rows;
  let lowerlimit = midpoint - rows;

  if (level.length >= lowerlimit && level.length <= upperlimit){
    level += '#';
  } else {
    level += ' ';
  }

  pyramid(n, rows, level)

}

module.exports = pyramid;
