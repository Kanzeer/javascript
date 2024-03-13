//Questão 4: Qual é a diferença entre == e === em JavaScript?

let num1 = 1;
let num2 = "um";

console.log(num1 === num2);
console.log(typeof num1);
console.log(typeof num2);

console.log(num1 == num2); //igualdade ampla. ignora os "tipos" de variaveis
console.log(num1 === num2); //igualdade estrita. difere os "tipos" de variaveis