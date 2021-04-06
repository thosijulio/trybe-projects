const buttonRegister = document.getElementById('facebook-register');

function buttonLoginAlert() {
  const buttonLogin = document.getElementById('button-login');
  const emailPhoneInput = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', () => {
    alert(emailPhoneInput.value);
  });
}

function checkInfos() {
  const invalidMessage = document.createElement('p');
  invalidMessage.innerText = 'Campos inválidos';
  invalidMessage.id = 'invalid-form';
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

function createCustomGender() {
  const form = document.getElementById('facebook-form');
  const input = document.createElement('input');
  input.id = 'customGender';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero';
  form.insertBefore(input, buttonRegister);
}

function cCheckGenderChoised(radioChoised) {
  const checkGenderText = document.getElementById('customGender');
  const form = document.getElementById('facebook-form');

  if (radioChoised.id === 'Personalizado' && checkGenderText === null) {
    createCustomGender();
  } else if (radioChoised.id !== 'Personalizado' && checkGenderText) {
    form.removeChild(checkGenderText);
  }
}

function checkGenderChoised() {
  const genderRadio = document.getElementById('gender-radio');
  const radioChoised = document.querySelectorAll('input[type=radio]');
  genderRadio.addEventListener('click', () => {
    for (let index = 0; index < radioChoised.length; index += 1) {
      if (radioChoised[index].checked) {
        cCheckGenderChoised(radioChoised[index]);
      }
    }
  });
}

const firstName = document.getElementById('firstname');
const form = document.getElementsByClassName('right-content');
const lastName = document.getElementById('lastname');
const emailPhone = document.getElementById('phone_email');
const birthDate = document.getElementById('birthdate');

function exercicio20() {
  buttonRegister.addEventListener('click', (evt) => {
    const gender = document.querySelector('input[type=radio]:checked');
    const frase20 = `Olá, ${firstName.value} ${lastName.value}, 
    email/telefone: ${emailPhone.value}, 
    data nascimento: ${birthDate.value} 
    genero: ${gender.value}`;
    const novaTagP = document.createElement('p');
    novaTagP.innerText = frase20;
    console.log(frase20);
    const invalidForm = document.querySelector('#facebook-form p');
    if (invalidForm === null) {
      evt.preventDefault();
      while (form[0].firstChild) {
        form[0].removeChild(form[0].firstChild);
      }
      form[0].appendChild(novaTagP);
    }
  });
}

buttonLoginAlert();
checkInfos();
checkRadios();
checkGenderChoised();
exercicio20();
