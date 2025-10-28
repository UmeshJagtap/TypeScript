// console.log('Lets learn functions in TypeScript');
// ------------------------------------------------------ ( Function return type examples )
// Function return type :- number

function add(num1: number, num2: number): number {
  return num1 + num2; // return 30
}
// console.log(add(10, 20));

// function add(num1: number, num2: number): string {
//   // Invalid function return type
//   return num1 + num2; // return 30
//   // Type 'number' is not assignable to type 'string'.
// }
// add(10, 20);

// ------------------------------------------------------ ( Function return type example )
// Function return type :- void

// function greet(name: string): void {
//   console.log(`Hello, ${name}! Welcome to TypeScript Functions.`);
// }
// greet('Umesh');

// ------------------------------------------------------ ( Function return type example )
// Function return type :- string

// function greet(name: string): string {
//   return `Hello, ${name}! Welcome to TypeScript Functions.`;
// }
// console.log(greet('Umesh'));

// ------------------------------------------------------ ( Function return type example )
// Function return type :- function

// let combineFunction: Function;
// combineFunction = 10; // Invalid

// combineFunction = function () {}; // Valid

// combineFunction = add; // Valid
// console.log(combineFunction(20, 30)); // 50

// combineFunction = greet; // Valid
// console.log(combineFunction('XYZ')); // Hello, XYZ! Welcome to TypeScript Functions.

// GOOD PPRACTICE:

// let combineFunction: (a: number, b: number) => number;
// // combineFunction = greet;
// // Type '(name: string) => string' is not assignable to type '(a: number, b: number) => number'.
// // Types of parameters 'name' and 'a' are incompatible.
// // Type 'number' is not assignable to type 'string'.

// combineFunction = add;
// console.log(combineFunction(100, 200)); // 300

// ------------------------------------------------------ ( Function type & callbacks )
// 1:46:00

function addHandle(num1: number, num2: number, cb);
