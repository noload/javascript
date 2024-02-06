/**
 * NaN -- Not a Number
 * It does not mean not a number , rather is gives notion of an "invalid number"
 *
 */
console.log(NaN === NaN); //false
console.log(NaN == NaN); //false

//isNaN utility method
/**
 * This  isNaN function tries to conver everything to number based on that it returns true or false
 */

a = "10"; // here it tries to apply ToNumber to 10 and it get  10 as number so it return true
b = "abc"; //here it return NaN after applying ToNumber
c = 10 - b; //here it return NaN so it return true

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));

// Number.isNaN() -- >  this is another utility function which not do implicitily coersion
