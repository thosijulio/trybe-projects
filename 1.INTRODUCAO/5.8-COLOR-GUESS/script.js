window.onload = function() {
  colorGenerator();
}

function colorGenerator() {
  let circulos = document.getElementsByClassName('ball');
  for(index = 0; index < circulos.length; index += 1) {
    circulos[index].style.backgroundColor = 'RGB(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
  }
}