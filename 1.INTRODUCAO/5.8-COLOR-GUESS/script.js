window.onload = function() {
  colorGeneratorAndToGuess();
}

function colorGeneratorAndToGuess() {
  let circulos = document.getElementsByClassName('ball');
  circulos[Math.floor(Math.random() * 6)].id = 'answer';
  for(index = 0; index < circulos.length; index += 1) {
    circulos[index].style.backgroundColor = 'RGB(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
    if(circulos[index].id === 'answer') {
      let corSelecionada = circulos[index].style.backgroundColor;
      let colorToGuess = document.getElementById('rgb-color');
      colorToGuess.innerText = corSelecionada.replace('rgb', "");
    }
  }
}
