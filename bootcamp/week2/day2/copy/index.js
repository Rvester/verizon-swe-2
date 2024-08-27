#!/bin/node
// an array
// const a = [
//     1,
//     2,
//     3,
//     4,
//     5
// ];
// console.log('a:', a);
// const b = a;
// console.log('b:', b);
// const c = a.slice();
// console.log("c:", c);
// const d = [... a];
// console.log("d:", d);

// console.log("a and b refer to the same array")
// a[2] = 100;
// console.log('a:', a);
// console.log('b:', b);
// console.log("c:", c);
// console.log("d:", d);

// deep copying
const A = [
    {name: 'Annie', age: 21},
    {name: 'Bill', age: 64},
    {name: 'Callie', age: 7},
]
const B = A.slice();
const C = structuredClone(A);
console.log("A:", A)
console.log("B:", B)
console.log("C:", C)

console.log("A and B do not refer to the same array")
A.push( {name:"Diane", age: 83})
console.log("A:", A)
console.log("B:", B)
console.log("C:", C)


A[1].age++;
console.log("A:", A)
console.log("B:", B)
console.log("C:", C)

