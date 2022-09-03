Thursday 08/04/2022
Fold An Array exercise
function foldArray(a, n) {
const r = [], c = a.slice();
while (c.length) r.push(c.pop() + (c.shift()
return n - 1 ? foldArray(r, n - 1) : r;
}


Encrypt This! exercise
var encryptThis = function(str) {
if(str === '') {return '';
}else {
let s = str.split(' ');
let x = s.map(element => {
let a = element.split('');
a[0] = element.charCodeAt(0);
[a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
return a.join('');});
return x.join(' ');
}
}
