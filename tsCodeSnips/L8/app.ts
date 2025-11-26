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

function merge<T, U, V>(objA: T, objB: U, objC: V) {
  return { ...objA, ...objB, ...objC };
}
const res = merge(
  { name: 'patel' },
  { role: 'Software engineer' },
  { age: 25 }
);
console.log(res);

// 2. Generics Constraints

function createObject( T extend string, U extend number, V extend boolean) {

}

https://www.youtube.com/watch?v=Ap2s-dA2TQ8  >>  // 4:23:13