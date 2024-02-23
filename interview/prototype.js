/**
 * Netscafe --> 1st browser is the 1st browser created.
 *
 */

// var tommy = {
//   name: "Tommy",
//   breed: "Labrador",
//   father: {
//     name: "Jommy",
//     breed: "Labrador",
//   },
// };

// for (key in tommy) {
//   console.log(key);
//   console.log(tommy[key]);
// }

/**
 *
 */
// var ruby = tommy;//it point to same object not create another copy

// ruby.name = "ruby";

// console.log(tommy.name);

// var ruby = {};
// ruby.__Proto__ = tommy;
// ruby.name = "ruby";
// console.log(ruby);

/**
 * How to clone object in javascript
 *
 * --> We can clone js objec using three differnt approch
 * 1. Using ... spread operator
 * 2. Using assign() method
 * 3. using parse and strigify method
 */

//method 1
// var OriginalObj = {
//   name: "Original",
//   age: 30,
// };

// var user1 = { ...OriginalObj };
// console.log("user1", user1);

// //method 2
// var user2 = Object.assign({}, OriginalObj);
// console.log("user2", user2);

// //method 3
// var user3 = JSON.parse(JSON.stringify(OriginalObj));
// console.log("user3", user3);

/**
 * What is the purpose of the Object.freeze() method in JavaScript?
 *
 * ANS : freeze() method of object is used to make object immutable
 */
//example
// obj = {
//   name: "ram",
//   age: 23,
//   married: true,
// };

// obj.age = 50; //here we are able to change age off obj bez it is mutable
// console.log(obj);
// Object.freeze(obj);
// obj.age = 32; // here we are not able to change age value to 30 bez now object is immutable due tto that freez() method
// console.log(obj);

/**
 * Object.seal() method stops to modify object structure
 * example here you can modify value of keys which already present but we cannot add extra  key value
 */
let obj = {
  name: "Vaibhav",
  age: 26,
};
console.log(obj);
