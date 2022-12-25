import * as EmailValidator from 'email-validator';
let arrayInputs = document.getElementsByClassName(
  'contact__form-input'
);
let nameInput = arrayInputs[0];
let email = document.getElementById('mail');
let messageInput = arrayInputs[2];
let button = document.querySelector(
  '.contact__form-button'
);
let form = document.querySelector(
  '.contact__form-fields'
);
console.log(nameInput.value);
if (
  nameInput.value !== '' &&
  messageInput.value !== '' &&
  email !== ''
) {
  button.removeAttribute('disabled');
}
form.addEventListener('submit', handleSubmit);

let message = document.querySelector(
  '.error-invisible'
);
email.addEventListener('input', onTextareaInput);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { message, email, name },
  } = event.currentTarget;
}
function onTextareaInput(evt) {
  let trigger = false;
  if (
    EmailValidator.validate(
      evt.currentTarget.value
    ) === true
  ) {
    email.classList.remove('contact__form-input');
    email.classList.add('correct__input');
  }
  if (
    EmailValidator.validate(
      evt.currentTarget.value
    ) === false
  ) {
    trigger = true;
    email.classList.remove('contact__form-input');
    email.classList.add('wrong__input');
  }
  if (trigger === true) {
    message.style.display = 'block';
  }
  if (evt.currentTarget.value === '') {
    email.classList.remove('correct__input');
    email.classList.remove('wrong__input');
    email.classList.add('contact__form-input');
    message.style.display = 'none';
  }
}
