// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
  //input = string
  //reverse string and compare
  //if equal return true
    // else return false
  //output = boolean

  const reversedStr = str.split('').reduce((acc, char) => char + acc, '');
  return str === reversedStr;

  //time = o(n)
  //space =
}

function palindrome3(str) {
  //*********** array method every *************

  //input = string
  //split array on ''
  //reverse array
  //use every method
    //inside compare each ele equal to last ele and so on
  //return outpit
  //output = bool

  return str.split('').every((ele, ind, arr) => ele === str[(str.length - 1) - ind]);

  //time = o(n) double comparision
  //space =
}

function palindrome(str) {
  //************** reducing time complexity ***********

  //loop till half of length of str
  //compare each ele with mirrored ele
  //if all comparisions are equal return true
  //else return false

  let isPalin = true;
  for(let i = 0; i <= Math.ceil(str.length/2); i++) {
    if(str[i] !== str[str.length-1-i]) {
      isPalin = false;
    }
  }
  return isPalin;

  //time = o(n/2) = isreduced by 2
  //space =
}

module.exports = palindrome;
