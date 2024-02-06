/**
 * Actually both == and ===  checks the types but the difference is both of them do something different after checking the types
 *
 * s0 == does type checking and if types are  same it calls  ===
 *
 * === checks types and if types are not same return false
 *
 * In javascript NaN is only primitive that is not equal to itself i.e. NaN === NaN --> false
 *
 */

/**
 * Strict Equality Comparision
 *
 * if types are not same return  ---> false
 * if type x is number then
 *      if x is Nan -> return false
 *      if y is NaN -> return false
 *      if x is same as y --> return true
 *      if x is +0 and y -0 --> return true
 *      otherwise it return false
 *
 * Is type is not number it calls SameValueNonNumber
 */
console.log(null === null); //true

console.log(undefined === undefined); // true
