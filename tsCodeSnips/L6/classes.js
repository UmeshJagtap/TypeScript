var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Console log statement
// console.log('>>> Lets learn classes and interface in TypeScript 12345 >>>');
// Object.defineProperty(exports, '__esModule', { value: true });
console.log('This is classes - !!12345!!');
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
// Override properties & protected access modifier
// Setters & Getters methods
// Typescript tutorial for beginners
// --https://www.youtube.com/watch?v=Ap2s-dA2TQ8
// 2:36:00
// class Department {
//   public name: string;
//   protected employees: string[];
//   private readonly id: string;
//   constructor(id: string, n: string) {
//     this.name = n;
//     this.employees = [];
//     this.id = id;
//   }
//   describe(this: Department) {
//     console.log(`Department (${this.id}): , ${this.name}`);
//   }
//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }
//   printEmployeeInformation() {
//     console.log('Number of emp: ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// class AccountingDepartment extends Department {
//   // reports: string[] = [];
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//   }
//   addReports(text: string) {
//     this.reports.push(text);
//   }
//   printReports() {
//     console.log(this.reports);
//   }
//   addEmployee(emp: string): void {
//     if (emp === 'Patel') {
//       return;
//     }
//     this.employees.push(emp); // Error: Property 'employees' is protected and is accessile outside class 'Department'
//   }
//   get getReports() {
//     if (this.reports.length > 0) {
//       return this.reports;
//     }
//     throw new Error('Report not found');
//   }
//   set setReports(value: string) {
//     if (!value) {
//       throw new Error('Please pass in a valid value!');
//     }
//     this.reports.push(value);
//   }
// }
// const accDep = new AccountingDepartment('d1', []);
// accDep.addReports('Bugs found in Q1');
// // accDep.printReports();
// // accDep.describe();
// accDep.addEmployee('Umesh AJ');
// accDep.addEmployee('Patel');
// // accDep.printEmployeeInformation();
// // setter & getter
// console.log('getter --> ', accDep.getReports);
// accDep.setReports = 'Code review completed.';
// console.log('getter --> ', accDep.getReports);
// static method ----------------------------<<<<
var Department2 = /** @class */ (function () {
    function Department2(id, n) {
        this.name = n;
        this.employees = [];
        this.id = id;
    }
    Department2.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): , ").concat(this.name));
    };
    Department2.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department2.prototype.printEmployeeInformation = function () {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    };
    Department2.getSalary = function () {
        return { salary: 500000 };
    };
    return Department2;
}());
var salary = Department2.getSalary(); // static method called without creating instance of class i.e. without 'new' keyword
console.log('Static method call --> ', salary);
// abstract classes ----------------------------<<<<
var Department3 = /** @class */ (function () {
    function Department3(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    return Department3;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    Subclass.prototype.describe = function () {
        console.log("Department : (".concat(this.id, ") "));
    };
    Subclass.prototype.displayName = function () {
        console.log('Department name is :', this.name);
    };
    return Subclass;
}(Department3));
var subClass = new Subclass('D1', []);
subClass.describe();
subClass.displayName();
// ------------------------------------------------------ ( classes )
// classes done !!! ---------------- x -----------------
