function buttonLoginAlert() {
  const buttonLogin = document.getElementById('button-login');
  const emailPhoneInput = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', () => {
    alert(emailPhoneInput.value);
  });
}

function checkInfos() {
  const buttonRegister = document.getElementById('facebook-register');
  const invalidMessage = document.createElement('p');
  invalidMessage.innerText = 'Campos inválidos';
  buttonRegister.addEventListener('click', (evt) => {
    const inputs = document.querySelectorAll('#facebook-form input');
    for (let index = 0; index < 4; index += 1) {
      if (inputs[index].value === '') {
        evt.preventDefault();
        buttonRegister.parentNode.appendChild(invalidMessage);
      }
    }
  });
}

function checkRadios() {
  const buttonRegister = document.getElementById('facebook-register');
  const invalidMessage = document.createElement('p');
  invalidMessage.innerText = 'Campos inválidos';
  buttonRegister.addEventListener('click', (evt) => {
    const input = document.querySelector('input[type=radio]:checked');
    if (input === null) {
      evt.preventDefault();
      buttonRegister.parentNode.appendChild(invalidMessage);
    }
  });
}

buttonLoginAlert();
checkInfos();
checkRadios();
