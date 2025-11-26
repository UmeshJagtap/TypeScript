console.log('Type Guards and Discriminated Unions in TypeScript');
// Type Guards --------------------------<<<<
// type Combinable = string | number;
// type Numeric = number | boolean;
// // "|" this is pipe symbol, here used as Union in TS
// // here Combinable will be assigned either string or number
// type Universal = Combinable & Numeric;
// // "&" this is and symbol, here it is used as Intersection
// function add(a: Combinable, b: Combinable) {
//   // add type guards
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// console.log(add(20, 30));
// console.log(add('30', 30));
// 2. Type Guards for objects
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;
// type UnknownEmployee = Employee | Admin;
// const emp1: ElevatedEmployee = {
//   name: 'Patel MernStack',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name : ', emp.name);
//   // console.log('Privilages', emp.privileges);  // Error : Property 'privileges' does not exist on type 'UnknownEmployee';
//   // start adding type guards
//   // if (typeof emp === 'object') {    // will not work, wrong code
//   //   console.log('Privileges : ', emp.privileges)
//   // }
//   // use in keyword that build in JS
//   if ('privileges' in emp) {
//     console.log(emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log(emp.startDate);
//   }
// }
// printEmployeeInformation(emp1);
// printEmployeeInformation({ name: 'Aman', startDate: new Date() });
// 3. Type Guards in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving a car...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving a truck ...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...', amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehical(vehical) {
    vehical.drive();
    // vehical.loadCargo(500);
    // Error : Property 'loadCargo' does not exist on type 'Vehical'
    // Error : Property 'loadCargo' does not exist on type 'Car'
    if ('loadCargo' in vehical) {
        vehical.loadCargo(500);
    }
    // Other way
    if (vehical instanceof Truck) {
        vehical.loadCargo(5000);
    }
    // console.log(vehical.drive);
}
useVehical(v1);
useVehical(v2);
// type casting  / type assertion  --------------------------<<<<
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
// userInput.value = 'Hi there';
var userInput2 = document.getElementById('input-field');
userInput2.value = 'Hi Patel !!';
console.log(userInput2);
// use any one of the above in the prod code...
