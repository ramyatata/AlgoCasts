// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
  //input = string
  //output = count
  //create an array for vowels
  //create a counter variable
  //convert the input string to lowercase
  //loop through the string characters
    //if character matches vowel in array
       //increement count by 1
  //return counter

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  const strLower = str.toLowerCase();

  for (let char of strLower) {
    if (vowels.includes(char)) {
      counter++;
    }
  }

  return counter;
}

function vowels(str) {
//*****************  Regular expression ****************** /

  const matches = str.match(/[aeiou]/gi);   //return array of matched eles, if nothing found return null
  return matches ? matches.length : 0 ;
}

module.exports = vowels;
