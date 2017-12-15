// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib2(n) {
  //input nth digit
  //output nth entry of fibonacci series
  //create a array with 0, 1
  //loop from 2 till n
    //insert a value = n-1 + n-2
  //return the nth value

  let fibArr = [0, 1];

  for (let i = 2; i <=n; i++) {
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }

  return fibArr[n];

 //time - o(n)
 //space - o(n)
}

function fib3(n) {
  //base case - arr.length = n+1
  if (n < 2) {
    return n;
  }

  return fib(n-1) + fib(n-2);

  //time - o(2^n) = exponential
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

function memoize(fn) {
  let cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

fib = memoize(slowFib);

module.exports = fib;
