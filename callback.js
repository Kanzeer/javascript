function minhaFuncao(callback) {
    console.log("Executando logica na minhaFuncao")

    setTimeout(function(){
        console.log("Operação assincrona concluida!")

        // Chamando callback
        callback();
    }, 2000)
}

function minhaCallback() {
    console.log("callback executada!")
}

minhaFuncao(minhaCallback)