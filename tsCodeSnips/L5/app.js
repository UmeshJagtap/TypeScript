// Console log statement
console.log('Lets learn types in TypeScript');
// ------------------------------------------------------ ( type unknown examples )
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Umesh Jagtap';
// // userName = userInput; // Invalid
// // Type 'unknown' is not assignable to type 'string'.
// ------------------------------------------------------ ( type any examples )
// let userInput: any;
// let userName: string;
// userInput = 5;
// userInput = 'Umesh Jagtap';
// userName = userInput; // Valid
// ------------------------------------------------------ ( type unknown with type checking examples )
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Umesh Jagtap';
// if (typeof userInput === 'string') {
//   userName = userInput; // Valid
// }
// ------------------------------------------------------ ( type never examples )
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var res = generateError('An error occurred!', 500);
console.log(res); // Uncaught { message: 'An error occurred!', errorCode: 500 }
// The function 'generateError' will never return a value because it always throws an error.
// Hence, its return type is 'never'.
