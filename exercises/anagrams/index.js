// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams2(stringA, stringB) {
  //input - strings A,B
  //output = bool
  //remove special chars and spaces from both strings
  //map strings to objects of char count using reduce
  //check the length of two objects are equal
    //if equal, loop through each key and check its values are same
    // if all matches reutrn true
    //else false
  //return false

  const strAMap = builCharMap(stringA);
  const strBMap = builCharMap(stringB);

  if (Object.keys(strAMap).length === Object.keys(strBMap).length) {
    let isAnagram = true ;
    for (let key in strAMap) {
      if(strAMap[key] !==  strBMap[key]){
        isAnagram = false;
      }
    }
    return isAnagram;
  } else {
    return false;
  }
}

function builCharMap(string){

  const str = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const charMap = str.split('').reduce((acc, ele) => {
    acc[ele] = acc[ele] ? acc[ele]++ : 1; return acc;
  }, {});
  return charMap;

  //let charMap = {}
  //for(let char of string.replace(/[^\w]/g,'').toLowerCase()){
  //  charMap[char] = charMap[char] + 1 || 1;
  //}
}

function anagrams(stringA, stringB) {
  //cleanup string with no spaces and special chars
  //instead of comparing char by char, compare directly with ====

  strA = cleanupString(stringA);
  strB = cleanupString(stringB);

  return strA === strB;
}

function cleanupString(str) {
  //removes spaces and special chars
  //split string into array
  //sort
  //join
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
