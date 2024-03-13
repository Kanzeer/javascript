// Declaração de uma variável
//let nome; // Escopo de bloco
var idade; // Escopo global
const PI = 3.14; // Escopo de global

function soma() {
  if(true) {
    var nome = "kampf"
    console.log(nome)
  }

  nome = "death"
  console.log(nome)
}
soma()