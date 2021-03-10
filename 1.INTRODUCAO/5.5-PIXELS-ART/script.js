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
  colorPalette.addEventListener('click', function evento(event) {
    if (event.target.className.includes('color')) {
      const palette = document.getElementsByClassName('color');
      for (let index = 0; index < palette.length; index += 1) {
        palette[index].className = 'color';
      }
      event.target.className += ' selected';
    }
  })
}

function paintPixelBoard() {
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function evento(event) {
    if (event.target.className = 'pixel') {
      let selectedColor = getComputedStyle(document.querySelector('.selected'));
      event.target.style.backgroundColor = selectedColor.backgroundColor;
    }
  })
}

function clearPixelBoard() {
  let buttonClearBoard = document.getElementById('clear-board');
  buttonClearBoard.addEventListener('click', function clear() {
    let board = document.getElementsByClassName('pixel');
    for(let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = '';
    }
  })
}

clearPixelBoard();
createPixelBoard();
selectColor();
paintPixelBoard();
