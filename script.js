let res = window.document.querySelector('div#res')
let computador = 0
let jogador = 0

function sortear(){
let min = 1
let max = 100
let dif = max - min
let aleatório = Math.random()
computador = min + Math.trunc(dif*aleatório) 
}

function jogar(){
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if(jogador<computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    }else if (jogador > computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    }else if(jogador == computador){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        window.document.querySelector('div#but').style.visibility = 'hidden'
    }
}

