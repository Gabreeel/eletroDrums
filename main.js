function tocaAudio (seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
        elemento.play();
   } else {
        console.log('Elemento não encontrado ou seletor inválido.');
   }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const teclaSelecionada = listaDeTeclas[contador];
    const som = teclaSelecionada.classList[1];
    const idSom = `#som_${som}`;

    teclaSelecionada.onclick = function () {
        tocaAudio(idSom);
    }

    teclaSelecionada.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            teclaSelecionada.classList.add('ativa');
        }
    }

    teclaSelecionada.onkeyup = function () {
        teclaSelecionada.classList.remove('ativa');
    }

}