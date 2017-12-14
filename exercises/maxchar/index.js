// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //input string
  //map characters in str o object using reduce
  //loop though object values
  //return the key whose value is highest
  //output = character

  let mostRep = str[0];

  // charMap = {};
  // for (let char in str) {
  //   if(!charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // }

  const charMap = str.split('').reduce( (acc, char) => {
    acc[char] = acc.hasOwnProperty(char) ? acc[char]+1 : 1;
    return acc;
  }, {});

  for (var key in obj) {
    if(obj[key] > obj[mostRep]){
      mostRep = key;
    }
  }

  return mostRep;
}

maxChar('ab1c1d1e1f1g1');

module.exports = maxChar;
