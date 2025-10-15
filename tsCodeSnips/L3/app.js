// let firstName: string;
// let age: number;
// let isMarried: boolean;
var user = {
    name: 'Umesh',
    age: 29,
    skills: ['JavaScript', 'ReactJS', 'NodeJS'],
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name, " and I am ").concat(user.age, " years old."));
}
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
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
