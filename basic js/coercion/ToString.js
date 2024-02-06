/**
 * We can use '+ operator to mimic ToString abstract method
 *
 *
 * Addition Operator
 * let both left and right operand and apply ToPrimitive() abstract operation on them
 * if type of either of one is string convert both in String
 * if not then convert both in Number
 */
console.log("vaibhav" + "kamble");
/**
 * both are string so they concatinate
 */

console.log(undefined + "node");
/**
 * undefined --> "undefiend"
 * "undefined"+node -->"undefinednode"
 */
console.log("5" + null);

/**
 * one of they string then both of them become string
 * "5" + "null" --> "5null"
 */

console.log("sanket" + true);
/**
 * true --> "true"
 * "sanket" + "true" -- > sankettrue
 */

/**
 * null --> "null"
 * undefiend --"undefined"
 * true -->"true"
 * false -- > "false"
 * 3.145 ---> "3.145"
 * [] --> ""
 * [1,2,3] -- > "1,2,3"
 * [null,undefiend] -- > ","
 *  [[],[],[]] -- > , , ,
 * */
console.log("sanket" + [null, undefined]); //  sanket,
console.log("sanket" + [undefined]); //  sanket
console.log("sanket" + [null]); //  sanket

console.log("sanket" + { a: 10 }); //sanket[object Object]
/**
 * sanket is already a primitive
 * {a:10} this is not primitive then we can ToPrimitive without hint that means hint will become number
 * we first call valueOf() { a: 10 } --> and returns same object
 * And then we cann toString() --> "[object Object]"
 */

console.log(10 - { a: 10 });
/**
 * 10 is already number
 * {a:10} this is going to get converted to number and this is Object for that we call ToPrimitive with hint number
 * first we call valueOf() it return same object then we call toString() which return "[object Object]" -->  primitive value
 * and then we call ToNumber on it and it return NaN
 * 10 - NaN -- > NaN
 *
 */

let x = {
  a: 80,
  valueOf() {
    return 3;
  },
  toString() {
    return "vaibhav";
  },
};
console.log(10 - x);
/**
 * Here 10 is already number
 * x is object so it first call ToPrimitive with hinnt number
 * then it first calls value on x which returns 3
 * 10 - 3 --> 7
 */
