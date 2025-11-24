// Console log statement
// console.log('Lets learn classes and interface in TypeScript');
console.log('This is interface - !!!12345!!!');

// -------------------------------------------------- ( Interface )
// interface examples  --------------------------<<<<

// interface Person {
//   //   name: string = "John Doe";  // Error: An interface property cannot have an initializer.
//   name: string; // Ends with semicolon
//   age: number;
//   greet(text: string): void;
// }

// let user: Person;
// // here user will be an object of type Person
// user = {
//   name: 'John Doe', // ends with comma
//   age: 30,
//   greet(text) {
//     console.log(`${text} ${this.name}`);
//   },
//   // displayUser() // Error: Object literal may only specify known properties, and 'displayUser' does not exist in type 'Person'.
// };

// console.log(user);
// user.greet('Hi there, I am '); // Hi there, I am John Doe

// -------------------------------------------------- ( type vs interface )
// We can use type as well
// type Person = {
//   name: string; // Ends with semicolon
//   age: number;
//   greet(text: string): void;
// };

// When to use type vs interface ?
// 1. If you want to define a custom type for an object structure, use interface.
// 2. If you want to create a union or intersection type, use type.
// 3. If you need to use advanced type features like mapped types or conditional types, use type.
// 4. If you want to take advantage of declaration merging, use interface.

// type Combinable = string | number;
// interface Person {
//   name: string;
//   age: number;
//   greet(text: string): void;
// }

// <<------ can be used to implement multiple interfaces ------<<<<
// interface Greetable {
//   name: string;
//   greet(text: string): void;
// }
// interface Greetable2 {
//   name: string;
//   greet(text: string): void;
//   salutation(text: string): void;
// }

// class Person implements Greetable, Greetable2 {
//   // class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text} ${this.name}`);
//   }
//   salutation(text: string): void {
//     console.log(`${text} ${this.name}`);
//   }
// }

// const p1 = new Person('Aman');
// p1.greet('Hello there, I am '); // Hello there, I am Aman
// p1.salutation('Good Morning, I am Mr.'); // Good Morning, I am Mr. Aman

//---------------- readonly property in interface --------------<<<<

// interface Greetable {
//   readonly name: string;
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   // class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text} ${this.name}`);
//   }
// }

// // const p1 = new Person('Bamon');
// // p1.greet('Hello there, I am '); // Hello there, I am Bamon

// let user1: Greetable;
// user1 = new Person('Patel');
// user1.name = 'New Name'; // Error: Cannot assign to 'name' because it is a read-only property.

// Extending interfaces --------------------------<<<<

// interface Named {
//   readonly name: string;
// }
// interface AnotherInterface {}

// interface Greetable extends Named, AnotherInterface {
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text} ${this.name}`);
//   }
// }

// let user1: Greetable;
// user1 = new Person('Patel');
// console.log(user1);
// user1.greet('Hello there, I am '); // Hello there, I am Patel

// ( type / interface ) --------------------------<<<<

// // type addFun = (a: number, b: number) => number;
// // OR
// interface addFun {
//   (a: number, b: number): number;
// }

// let add: addFun;

// // add = (n1: number, n2: number, n3: number) => {  // Error: Type '(n1: number, n2: number, n3: number) => number' is not assignable to type 'addFun'.
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// console.log(add(5, 10)); // 15

// optional ( ? ) --------------------------<<<<

interface Named {
  readonly name: string;
  outputName?: string; // optional property, may or may not be present
}
class Person implements Named {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
