/**
 * it also checks the types if type is same it calls strict equality operation
 *
 * rules
 * if x = undefiend and y =null -- return true
 * if one operant is number and another is string then we make string to number using ToNumber abstract  operation
 *
 *
 */
console.log(null == undefined); //true
console.log(undefined == null); //true
console.log(10 == "10");
/**
 * Here x is number y is String so we call ToNumber on '10' and it return 10 as number
 * so 10 == 10 --> return true
 */
console.log(10 == "11");
/**
 * Here x is number y is String so we call ToNumber on '10' and it return 10 as number
 * so 10 == 10 --> return true
 */

a = 5;
if (a) {
  console.log("hi there ");
}
if (a == true) {
  console.log("hello vaibhav");
}
/**
 * Here just hi there prints bez a=5 it is not falsy value so it is true condition
 * And in 2nd if condition
 * a == true
 * here one is boolean and another is number so in equality it calls ToNumber on true and it return 1
 * so it compares 55 == 2 --> false so 2nd statement not exicutes
 */
