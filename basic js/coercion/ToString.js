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

console.log(undefined+"node");
/**
 * undefined --> "undefiend"
 * "undefined"+node -->"undefinednode"
 */
console.log("5"+null);

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
console.log("sanket"+[null,undefined]); //  sanket,
console.log("sanket"+[undefined]); //  sanket
console.log("sanket"+[null]); //  sanket