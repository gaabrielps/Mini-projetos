function carregar(){

    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    let res = document.querySelector('div#res')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    res.innerHTML = ''
    

    if (hora > 4 && hora < 12){
        // bom dia
        res.innerHTML = 'Bom dia!'
        img.src = 'dia.png'
        document.body.style.background = '#debc8e'  // ver por que as cores não querem mudar, assim como as fotos

    } else if (hora < 17){
        // boa tarde
        res.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#c36c2c'
        
    } else {
        res.innerHTML = 'Boa noite!'
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#322944'
    }
    
































}