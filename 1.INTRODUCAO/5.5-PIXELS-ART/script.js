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
  let colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', function(event) {
    let palette = document.getElementsByClassName('color');
    for (index = 0; index < palette.length; index += 1) {
      palette[index].className = 'color';
    }
    event.target.className += ' selected';
  })
}

createPixelBoard();
selectColor();
