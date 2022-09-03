Wednesday 07/27/2022
//Holiday VIII - Duty Free exercise
const dutyFree = (normPrice, discount, hol) => Math.floor((hol / normPrice / discount) * 100);

//Twice As Old exercise
function twiceAsOld(dadYearsOld, sonYearsOld) {return Math.abs(dadYearsOld-sonYearsOld*2);}

//Valid Spacing exercise
//Contar los espacios validos no se puede repetidos ni al inicio ni al final
function validSpacing(s) {
//Aca se verifica si hay espacio al inicio
if(s[0] == ' ') return false
//Aca se verifica si hay espacipos al final se pone la palabray se use lenght para que se
//recorra y se pone -1 para que se vaya hasta la ultima parte
if(s[s.length-1] == ' ') return false
//Contar las palabras que tiene la frase
const words = s.split(' ').length
//Luego contar los espacios entre las palabras
const spaces = s.split('').filter(char => char==" ").length
return (words - spaces === 1)
}

//Fake Binary exercise
function fakeBin(x){
return x.split('').map(y => y < 5? 0 : 1).join('')
}
