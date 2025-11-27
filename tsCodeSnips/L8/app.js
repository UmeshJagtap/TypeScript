console.log('Generics in TypeScript');
var response = { data: 'Success', status: 200 };
var jsonRes = { data: { key: 'value' }, status: 200 };
var custJsonRes = {
    data: { name: 'ABCD', age: 30 },
    status: 200,
};
console.log(response);
console.log(jsonRes);
console.log(custJsonRes);
// 5. Generics with class
// https://www.youtube.com/watch?v=Ap2s-dA2TQ8  >>  // 4:29:10
// tsc app.ts -w
