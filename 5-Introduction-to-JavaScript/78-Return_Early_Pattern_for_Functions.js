//return ends the function so code after return will be ignored
// Setup
function abTest(a, b) {
// Only change code below this line
if (a < 0 || b < 0){
return undefined;
} else {
// Only change code above this line

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
}

// Change values below to test your code
abTest(2,-2);
