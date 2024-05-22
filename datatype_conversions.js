// const stringNumber = "0"; // The output will be a number
// const stringNumber = "Hello"; // The output will be a NaN
// const stringNumber = undefined; // The output will be a NaN
// const stringNumber = null; // The output will be a 0
const stringNumber = true; // The output will be a 0

const number = Number(stringNumber);

console.log(typeof number);
console.log(number);

// Boolean

// const value = null; // Output will be false
// const value = undefined; // Output will be false
const value = "Hello"; // Output will be true

const booleanValue = Boolean(value);

console.log(typeof booleanValue);
console.log(booleanValue);

// ********************** Operations ********************
console.log(1 + "2"); // Output will be 12
console.log("1" + 2); // Output will be 12
console.log("1" + 2 + 3); // Output will be 123
console.log(1 + 2 + "3"); // Output will be 33
console.log(1 + "2" + 3); // Output will be 123

// From all above examples we see that if we string on the first then all value will behave in a string
