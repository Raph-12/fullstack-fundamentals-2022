//Thursday 07/21/2022
Print the even numbers
Used the parseint so when I get the number using the prompt will take it and then use it to find the pair numbers.
let n1, i;
i = 2;
n1 = parseInt(prompt('Ingrese el numero'));
do{
document.write("
" + i);
i += 2;
} while(i<=n1);

//Bad Code exercise 1
var cond = false;
if (cond == true) {
console.log('The cond variable is true');
} else {
console.log('The cond variable is false');
}
This is the solution, in the if part should just 1 set of () and also missed one = and should have been 2 to compare

//Bad Code exercise 2
var n = 100;
if (n == 100) {
console.log('This is a special number!');
}else if (n < 1000 && n % 10 == 0) {
console.log('This number is almost special');
} else {
console.log('Just a regular number');
}
//The code was bad because could have been shorter and also changing the stucture for one more understandable.
