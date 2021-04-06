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

function checkGenderChoised() {
  const genderRadio = document.getElementById('gender-radio');
  const radioChoised = document.querySelectorAll('input[type=radio]');
  genderRadio.addEventListener('click', () => {
    const checkGenderText = document.getElementById('customGender');
    const form = document.getElementById('facebook-form');
    for (let index = 0; index < radioChoised.length; index += 1) {
      if (radioChoised[index].checked) {
        if (radioChoised[index].id === 'Personalizado' && checkGenderText === null) {
          createCustomGender();
        } else if (radioChoised[index].id !== 'Personalizado' && checkGenderText) {
          form.removeChild(checkGenderText);
        }
      }
    }
  });
}
function createCustomGender() {
  const form = document.getElementById('facebook-form');
  const buttonRegister = document.getElementById('facebook-register');
  const input = document.createElement('input');
  input.id = 'customGender';
  input.placeholder = 'Gênero';
  form.insertBefore(input, buttonRegister);
}

buttonLoginAlert();
checkInfos();
checkRadios();
checkGenderChoised();
