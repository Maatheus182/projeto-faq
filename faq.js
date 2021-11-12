// BUSCAR OS ITENS DA TELA
const itensPerguntasERespostas = document.querySelectorAll('.item');


// ENTENDER QUE O ITEM FOI CRIADO
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click',function(){ 

        //VERIFICAR SE O ITEM CLICADO FOI ATIVA
            const estaAtiva = item.classList.contains('ativo')
            
            //SE A PERGUNTA NÃO ESTA ATIVA
                if(!estaAtiva) {
                   // EU PRECISO ANTES FECHAR TODAS ANTERIORES
                    itensPerguntasERespostas.forEach(function(item){
                        item.classList.remove('ativo') 
                    })

                   //ABRIR RESPOSTA ATUAL
                    item.classList.add('ativo')
                }   else{
                    item.classList.remove('ativo')
                }
                       
    })
})


