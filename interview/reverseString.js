//method 1
let str = "keshavkumar";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(str);
console.log(reverse);

//method 2
let str2 = "vaibhav";
let newstr = str2.split("").reverse().join("");
console.log(str2);
console.log(newstr);
