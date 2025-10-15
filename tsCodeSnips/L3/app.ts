// let firstName: string;
// let age: number;
// let isMarried: boolean;

// const person: {
//   fisrtName: string;
//   age: number;
//   isMarried: boolean;
// } = {
//   fisrtName: 'John',
//   age: 30,
//   isMarried: false,
// };

// console.log(person.fisrtName);

// We cannot use :Object

// --------------------------------------------------<< UNION >>
// UNION, | -> pipe in Typescript

// function combine(num1: number | string | boolean, num2: number | string) {
//   let result = '';
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     result = num1 + num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum = combine(10, 20);
// const combinedName = combine('Hello', 'World');
// console.log(sum);
// console.log(combinedName);

// --------------------------------------------------<< LITERAL TYPES >>
// LITERAL TYPES

function combine2(
  num1: number | string | boolean,
  num2: number | string,
  conversionType: 'as-number' | 'as-string'
) {
  let result = '';
  if (
    (typeof num1 === 'number' && typeof num2 === 'number') ||
    conversionType === 'as-number'
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combine2('10', '20', 'as-number');
const sum2 = combine2(10, 50, 'as-number');
const combinedName = combine2('Patel', 'MernStack', 'as-string');
console.log(sum1);
console.log(sum2);
console.log(combinedName);

// TYPE ALIAS / CUSTOM TYPES
