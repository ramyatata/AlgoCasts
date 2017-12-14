// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse2(str) {
  //input - string
  //split the string on spaces
  //reverse the array
  //join array
  //output - string

  return str.split('').reverse().join('');

  //time complexity - O(n) = reverse method
  //space complexity - O(1)
}

function reverse3(str) {
  /********   without reverse  *********/
  //input - string
  //loop through the input string in reverse order - new es6 loop
  //add each character to reverse string
  //return rever string
  //output - string

  let reverseString = '';
  for (let char of str) {
    reverseString = char + reverseString;
  }
  return reverseString;

  //time complexity - O(n)
  //space complexity - O(1)
}

function reverse(str){
  //first priority
  /********   using reduce  *********/

  //input = string
  //split the str into array
  //apply reduce function on array
    // add each char at begining of accumulator
  //return reverseStrung
  //output = string

  return str.split('').reduce((acc, char) => char + acc, '' );

  //time - o(n);
  //space - o(2);
}


module.exports = reverse;