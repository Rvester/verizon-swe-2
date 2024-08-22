#!/bin/node

console.log('--------- arrays ---------');
const things = ['hello', 182, true, null]
console.log('things[1]:', things[1])

things[1] = 41
console.log('things:', things)

things.push(things.shift())
console.log('things:', things)

console.log('--------- two-dimensional arrays ---------');
const grades = [
    ['name', 'score', 'out of', '%'],
    ['arman', 9, 15, 0.6],
    ['bea', 41, 50, 0.82],
    ['cara', 15, 20, null]
]
console.log('grades:')
console.table(grades)

// get bea's row
console.log('grades[2]:', grades[2])
// get bea's score
console.log('grades[2][1]:', grades[2][1])

// change arman's name
grades[1][0] = 'adnan'
console.log('grades[1]:', grades[1])
console.log('grades:')
console.table(grades)

// set cara's percentage
grades[3][3] = grades[3][1] / grades[3][2]
console.log('grades[3]:', grades[3])

// delete bea's row
grades.splice(2, 1)
console.log('grades:')
console.table(grades)

console.log('--------- iterating over two-dimensional arrays ---------');
// iterate over a 2D table, printing each element in order
console.log("grades:")
for (let i = 0; i < grades.length; i++) {
    console.log(`row ${i}:`)
    for (let j = 0; j < grades[i].length; j++) {
        console.log(`    ${grades[i][j]}`)
    }
}