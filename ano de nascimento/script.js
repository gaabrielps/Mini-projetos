function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var ident = ''

        if (fsex[0].checked) {
            if(idade > 150){
                ident = 'um'
                genero = 'vampiro'
                img.setAttribute('src', 'vamp.png')
                document.body.style.background = 'black'

            } else if (idade >= 0 && idade < 12){
                ident = 'uma'
                genero = 'criança'
                img.setAttribute('src', 'criança.png')
                document.body.style.background = 'red'
                
                //criança
            } else if (idade < 17) {
                ident = 'um'
                genero = 'adolescente'
                img.setAttribute('src', 'adolescente.png')
                document.body.style.background = 'green'
                //adolescente

            } else if (idade < 25) {
                ident = 'um'
                genero = 'jovem adulto'
                img.setAttribute('src', 'jovem.png')
                document.body.style.background = 'purple'
                // jovem adulto
            } else if (idade < 50){
                ident = 'um'
                genero = 'adulto'
                img.setAttribute('src', 'adulto.png')
                document.body.style.background = 'gray'
                //adulto
            }else {
                ident = 'um'
                genero = 'idoso'
                img.setAttribute('src', 'idoso.png')
                document.body.style.background = 'beige'
                //idoso
            }


        } else if(fsex[1].checked) {
            
            if (idade >= 0 && idade < 12){
                ident = 'uma'
                genero = 'criança'
                img.setAttribute('src', 'criança M.png')
                //criança
            } else if (idade < 17) {
                ident = 'uma'
                genero = 'adolescente'
                img.setAttribute('src', 'adolescente M.png')
                //adolecente    

            } else if (idade < 25) {
                ident = 'uma'
                genero = 'jovem adulta'
                // jovem
                img.setAttribute('src', 'jovem M.png')
            } else if (idade < 50){
                ident = 'uma'
                genero = 'adulta'
                img.setAttribute('src', 'adulta M.png')
                //adulto
            }else {
                ident = 'uma'
                genero = 'idosa'
                img.setAttribute('src', 'idosa.png')

                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${ident} ${genero} com ${idade} anos.`
        res.appendChild(img)

    }



}