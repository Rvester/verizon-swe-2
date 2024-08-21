#!/bin/node
/*
    Determine whether the input is a vowel or a consonant
*/
function classify( letter ) {
    letter = letter.toLowerCase();
    let result;

    switch(letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = "vowel";
            break;
        case 'y':
            result = "sometimes";
            break;
        default:
            result = "consonant";
            break;
    }


    return result
}

console.log('A', classify('A'))
console.log('B', classify('B'))

    //  // CONDIITONALS
    // if (letter == 'a' || 
    //     letter == 'e' || 
    //     letter == 'i' || 
    //     letter == 'o' || 
    //     letter == 'u') {
    //     result = "vowel";
    // } else if (letter == 'y') {
    //     result = "sometimes";
    // } else {
    //     result = "consonant";
    // }


    // // JS style
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // if (vowels.includes(letter)) {
    //     result = 'vowel';
    // } else if (letter == 'y') {
    //     result = 'sometimes';
    // } else {
    //     result = 'consonant';
    // }


