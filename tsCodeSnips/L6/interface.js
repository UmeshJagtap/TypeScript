// Console log statement
// console.log('Lets learn classes and interface in TypeScript');
console.log('This is interface - !!!12345!!!');
// interface Greetable2 {
//   name: string;
//   greet(text: string): void;
//   salutation(text: string): void;
// }
// class Person implements Greetable, Greetable2 {
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (text) {
        console.log("".concat(text, " ").concat(this.name));
    };
    return Person;
}());
var p1 = new Person('Aman');
p1.greet('Hello there, I am '); // Hello there, I am Aman
// p1.salutation('Good Morning, I am '); // Error: Property 'salutation' does not exist on type 'Person'.
