/Make the deadfish swinm
// Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long:
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

function parse( data )
{
var response = [];
var num = 0;
data.split("").forEach(function(val) {
if (val == "d") {
  num--;
} else if (val == "i") {
  num ++;
} else if (val == "s") {
  num = num*num;
} else if (val == "o") {
  response.push(num);
}
});
return response;
}


/ Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
// Set - MDN
//what number and how many times appear
const map = new Map();

for(let i = 0; i<A.length; i++){
  if(!map.has(A[i])) map.set(A[i], 1);
  else {
    map.set(A[i], map.get(A[i]) + 1)
  } 
} for(let [key, value] of map){
  if (value % 2 !== 0) return key
}
  return 0;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]),5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]),-1)
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]),5)
console.log(findOdd([10]),10)
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]),10)
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]),1)
