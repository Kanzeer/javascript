//Questão 20: Como você pode chamar uma função de retorno de chamada em JavaScript? 

function termo(callback) { //"callback" é um parametro atribuida a uma função
    console.log("insano")

    callback(); //função que chama o primeiro callback e conecta ao escopo global
  }
  
  function minhaCallback() { //função de chamada de retorno
    console.log("maneiro")
  }
  
 termo(minhaCallback)
    