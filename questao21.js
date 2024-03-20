//Questão 21: Como você pode verificar se um objeto contém uma determinada propriedade em JavaScript?

const termo = {
    termoUm: 'Mclaren',
    termoDois: 'abacaxi'
};

console.log(termo.hasOwnProperty('termoUm')); // retorno True
console.log(termo.hasOwnProperty('velocidade')); // retorno False