console.log(12 - 2); //Both are number so we easily substract
console.log(undefined - 4);
/** 
 * undefined is not valid number so we make it undergo ToNumber abstract operation 
ToNumber(undefined) --> NaN
any operation with Nan result in NaN 
i.e NaN - 4 ---> NaN

*/

console.log(null - 5);
/**
 * Null is not a valid number so we make it under go ToNumber abstract opration
 * i.e ToNumber(null) -- > +0
 * so 0 - 5 --> -5
 */
console.log("131" - 10);
/**
 * '131' is string so we make it undergo ToNumber abstract operation and
 * ToNumber("131") ---> 131
 * so (131 - 10) --> 121
 */
console.log("131d" - 10);
/**
 * "131d" is a string so we make it undergo ToNumber("131d")
 * ToNumber("131d") --> Nan because tthis sting can not be parsed as number
 * so (NaN - 10) --> NaN
 */
console.log(4 - true);
/**
 * true is not a number so we make it undergo ToNumber abstrct operation
 * ToNumber(true) -- >1
 * so (4 - 1)-->3
 */
console.log("0xf" - 1);
/**
 * 0x denotes we are trying to write hexadecimal  number
 * here f represt 15 i.e hexadecimal number
 * so ("0xf" - 1 ) i.e 15 - 1 --> 14
 */
console.log("0xz" - 1);
/**
 * "0xz" this is an invalid hexa decimal number 
 * ToNumber("0xz") -- NaN
 * so (NaN - 1) -- >NaN
 */
console.log("abcd" - 1);
console.log("0xabcd" - 1);
/**
 * here abcd is string and it return NaN so we get NaN - 1 --> NaN
 * and In 2nd example )xabcd represt hexa decimal number so we get proper number and get proper result
 */
console.log("0o11" - 1);
/**
 * "0o11" is string and we make it undergo ToNumber abstract method
 * ToNumber("0o11") -- > 9 so  9 -1 --> 8
 */

// somemore exaple
/**
 * [""] --> 0
 * ["0"] --> 0
 * ["-0"] --> 0
 * [null] --> 0
 * [undefined] --> 0
 * [1,2,3] --> NaN
 * [[]] --> 0
 * [] --> 0
 */
console.log(10 - []);