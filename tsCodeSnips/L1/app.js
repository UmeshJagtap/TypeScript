// Removed duplicate add function implementation to avoid errors
// TS add Function
// number, string, boolean
// Ensure only one implementation of the addNumbers function exists
function addFunc(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    return num1 + num2;
}
// const n1 = '20';
var n1 = 20; //number
var n2 = 300; //number
var printResult = true;
var someText = 'Sum of the two numers is = ';
var result = addFunc(n1, n2, printResult, someText);
console.log(result);
// const n1 = '20';
// const n2 = 30;
// const ans1 = '2030';
// const n1 = true;
// const n2 = 30;
// const ans2 = 31;
