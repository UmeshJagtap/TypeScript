console.log('Generics in TypeScript');

// Generics intro ------------------------------<<<<

// const fruits: string[] = ['Apple', 'Mango']; // some problem using like this

// const fruits: number = 21;
// const fruits: string = 'Mango';
// const fruits: object = {};
// const fruits: Array = [];

// const fruits: Array<string> = ['Apple', 'Mango'];
// fruits.push('Mango');
// fruits.push(100);  // Argument of type 'number' is not assignable to parameter of type 'string'

// GENERICS DEF :---- >> Generics >> one type connected to other Array<string>

// type Person = {
//   name: string;
//   age: number;
// };
// const boy: Person = {
//   // here boy is an obect with type Person
//   name: 'Shiva',
//   age: 18,
// };
// console.log(boy);
// // const abc: Array<Person> = [{ name: 'Vivek', age: 12, magic: 123 }];
// // Object literal may only specify known properties, and 'magic' does not exist in type 'Person'.
// const abc: Array<Person> = [{ name: 'Vivek', age: 12 }];
// console.log(abc);

// Ex. 2
// function merge(objA: object, objB: object) {
//   return { ...objA, ...objB };
// }
// const res = merge({ name: 'patel' }, { role: 'Software engineer' });
// console.log(res);

// function merge<T, U>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }
// const res = merge({ name: 'patel' }, { role: 'Software engineer' });
// console.log(res);

// function merge<T, U, V>(objA: T, objB: U, objC: V) {
//   return { ...objA, ...objB, ...objC };
// }
// const res = merge(
//   { name: 'patel' },
//   { role: 'Software engineer' },
//   { age: 25 }
// );
// console.log(res);

// 2. Generics Constraints  ------------------------------<<<<

// function createObject<T extends string, U extends number, V extends boolean>(
//   key: T,
//   value: U,
//   isActive: V
// ): { key: T; value: U; isActive: V } {
//   return { key, value, isActive };
// }
// const obj = createObject('age', 25, true);

// function createObject<T, U extends number, V extends boolean>( // If we are not putting any constraints to T, we can pass any type to the function
//   key: T,
//   value: U,
//   isActive: V
// ): { key: T; value: U; isActive: V } {
//   return { key, value, isActive };
// }
// const obj2 = createObject({ name: 'patel' }, 25, true); // Here we can pass any type, we are passing object here
// console.log(obj2);

// 3. Generics Interface  ------------------------------<<<<

// interface Box<T> {
//   value: T;
// }
// const num: Box<number> = { value: 200 };
// console.log(num);

// //-------------------------------
// interface Box<T> {
//   value: T;
// }
// const num2: Box<number> = { value: 200 };
// const numberBox: Box<number> = { value: 2000 };
// const stringBox: Box<string> = { value: 'qwerty' };
// const objBox: Box<object> = {
//   value: { name: 'Stacky Patel', age: 25 },
// };
// console.log(num2);
// console.log(numberBox);
// console.log(stringBox);
// console.log(objBox);

// 4. Generics Default  ------------------------------<<<<

// interface User<T = string> {
//   data: T;
//   status: number;
// }
// const response: User = { data: 'Success', status: 200 };
// const jsonRes: User<object> = { data: { key: 'value' }, status: 200 };

// console.log(response);
// console.log(jsonRes);

// Generic Default with Interface ----

interface User<T = string> {
  data: T;
  status: number;
}

type Person = {
  name: string;
  age: number;
};

const response: User = { data: 'Success', status: 200 };
const jsonRes: User<object> = { data: { key: 'value' }, status: 200 };
const custJsonRes: User<Person> = {
  data: { name: 'ABCD', age: 30 },
  status: 200,
};
console.log(response);
console.log(jsonRes);
console.log(custJsonRes);

// 5. Generics with class

// https://www.youtube.com/watch?v=Ap2s-dA2TQ8  >>  // 4:29:10
// tsc app.ts -w
