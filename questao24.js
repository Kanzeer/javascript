//Questão 24: Como você pode adicionar um evento de clique a um elemento HTML em JavaScript?

let botaoRecebe = document.getElementById("nomeTag"); //nome do botão

botaoRecebe.addEventListener("click", function(){ //evento que ocorre quando botão é clicado
    console.log("botao foi clicado")
})