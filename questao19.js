//Questão 19: Como você pode definir uma função de retorno de chamada (callback) em JavaScript?

function somar(a, b, callback) { //"callback" é um parametro atribuida a uma função
    const resultado = a + b;     
    callback(resultado); 
  }
  
  function imprimirResultado(resultado) { //a "callback" remete ou chama um parametro dito anteriormente, se essa função estiver numa callback
    console.log("resultado: " + resultado);
  }
  
  somar(77, 33, imprimirResultado);
    