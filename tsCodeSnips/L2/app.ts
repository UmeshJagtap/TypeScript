// Object, Array, Tuble, Enum

// --------------------------------------------------<< Object >>
// const person: {
//   firstName?: string;
//   lastName?: string;
//   age: number;
//   xyz: {
//     address: string;
//   };
// } = {
//   firstName: 'John',
//   //   lastName: 'Patel',
//   age: 30,
//   xyz: { address: 'Mumbai' },
// };

// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person.age);

// --------------------------------------------------<< Array >>
// const personObj: {
//   firstName?: string;
//   lastName?: string;
//   age: number;
//   skills?: string[];
//   numbers?: (string | number)[];
// } = {
//   firstName: 'John',
//   lastName: 'Patel',
//   age: 30,
//   skills: ['Reacts', 'Nodejs'],
//   numbers: [1, 'Two', 3, 'Four'],
// };

// let favouriteLanguage1: string[];
// favouriteLanguage1 = ['JavaScript'];

// let favouriteLanguage2: any[];
// favouriteLanguage2 = ['Hindi', 'English', 'JavaScript', 21, true];

// console.log(personObj);

// --------------------------------------------------<< Tuple >>

// const personn: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   product: [number, string]; // fixed array of two types 0 -> number, 1 -> string
// } = {
//   name: 'Jagtap',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   product: [14, 'Macbook M2'],
// };
// console.log((personn.product = [10, 'Iphone 14'])); // Valid
// console.log((personn.product = ['Iphone 14', 'Macbook Air M2'])); // Invalid

// --------------------------------------------------<< Enum >>

enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY_USER,
}
const person2 = {
  name: 'Jagtap',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  product: [14, 'Macbook Air M2'],
  //   role: Role.ADMIN,
  role: Role.AUTHOR,
};

if (person2.role === Role.AUTHOR) {
  console.log('Author');
} else if (person2.role === Role.ADMIN) {
  console.log('Admin');
} else {
  console.log('Read only user');
}
console.log(person2);
