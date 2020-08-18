// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  for(let i = 1; i < str.length; i++){
    if(str.charCodeAt(i-1)+1 != str.charCodeAt(i)){
      return String.fromCharCode(str.charCodeAt(i-1)+1)
    }    
  }
  return "no missing letters"
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)
// TWO SUM PROBLEM FOR LATER REFERENCE speed is a factor

// Clever algorithm with faster run time by utilizing hash tables
// website explanation of algorithm: https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3


function sumEqualsTarget(arr, target) {
  arrIndexes = {};

  for(let i = 0; i < arr.length; i++){
    let cDiff = target - arr[i]
  if (arrIndexes[cDiff] !== undefined && arrIndexes[cDiff] !== i){
    return true // [i, arrIndexes[cDiff]]; // actual index positions of the elements that sum to target
  } else {
    arrIndexes[arr[i]] = i;
  }
  }
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

//
// create an array of only the odd numbers sorted in the correct order
// shift removes item from beginning of the array and assigns to the spot of prior arr element
// map is creating a new array populated with results of calling a provided function on every element in the calling array

function oddAscender(arr) {
  const odds = arr.filter(x => x%2).sort((a,b)=> a-b);
  return arr.map(x => x%2 ? odds.shift() : x);
}