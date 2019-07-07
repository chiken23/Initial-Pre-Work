// pushing and shifting value practice
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var answer = arr.shift();
  return answer
   // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([1,2,3,4,], 5)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
