function createLetter() {
  let botaoGerarCarta = document.getElementById('criar-carta');
  botaoGerarCarta.addEventListener('click', function() {
    let mensagemDigitada = (document.getElementById('carta-texto').value).split(" ");
    for (index = 0; index < mensagemDigitada.length; index += 1) {
      let cartaGerada = document.getElementById('carta-gerada');
      let spanPalavra = document.createElement('span');
      spanPalavra.innerText = mensagemDigitada[index];
      cartaGerada.appendChild(spanPalavra);
    }
  })
}

createLetter();