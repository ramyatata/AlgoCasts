// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //input = array, size of sub arr
  //array of subarrays(chunk)
  //loop through array until size is 0
    //inside loop splice the chunk size
    //push it into finalArr
  //return finalArr
  let finalArr = [];
  while(array.length > 0) {
    finalArr.push(array.splice(0, size));
  }
  return finalArr;
}

function chunk2(array, size) {
  //container for final array - finalArr
  //loop through array
  // if last ele of finalArr is undefined or length of last elem of finalArr === size
     //insert new arr with ele into finalArr
  // else push element into last element of finalArr
  //return finalArr

  const finalArr = [];
  for (let ele of array) {
    const last = finalArr[finalArr.length-1] ;
    debugger;
    if(!last || last.length === size){
      finalArr.push([ele]);
    } else {
      last.push(ele);
    }
  }

  return finalArr;
}


module.exports = chunk;
