// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps2(n) {
  //input is  size of letter and no.of lines
  //from 0 to n iterate through rows
    //create a new empty string stairs
    //from o to n iterate through columns
      //if columns is <= rows
        //add '#' to stairs
      //else add ' ' to stairs
    //log stairs on console

  for (let rows = 0; rows < n; rows++) {
    let stairs = '';
    for (let cols = 0; cols < n; cols++) {
      if (cols <= rows) {
        stairs += '#';
      } else {
        stairs +=  ' ';
      }
    }
    console.log(stairs);
  }
}

function steps(n, rows = 0, stairs = '') {
  /***************  recursive solution *******************/
  if (n === rows) {
    return;
  }

  if(stairs.length === n) {
    console.log(stairs);
    stairs = '';
    rows++;
  }

  if (stairs.length <= rows) {
    stairs += '#';
  } else {
    stairs += ' ';
  }

  steps(n, rows, stairs)
}

module.exports = steps;
