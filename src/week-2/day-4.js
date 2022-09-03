Thursday 07/28/2022
Follow up with the HTML course you started on Tuesday
Remove All Exclamation Marks From The End Of Sentence exercise
function remove (string) {
//Used regular expressions to indicate the process '!' to idicate what to replace, '+' to indicate that is more than one
//and '$' to indicate that is at the end and then to indicate that should be replaced by a space.
return string.replace(/!+$/, '');
}
Vowel Remover exercise
function shortcut (string) {
//We replace the LC letters using .replace and the g for global and we use regex to identify the letter to replace
//
return string.replace(/[aeiou]/g, '');
}
Rock Paper Scissors! exercise
const rps = (p1, p2) => {
if (p1 === p2) return 'Draw!';
if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
return 'Player 2 won!';
};
Persistent Bugger exercise
function persistence(num) {
let counter = 0;
let digits = num.toString().split("");
while (digits.length > 1){
let results = 1;
for(let i = 0; i< digits.length; i++){
results = results * digits[i];
}
digits = results.toString().split("");
counter = counter + 1;
}
return counter;
}
