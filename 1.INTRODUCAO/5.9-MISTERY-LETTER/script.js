function createLetter() {
  const botaoGerarCarta = document.getElementById('criar-carta');
  botaoGerarCarta.addEventListener('click', function () {
    const cartaGerada = document.getElementById('carta-gerada');
    if((document.getElementById('carta-texto').value).trim().length === 0) {
      cartaGerada.innerText = '';
      cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
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
      defineClass();
    }
  })
}

function defineClass() {
  let grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  let grupoTamanho = ['medium', 'big', 'reallybig'];
  let grupoRotacao = ['rotateleft', 'rotateright'];
  let grupoInclinacao = ['skewleft', 'skewright'];
  let palavras = document.getElementsByTagName('span');
  for(index = 0; index < palavras.length; index += 1) {
    palavras[index].className = (grupoEstilo[(Math.floor(Math.random()*3)+1)-1]) + ' ' + (grupoTamanho[(Math.floor(Math.random()*3)+1)-1]) + ' ' + (grupoRotacao[(Math.floor(Math.random()*2)+1)-1]) + ' ' + (grupoInclinacao[(Math.floor(Math.random()*2)+1)-1]);
  }
}

function changeClassOnClick() {
  let palavras = document.getElementById('carta-gerada');
  let grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  let grupoTamanho = ['medium', 'big', 'reallybig'];
  let grupoRotacao = ['rotateleft', 'rotateright'];
  let grupoInclinacao = ['skewleft', 'skewright'];
  palavras.addEventListener('click', function(event) {
    if(event.target.parentNode === palavras) {
      event.target.className = '';
      event.target.className = (grupoEstilo[(Math.floor(Math.random()*3)+1)-1]) + ' ' + (grupoTamanho[(Math.floor(Math.random()*3)+1)-1]) + ' ' + (grupoRotacao[(Math.floor(Math.random()*2)+1)-1]) + ' ' + (grupoInclinacao[(Math.floor(Math.random()*2)+1)-1]);
    }
  })
}

createLetter();
changeClassOnClick();
