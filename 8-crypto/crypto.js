let word = 'password';
let word2 = 'password';
const encoderWord = crypto(word);
// console.log(check(encoderWord, word2));




function crypto(word) {
    let lenWord = (word.length) / 2;
    let partWord1 = word.split('');
    partWord2 = partWord1.splice(lenWord);
    partWord1.reverse(); partWord2.reverse();
    let encoderWord = partWord1.join('') + partWord2.join('');
    return encoderWord;
}

console.log(crypto(word));

function check(encoderWord, word2) {
    let reverseWord = crypto(encoderWord);
    if (reverseWord === word2) {
        return true;
    }
    else return false;
}
console.log(check(encoderWord, word2));
