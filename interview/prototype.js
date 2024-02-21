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
var OriginalObj = {
  name: "Original",
  age: 30,
};

var user1 = { ...OriginalObj };
console.log("user1", user1);

//method 2
var user2 = Object.assign({}, OriginalObj);
console.log("user2", user2);

//method 3
var user3 = JSON.parse(JSON.stringify(OriginalObj));
console.log("user3", user3);
