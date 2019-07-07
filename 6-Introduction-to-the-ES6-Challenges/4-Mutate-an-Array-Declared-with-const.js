// 'const' arrays are still mutable through functions
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s.pop();
s.unshift(2);
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
