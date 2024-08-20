#!/bin/node

console.log('--------- variables ---------');

// variable declaration (no assignment)
let imNotSure;
console.log("imNotSure:", imNotSure);

// variable declaration with assignment
let favoriteNum = 6
console.log("favoriteNum:", favoriteNum)

// can reassign variables
favoriteNum = 9
console.log("favoriteNum:", favoriteNum)

// attempting to access a variable before declaration is an error
// console.log("notHere:", notHere);

console.log('--------- constants ---------');

// constants cannot be "defaulted to undefined"
// const cantDoThis;

// constant declaration and assignment
const funStr = "JavaScript is fun!"
console.log('funStr:', funStr)

// can't change a constant
// funStr = "no it isn't"

console.log('--------- strings ---------');

// empty string
let str = '';
let str2 = "";
console.log("str:", str);
console.log("str2:", str2);

// initialize a string with characters in it
let str3 = " ";
let str4 = "#$#@$";
let str5 = "Multiverse";
let str6 = "123234";

// initialize a string within a string
let str7 = "Shakespeare said 'To be, or Not to be. That is the Question.'";
let str8 = 'Steve Jobs said "Everyone should learn to program computers. It teaches you how to think."'
console.log("str7:", str7)
console.log("str8:", str8)

// template strings
let str9 = `the value of str6 is "${str6}"`;
console.log("str9:", str9)

console.log("typeof(str9) is ", typeof(str9))

console.log('--------- numbers ---------');

// initialize different types of numbers
let num1 = 9
let num2 = 99.9
let num3 = -15
let num4 = -19.99
console.log("num1:", num1, "num2:", num2, "num3:", num3, "num4:", num4);

console.log(`typeof num1 is ${typeof(num1)}`)

console.log('--------- booleans ---------');

// initialize a boolean
let bool1 = true;
let bool2 = false;
console.log(`typeof(bool1) is ${typeof(bool1)}`)

console.log('--------- undefined ---------');
// undefined is a type as well as a value

// declare without initializing
let undef1;
console.log("undef1:", undef1);
console.log("typeof(undef1):", typeof(undef1))

// explicitly set to undefined
let undef2 = undefined;
console.log("undef2:", undef2);
console.log("typeof(undef2):", typeof(undef2))

console.log('--------- null ---------');
// null is an object without any reference
let item1 = null;
console.log("item1:", item1);
console.log("typeof(item1):", typeof(item1))

console.log('--------- expressions ---------');

// you can use expressions in many places
// you can pass expressions to functions
console.log(9);
console.log(9 === 11);
console.log(true)
console.log("I " + "am " + "hungry")

// save expressions in variables
let num5 = num2 + num3;
console.log("num5:", num5)
let bool3 = num2 < num3;
console.log("bool3:", bool3);

// NOT everything is an expression
let me = "developer" // <-- this is a statement
// console.log(let me1 = 'debugger')