//Questão 13: Como você pode verificar se um valor está contido em um array em JavaScript? 

const numeros = [1, 4, 8, 16, 32, 64];

const procurar = numeros.find((element) => element > 33); //"find" é utilizado para achar um desejado valor ou aproximado
                                                          //exemplo: queremos um numero que seja igual ou maior que 33, esse sendo 64 o mais aproximado

console.log(procurar);