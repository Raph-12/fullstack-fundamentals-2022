Tuesday 07/26/2022
Multiply exercise:
multiply = function (a, b) {
return a * b;
}
ASCII Total exercise
function uniTotal (string) {
return string.split('').reduce((prev,curr) => prev + curr.charCodeAt(), 0)
}
Char From ASCII Value exercise
function getChar(c){
let ascii = String.fromCharCode(c)
return ascii;
}
Binary Addition exercise
function addBinary(a,b){
Description:
Convert an integer number into binary 1's and 0's string! Dealing only with positive integers, the input number should be able to be converted to a binary string with a leading zero!
In binary, the left-most digit represents the sign of the binary number: 0 for positive, 1 for negative (using 2's complement, but that's another story)
let total = a + b;
return total===0?'0':''+total.toString(2)
}
Student's Final Grade exercise
function finalGrade (exam, projects) {
function finalGrade (exam, projects) {
if (exam >90
  return 100;
} else if (exam >75 && projects >=5){ return 90; } else if (exam > 50 && projects >=2){ return 75; } else { return 0; } }
