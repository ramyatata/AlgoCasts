// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //input = number
  //output = reverseNumber
  //find the sign using math.sign
  //multiply number by sign to convert into positive number
  //convert number to string
  //reverse string
  //convert string to int
  //multiply for sign and return

  const sign = Math.sign(n);
  n = n * sign;
  return parseInt(n.toString().split('').reverse().join('')) * sign;
}

module.exports = reverseInt;
