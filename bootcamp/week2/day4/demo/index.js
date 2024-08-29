console.log("------- recursive isEven -------")

// GOAL: write isEven without modulo, using recursion
function isEven(n) {
    // base case: 0 is an even number, but 1 is an odd number
    // idea: subtract 2 a bunch of times?
    // recursive case: return isEven(n - 2)
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}
console.log(19, isEven(19))
// console.log(10000000, isEven(10000000))

console.log("------- recursive printString -------")
// GOAL: print a string, letter by letter
function printString(str) {
    if (str.length > 0) {
        console.log(str.slice(str.length - 1))
        printString(str.slice(0, str.length - 1))
    }
}
printString("hello world")

console.log("------- iterative flatten 2D array -------")
// GOAL: Flatten a 2D array
const array2D = [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2']
]
console.log(array2D)
function flatten2(arr) {
    // make a new array
    const flatArr = [];
    // loop over every row
    for (let row = 0; row < arr.length; row++) {
    //   loop over every column
        for (let col = 0; col < arr[row].length; col++) {
    //     put the element into my new array
            flatArr.push(arr[row][col])
        }
    }

    // return the new array
    return flatArr
}
console.log(flatten2(array2D))

console.log("------- recursive flatten nested array -------")
// GOAL: Flatten an array which contains sub-arrays of any nested level
const array = [
    [1, [2, 3]],
    [[4], [5, [6, 7, [8, 9]]]],
    10
]
console.log(array)

// returns an array full of elements that are not arrays
function flatten(thing) {
    // if this is an array, flatten every element in it
    // if not, just return the value
    console.log(`flattening`, thing)

    if (typeof(thing) != "object") { // this thing is not an array
    console.log(`noticed ${thing} is not array`)
        return [ thing ];
    }

    // otherwise - recurse, by flattening each element in our array
    console.log(`flattening everything in the array`)
    let flatArr = [];
    for (let i = 0; i < thing.length; i++) {
        console.log(i);
        flatArr = flatArr.concat(flatten(thing[i]));
    }
    console.log(`returning`, flatArr)
    return flatArr;
}
console.log(flatten([ [1, 2], 3]))
// console.log(flatten(array))
// console.log(flatten2(array))
