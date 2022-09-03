Monday
Who Likes It? exercise
function likes (names) {
return {
0 : 'no one likes this',
1 : ${names[0]} likes this,
2 : ${names[0]} and ${names[1]} like this,
3 : ${names[0]}, ${names[1]} and ${names[2]} like this,
4 : ${names[0]}, ${names[1]} and ${names.length - 2} others like this,
}[Math.min(4, names.length)]
}
Bit Counting exercise
var countBits = function(n) {
n = n.toString(2).replace(/0/g, '').split('');
let count = 0;
for(let i = 0; i<n.length; i++){
count += parseInt(n[i])
}
return count;
};
Your Order, Please exercise
function order(words){
return words.split(' ').sort(function(word1, word2){
return word1.match(/\d/) - word2.match(/\d/);
}).join(' ')
return order
}
