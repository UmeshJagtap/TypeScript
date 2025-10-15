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

// function combine2(
//   num1: number | string | boolean,
//   num2: number | string,
//   conversionType: 'as-number' | 'as-string'
// ) {
//   let result = '';
//   if (
//     (typeof num1 === 'number' && typeof num2 === 'number') ||
//     conversionType === 'as-number'
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum1 = combine2('10', '20', 'as-number');
// const sum2 = combine2(10, 50, 'as-number');
// const combinedName = combine2('Patel', 'MernStack', 'as-string');
// console.log(sum1);
// console.log(sum2);
// console.log(combinedName);

// --------------------------------------------------<< TYPE ALIAS / CUSTOM TYPES >>
// TYPE ALIAS / CUSTOM TYPES

// // type Combinable = number | string | boolean | string[];  --Example of type alias
// type Combinable = number | string;

// function combine3(
//   num1: Combinable,
//   num2: Combinable,
//   conversionType: 'as-number' | 'as-string'
// ) {
//   let result = '';
//   if (
//     (typeof num1 === 'number' && typeof num2 === 'number') ||
//     conversionType === 'as-number'
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum1 = combine3('10', '20', 'as-number');
// const sum2 = combine3(10, 50, 'as-number');
// const combinedName = combine3('Jagtap', 'MernStack', 'as-string');
// console.log(sum1);
// console.log(sum2);
// console.log(combinedName);

// -------------------------------------------------- ( Example  of type alias )

// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };
// const user: User = {
//   name: 'Umesh',
//   age: 29,
//   skills: ['JavaScript', 'ReactJS', 'NodeJS'],
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);

// -------------------------------------------------- ( Example  of type alias with function )

type User = {
  name: string;
  age: number;
  skills: string[];
};
const user: User = {
  name: 'Umesh',
  age: 29,
  skills: ['JavaScript', 'ReactJS', 'NodeJS'],
};

function greet(user: User) {
  console.log(`Hi, I am ${user.name} and I am ${user.age} years old.`);
}
// console.log(user.name);
// console.log(user.age);

greet(user);

// -------------------------------------------------- ( Example of interface )

// interface User {
//   name: string;
//   age: number;
//   skills: string[];
// }

// const user: User = {
//   name: 'Umesh',
//   age: 29,
//   skills: ['JavaScript', 'ReactJS', 'NodeJS'],
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
