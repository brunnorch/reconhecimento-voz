function validaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        /* Não é um numero */
        elementoChute.innerHTML += `
        <div class="container__resultado">O chute não é um número válido</div>
        `;
        return
    }

    if (numeroInvalido(numero)) {
        /* fora do parametro do jogo */
        elementoChute.innerHTML += `
        <div class="container__resultado">O chute não está dentro do parametro válido</div>
        `;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1 class="container__titulo">Você acertou!</h1>
        <h3 class="container__texto">O número secreto era ${numeroSecreto}</h3>
        <button class="container__btn" id="jogar">Jogar novamente</button>
        `;

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
`;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor;

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar') {
        window.location.reload()
    }
})