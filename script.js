function gerarnumeroaleatorio() {
    const numeroaleatorio = (math.random() * 11)
    return numeroaleatorio
}

function jogar() {
    const numero = geraAleatorio()
    const palpite = ''

    do {
        palpite = parseInt(prompt('Adivinhe o número'))
        if (palpite != nuemro) {
            tentativas--

            alert(`Seu lixo, vc errou. Nem tentar de novo voce ainda tem $(tentativas > 1 ? "tentativas" = "tentativas").`)
        }
        else {
            alert(`Parabens! o numero era : $(numero)`)
            return
        }
    }
    while (palpite != numero)
    alert('Finalmente você acertou')
}


jogar()