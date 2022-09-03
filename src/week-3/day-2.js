Tuesday 08/02/2022
Simple Pig Latin exercise
function pigIt(str) {
return str.replace(/(\w)(\w*)(\s
}
Counting Duplicates exercise
function duplicateCount(text){
let count = 0;
let obj = {};
for (let i of text){
i = i.toLowerCase()
if (!obj[i]){
obj[i]=1
} else{
obj[i]++
}}
for (let i in obj){
if (obj[i] > 1){
count++
}
}
return count
}
  
  
Decode The Morse Code exercise
decodeMorse = function(morseCode){
function decodeMorseLetter(letter) {
return MORSE_CODE[letter];
}
function decodeMorseWord(word) {
return word.split(' ').map(decodeMorseLetter).join('');
}
return morseCode.trim().split(' ').map(decodeMorseWord).join(' ');
}
