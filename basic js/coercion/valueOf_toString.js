let obj = { name: "vaibhav", role: "Backend engineer" };

console.log(obj.toString()); // "[object Object]"
console.log(obj.valueOf());

let arr = [1, 2, 3];
console.log(arr.valueOf());
console.log(arr.toString());

/**
 * for array
 * toString return same array without bracket
 */