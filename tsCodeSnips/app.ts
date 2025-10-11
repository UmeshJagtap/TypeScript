// Removed duplicate add function implementation to avoid errors

// TS add Function
// number, string, boolean

// Ensure only one implementation of the addNumbers function exists
function addFunc(
  num1: number,
  num2: number,
  printResult: boolean,
  someText: string
) {
  if (printResult) {
    console.log(`${someText} ${num1 + num2}`);
  }
  return num1 + num2;
}

// const n1 = '20';
const n1 = 20; //number
const n2 = 300; //number

const printResult = true;
const someText = 'Sum of the two numers is = ';

const result = addFunc(n1, n2, printResult, someText);
console.log(result);

// const n1 = '20';
// const n2 = 30;
// const ans1 = '2030';

// const n1 = true;
// const n2 = 30;
// const ans2 = 31;
