// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //input = string
  //output = capitalize first char of each word

  //split str on ' '
  //loop through array
    //foreach item capitalize first letter
  //join array on ' ';
  //return string

  let words = [];
  for(let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

function capitalize2(str) {
  //capitalise first chaacter and add it result
  //loop through the characters starting from 2nd one
  //if the char left to it is space then capitalize and add it to string
  //return final string

  var result = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++) {
    if(str[i-1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
