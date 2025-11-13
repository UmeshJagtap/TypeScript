// console.log('Lets learn functions in TypeScript');
// ------------------------------------------------------ ( Function return type examples )
// Function return type :- number

// function add(num1: number, num2: number): number {
//   return num1 + num2; // return 30
// }
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
// combineFunction = 'Patel'; // Invalid

// combineFunction = function () {}; // Valid

// combineFunction = add; // Valid
// console.log(combineFunction(20, 30)); // 50

// combineFunction = greet; // Valid
// console.log(combineFunction('XYZ')); // Hello, XYZ! Welcome to TypeScript Functions.

// GOOD PPRACTICE:

// let combineFunction: (a: number, b: number) => number;

// combineFunction = greet;  // Invalid
// // Type '(name: string) => string' is not assignable to type '(a: number, b: number) => number'.
// // Types of parameters 'name' and 'a' are incompatible.
// // Type 'number' is not assignable to type 'string'.

// combineFunction = add; // Valid
// console.log(combineFunction(100, 200)); // 300

// ------------------------------------------------------ ( Function type & callbacks )

function addHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  // cb('result'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  cb(result); // Valid
}

// addHandle();   // Error: Expected 3 arguments, but got 0.
addHandle(10, 20, (result: number) => {
  console.log('Addition Result:', result); // Addition Result: 30
});

// You can also use "type" for the callback parameter ----------->>>>
type CBF = (n: number) => void;
function addHandle2(num1: number, num2: number, cb: CBF) {
  const result = num1 + num2;
  cb(result); // Valid
}
addHandle2(10, 20, (result: number) => {
  console.log('Addition Result:', result); // Addition Result: 30
});
