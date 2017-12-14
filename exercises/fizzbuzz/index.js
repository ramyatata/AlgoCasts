// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  //input number
  //print - console.log
  //loop through n
  //check if divisible by 5 and 3
    //yes, print 'fizzbuzz'
  //else if check % by 5
    //yes, print 'buzz'
  //else if check % by 3
    //yes, print 'fizz'
  //else print number

  for(let i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
