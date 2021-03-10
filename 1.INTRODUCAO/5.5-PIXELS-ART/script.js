function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);

    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', function (event) {
    if (event.target.className.includes('color')) {
      const palette = document.getElementsByClassName('color');
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].className = 'color';
    }
    event.target.className += ' selected';
  }})
}

function paintPixelBoard() {
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event) {
    if (event.target.className = 'pixel') {
      let selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  })
}

createPixelBoard();
selectColor();
paintPixelBoard();
