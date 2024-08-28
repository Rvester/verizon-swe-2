console.log('--------- loops ---------');

console.log('--------- for loops ---------');

const nums = [2, 4, 10, 16, 5, 4, 2, 1, 6, 7]
// Goal: find the first odd number in the array
let firstOdd;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
        firstOdd = nums[i];
        break;
    }   
}
console.log(firstOdd)

// Goal: find the sum of only the odd numbers
let sumOdd = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) { // if it's even
        continue;
    }
    sumOdd += nums[i];
}
console.log(sumOdd);

console.log('--------- nested loops ---------');
const nest = [
    [4, 1, 7],
    [2, 8],
    [4, 7, 9, 10],
]

// Goal: add all the numbers in the 2D array
let sum = 0;
for (let row = 0; row < nest.length; row++) { // for every row
    const thisRow = nest[row];
    for (let col = 0; col < thisRow.length; col++) { // for every element in that row
      sum += thisRow[col]
    }
}
console.log(sum)

// Goal: print the pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (let row = 1; row <= 5; row++) {
    let str = "";
    for (let col = 1; col <= row; col++) {
        str += col + " ";
    }
    console.log(str);
}

console.log('--------- while loops ---------');
let i = 1; // initialization
let str = '';
while (i <= 10) { // test
    str += i + " ";
    i++; // increment
}
console.log(str);

console.log('--------- for...of loops ---------');
const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

// Goal: find months that start with a 'J'
const jMonths = [];
for (let month of months) {
    if (month[0] === 'J') {
        jMonths.push(month);
    }
    // console.log(month);
}    
console.log(jMonths);

// Goal: find odd-numbered months
const oddMonths = [];
for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
    const monthNum = monthIndex + 1;
    if (monthNum % 2 == 1) {
        oddMonths.push(`${monthNum}: ${months[monthIndex]}`)
    }
}
console.log(oddMonths)

console.log('--------- for...in loops ---------');

const text = "In the end, we will remember not the words of our enemies, but the silence of our friends." 
// Goal: which word(s) appear most frequently in this text?

const wordFrequencies = {};
const wordArray = text.split(" ");

// collect the frequencies
for (let word of wordArray) {
    // clean up the word
    word = word.toLowerCase();
    if (word[word.length - 1] == '.' || word[word.length - 1] == ',') {
        word = word.slice(0, word.length - 1);
    }

    // add this word frequency
    if (!wordFrequencies[word]) {
        wordFrequencies[word] = 0;
    }
    wordFrequencies[word]++;

}
console.log(wordFrequencies)

// find max frequency
let max = 0;
for (let word in wordFrequencies) {
    if (wordFrequencies[word] > max) {
        max = wordFrequencies[word];
    }
}
console.log(max);

// get a list of all the words with the max frequency
const mostFrequent = [];
for (let word in wordFrequencies) {
    if (wordFrequencies[word] == max) {
        mostFrequent.push(word)
    }
}
console.log(mostFrequent)
