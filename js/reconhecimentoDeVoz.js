window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak(palavra) {
    chute = palavra.results[0][0].transcript;
    exibeChute(chute);
    validaChute(chute);
}

function exibeChute(chute) {

    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="container__box">${chute}</span>
 `;
}

recognition.addEventListener('end', () => recognition.start())