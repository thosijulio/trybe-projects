function createLetter() {
  const botaoGerarCarta = document.getElementById('criar-carta');
  botaoGerarCarta.addEventListener('click', function () {
    const cartaGerada = document.getElementById('carta-gerada');
    if((document.getElementById('carta-texto').value).trim().length === 0) {
      cartaGerada.innerText = '';
      cartaGerada.innerText = 'Por favor, digite o conteúdo da carta';
    }
    else {
      for(let index = 0; index < cartaGerada.childElementCount; index += 1) {
        cartaGerada.innerHTML = '';
      }
      let mensagemDigitada = (document.getElementById('carta-texto').value).split(' ');
      for (let index = 0; index < mensagemDigitada.length; index += 1) {
        const spanPalavra = document.createElement('span');
        spanPalavra.innerText = mensagemDigitada[index];
        cartaGerada.appendChild(spanPalavra);
      }
    }
  })
}

createLetter();
