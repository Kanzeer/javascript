//Questão 8: Como você pode acessar o último elemento de um array em JavaScript?

let frutas = ["Maçã", "Banana", "Kiwi", "Laranja"] //"frutas" é uma denomição dada a um array que armazena seus itens dentro do "[ ]"

let contagem = frutas.length - 1;
//array's costumam começar sua contagem pelo 0. "contagem" serve para contar a quantidade de itens presentes no armazenamento. Sua representação é em numeros
let elemento = frutas[contagem];
//"elemento" tem a mesma função do "contagem", porém ele representa seus itens pelos respectivos nomes

console.log(elemento)