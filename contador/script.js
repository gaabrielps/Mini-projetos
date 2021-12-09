function carregar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] TENTE NOVAMENTE')
        res.innerHTML = `<br><strong>Impossível fazer a contagem</strong>`
    } else {

         res.innerHTML = 'contando: '
         let i = Number(inicio.value) // para converver o tipo para Number, o idel é fazer uma nova variavel
         let f = Number(fim.value)
         let p = Number(passo.value)
         

        if (i < f){
            //contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`                       // '+=' usado para CONCATENAR
        }
    } else {
        //contagem decrescente
        for (let c = i; c >= f; c -=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }

        res.innerHTML += `\u{1F3C1}`
         }



        }
        
    
