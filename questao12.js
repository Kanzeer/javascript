//Questão 12: Como você pode iterar por meio de um array em JavaScript usando um loop for? 

function contarAte(numero) {
    for(let i = 1; i <= numero; i++) { //"i" é o nosso "x", ele não tem um valor determinado, mas ele pode ser menor ou igual a quantidade que queremos
        console.log("Contagem: ", i);

    }
}
contarAte(5)
//"contarAte" é utilizado para denominar uma quantidade de numeros, no caso é 5 o maximo