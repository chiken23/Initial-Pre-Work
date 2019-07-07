// loops on loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
 for(var a=0;a<arr.length;a++){
   for(var b=0;b<arr[a].length;b++){
    product = product*arr[a][b];
   }
 }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
