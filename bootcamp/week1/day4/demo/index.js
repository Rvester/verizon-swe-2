#!/bin/node

console.log('--------- functions ---------');

console.log('--------- write and call ("invoke") ---------');
function sayHello() {
    console.log("Hello World!")
}
sayHello();

console.log('--------- parameters vs arguments ---------');
function sayWord(word) {
    console.log(word);
}
sayWord("Code")
sayWord("Bootcamp")

console.log('--------- return vs console.log ---------');
function printMV() {
    console.log("Multiverse")
}
printMV()
function returnMV() {
    return "Multiverse"
}
returnMV()
console.log(returnMV())

function remainder(x, y) {
    return x % y
}
console.log(remainder(10, 3))
const max = Math.max(remainder(100, 7), remainder(70, 4));
console.log(max)

console.log('\n--------- debugging ---------');
console.log('--------- syntax errors ---------');
// le error1 = "Multiverse"; 
let error1 = "Multiverse"; // error resolution

// let error2 -> "Multiverse";
let error2 = "Multiverse"; // error resolution

// let error3 = "Multiverse;
let error3 = "Multiverse"; // error resolution

console.log('--------- reference errors ---------');
// let error4 = True;
let error4 = true;  // error resolution

let error5 = 9;
// console.log(err5)
console.log(error5) // error resolution

console.log('--------- reference errors ---------');
const error6 = 10;
// error6 = 11; // resolution could vary

let error7 = 11;
// console.log(error7.length()) // resolution could vary