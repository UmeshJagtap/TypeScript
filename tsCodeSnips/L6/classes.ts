// Console log statement
// console.log('>>> Lets learn classes and interface in TypeScript 12345 >>>');
// Object.defineProperty(exports, '__esModule', { value: true });
console.log('This is classes - !!!!!12335');
// ------------------------------------------------------ ( classes type examples )

// Basic classes  -----------------------------------------------<<<<
// class Department {
//   name: string = 'Accounting';
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }
// }

// // const accounting = new Department(123); // Invalid
// // Argument of type 'number' is not assignable to parameter of type 'string'.

// const accounting = new Department('Accounting'); // Valid
// accounting.describe(); // Department: Accounting

// // const it = new Department('IT'); // Valid
// // it.describe(); // Department: IT

// const accountingCopy = {
//   name: 'Dummy',
//   describe: accounting.describe,
// };
// accountingCopy.describe();

// Access Modifiers (private, public) ----------------------------<<<<

// class Department {
//   public name: string = '';
//   private employees: string[];
//   constructor(n: string) {
//     this.name = n;
//     this.employees = [];
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log('Number of emp: ', this.employees.length); // number of employees
//     console.log(this.employees); // list of employees
//   }
// }

// // const accounting = new Department(123); // Invalid
// // Argument of type 'number' is not assignable to parameter of type 'string'.

// const accounting = new Department('Accounting'); // Valid
// accounting.describe(); // Department: Accounting
// accounting.addEmployee('Umesh');
// accounting.addEmployee('Jagtap');
// accounting.printEmployeeInformation();

// const it = new Department('IT'); // Valid
// it.describe(); // Department: IT
// it.addEmployee('Pravesh');
// it.addEmployee('Patel');
// it.printEmployeeInformation();

// // accounting.employees = ['xyz']; // !!!!! We should not do this, as employess will be overridden. ( happens if employees is public )
// // accounting.printEmployeeInformation(); // We should not be able to do this. Hence use private access modifier.

// Shorthand syntax for constructor ----------------------------<<<<

// class Department {
//   //   public name: string = '';
//   //   private employees: string[];
//   constructor(public name: string, private employees: string[]) {
//     // Shorthand syntax
//     // this.name = n;
//     // this.employees = [];
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log('Number of emp: ', this.employees.length); // number of employees
//     console.log(this.employees); // list of employees
//   }
// }

// const accounting = new Department('Accounting', []); // Valid
// accounting.describe(); // Department: Accounting

// Access Modifiers ( readonly ) ----------------------------<<<<

// class Department {
//   public name: string;
//   private employees: string[];
//   private readonly id: string;
//   constructor(n: string) {
//     this.name = n;
//     this.employees = [];
//     this.id = 'd1'; // readonly property can only be assigned once ( here in constructor )
//   }
//   describe(this: Department) {
//     // this.id = 'd2'; // Error: Cannot assign to 'id' because it is a read-only property.
//     console.log('Department: ' + this.name);
//   }

//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }
//   printEmployeeInformation() {
//     console.log('Number of emp: ', this.employees.length);
//     console.log(this.employees);
//   }
// }

// Inheritence ----------------------------<<<<
// Typescript tutorial for beginners
// --https://www.youtube.com/watch?v=Ap2s-dA2TQ8
// 2:36:00
