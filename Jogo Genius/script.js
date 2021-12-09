let order = []; // ordem do jogo que vai aparecer aleatoiramente
let clickedOrder = []; // nossa ordem
let score = 0 // pra saber quando o jogador erra

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//função que vai sortear a ordem entre 0 e 3 (as cores)

//criando ordem aleátoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4) //irá guardar um numero aleatório em cada rodada
    order[order.length] = colorOrder;
    clickedOrder = [];
    for( let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1 );
    
    }

}
//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões clicaods são os mesmos da ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel()
    }
}

//função para o click do usuário 
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout (() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green
    } else if(color ==1 ) {
        return red;
    }else if (color == 2) {
        return yellow 
    } else if (color == 3){
        return blue
    }
}


// função para nosso próximo nivel do jogo

let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//função para game over

let gameOver = () => {
    alert(`Pontuação: ${score}\n você perdeu o game. Clique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

// iniciar o jogo
let playGame = () => {
    alert('bem vindo ao jogo, iniciando novo jogo')
    score = 0;
    nextLevel();
}

green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);




playGame();


