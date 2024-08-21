#!/bin/node

console.log('--------- comparison operators ---------');

console.log('--------- greater than ---------');
console.log("9 > 2:", 9 > 2);
console.log("23 > 43:", 23 > 43);

console.log('--------- less than ---------');
console.log("12 < 4:", 12 < 4);
console.log("8 < 10:", 8 < 10);

console.log('--------- loosely equals ---------');
console.log('3 == "3":', 3 == "3");
console.log('8 == 4:', 8 == 4);

console.log('--------- strictly equals ---------');
console.log('3 === "3":', 3 === "3");
console.log('8 === 8:', 8 === 8);

console.log('--------- greater than or loosely equal to ---------');
console.log('9 >= "9":', 9 >= "9");
console.log('23 >= 15:', 23 >= 15);
console.log('24 >= 31:', 24 >= 31);
console.log('30 >= "90":', 30 >= "90");

console.log('--------- less than or loosely equal to ---------');
console.log('9 <= "9":', 9 <= "9");
console.log('8 <= 12:', 8 <= 12);
console.log('7 <= "4":', 7 <= "4");
console.log('12 <= 9:', 12 <= 9);

console.log('\n--------- logical operators ---------');

console.log('--------- and ---------');
console.log("true && false:", true && false);
console.log("true && true:", true && true);
console.log("false && true:", false && true);
console.log("false && false:", false && false);

console.log('--------- or ---------');
console.log("true || false:", true || false);
console.log("true || true:", true || true);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

console.log('--------- not ---------');
console.log("!true:", false);
console.log("!false:", true);

console.log('\n--------- conditional statements ---------');

console.log('--------- if with numbers ---------');
let num = 25;
if(num > 21){
    console.log("Great, let's go to a bar!")
}

console.log('--------- if with strings ---------');
let word = "Software Engineer";
if(word.includes("Software")){
    console.log("I love Software! Software is Amazing!");
}

console.log('--------- if with boolean values ---------');
if(true){
    console.log("We are in the IF Block whenever an expression is true");
}

console.log('--------- if with && ---------');
let word2 = "Learn Coding";
if(9 > 7 && word2.includes("Learn")){
    console.log("Cool! We Passed the Logical Operator AND Expression to Be Here.");
}

console.log('--------- if with || ---------');
let word3 = "Listen to Music";
if(word3.includes("Music") || 9 < 8){
    console.log("Cool! We passed the Logical Operator OR Expression to Be Here.")
}

console.log('--------- if with ! ---------');
let word4 = "You can't see me";
if(!word4.includes("never")){
    console.log("That word isn't in the String!");
}

console.log('--------- if/else with numbers ---------');
let number = 19;
if(number > 21){
    console.log("Great, let's go to a bar!")
}else{
    console.log("Let's not go to the bar")
}

console.log('--------- if/else/else if ---------');
let words2 = "Learn Coding";
if(9 > 7 && !words2.includes("Learn")){
    console.log("Cool! We Passed the Logical Operator AND Expression to Be Here.");
}else if(true || false){
    console.log("Cool, we made it to the Else IF block because the first IF did not pass, but this one did before going to the Else");
}else{
    console.log("If we are here, it's because nothing else passed. The IF or the Else IF");
}

console.log('--------- ternary ---------');
let age = 9;
// if (age > 21) {
//     console.log("Let's definitely go to a bar")
// } else {
//     console.log("Let's not go to a bar")
// }
console.log(`Let's ${age > 21 ? "definitely" : "not" } go to a bar`);

console.log('--------- nested ternary ---------');
// if (age > 21) {
//     console.log("Let's go to a bar")
// } else if (age > 13) {
//     console.log("Let's go to a movie");
// } else {
//     console.log("Let's go to a park");
// }
console.log(`Let's go to a ${
    age > 21
    ? "bar"
    : age > 13
    ? "movie"
    : "park"
}`);