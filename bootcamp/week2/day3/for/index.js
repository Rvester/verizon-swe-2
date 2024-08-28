let str = "abcdef";

console.log("------- for letter in string -------")
for (letter in str) {
    console.log(letter);
}

console.log("------- for letter of string -------")

for (letter of str) {
    console.log(letter);
}

let arr = ['g', 'h', 'i', 'j', 'k'];

console.log("------- for item in array -------")
for (item in arr) {
    console.log(item);
}

console.log("------- for letter of array -------")
for (item of arr) {
    console.log(item);
}

let obj = {"m": 100, "n": 200, "o": 300, "p": 400, "q": 500}

console.log("------- for item in object -------")
for (key in obj) {
    console.log(key, obj[key]);
}

console.log("------- for item of object will give an error-------")
// for (key of obj) {
    // console.log(key, obj[key]);
// }