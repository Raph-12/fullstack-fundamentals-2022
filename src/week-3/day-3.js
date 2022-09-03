Wednesday 08/03/2022
Valid Parentheses exercise
function validParentheses(parens) {
let openPa = 0;
for ( let i = 0; i < parens.length; i++){
if (parens.charAt(i) == "(" ) {
openPa++;
} else {
openPa--;
}
if (openPa < 0){
return false
}
}
if (openPa === 0){
return true
}
else {
return false}}


Convert String To Camel Case exercise
function toCamelCase(str) {
let result = '';
for (let i = 0; i < str.length; i++) {
if (i != 0 && (str[i - 1] === '_'
result += str[i].toUpperCase();
} else if (str[i] != '-' && str[i] != '_') {
result += str[i];
}
}
return result;
}


Unique In Order exercise
var uniqueInOrder=function(iterable){
let uniques = [];
for(let i=0; i < iterable.length; i++){
let curr = iterable[i]
let next = iterable[i+1];
if (curr !== next){
uniques.push(curr);
}
}
return uniques;
}
