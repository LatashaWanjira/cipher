var sentence = prompt("Please enter a sentence:");
var lastLetter = sentence.charAt(sentence.length -1).toUpperCase();
var firstLetter = sentence.charAt(0).toUpperCase();
var outputSentence = alert((firstLetter + lastLetter));
var outputSentence2 = alert((lastLetter + firstLetter));
var numberOfLetters = sentence.charAt((sentence.length /2).toFixed());

// combining first and last letter variables
function combine() {
    return firstLetter + lastLetter;
};

function reverseCombine() {
    return lastLetter + firstLetter;
};

function bothCombine() {
  return sentence + combine() + reverseCombine();

};

function countLetters() {
    return numberOfLetters + bothCombine();
};

function reverseString() {
    return countLetters().split("").reverse().join("");
}
reverseString();
