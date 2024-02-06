/**
 *
 * ToBoolean abstract operation convert the given type to a Boolean value. ToBoolean works a bit different when compared to toString and ToNumber. It maintain a list of falsy value which when receive as argument return False other than that it return true
 *
 * List of falsy value
 * null
 * undefined
 * +0,-0
 * NaN
 * "" (empty string)
 * false
 *
 * if we get any of these value we return false otherwise true
 *
 * --We can use logical not operator to check ToBoolean abstract operation
 *
 * ex
 * !a
 * store it in oldValue=a
 * calls toBoolean(a)
 *
 * if oldValue is true --return false
 *
 */
console.log(!0);
/**
 * 0 is falsy value and ToBoolean on 0 is false
 * for that !0 --> True
 */

console.log(!-4);
/**
 * -4 is not falsy value so it return true
 * ans !-4 --> false
 */
console.log(!null);
/**
 * null is falsy value so it return false
 * and !null -- return true
 */
console.log(!undefined);
/**
 * undefiend --> false
 * !undefined --> true
 */
console.log(!{});
/**
 * {} --> true
 * !{} --> false
 */
console.log(!console.log("vaibhav"));
/**
 * console.log("vaibhav ") -- > it reurns undefined
 * undefined  --> false
 * !undefined --> true
 */
