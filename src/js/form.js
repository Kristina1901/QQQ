import * as EmailValidator from 'email-validator';
let arrayInputs = document.getElementsByClassName(
  'contact__form-input'
);

let email = document.getElementById('mail');
let button = document.querySelector(
  '.contact__form-button'
);
let form = document.querySelector(
  '.contact__form-fields'
);
let wrongValue = document.querySelector(
  '.wrong__input'
);
form.addEventListener('change', handleChange);
form.addEventListener('submit', handleSubmit);

let message = document.querySelector(
  '.error-invisible'
);
email.addEventListener('input', onTextareaInput);
function handleChange(event) {
  const {
    elements: { message, email, name },
  } = event.currentTarget;
  if (
    message.value.trim() !== '' &&
    email.value.trim() !== '' &&
    name.value.trim() !== ''
  ) {
    button.removeAttribute('disabled');
  }
}
function handleSubmit(event) {
  event.preventDefault();
  alert('Hello world');
}
function onTextareaInput(evt) {
  let inputValue = evt.target.value;
  if (
    EmailValidator.validate(inputValue) === true
  ) {
    email.classList.remove('contact__form-input');
    email.classList.remove('wrong__input');
    email.classList.add('correct__input');
    message.style.display = 'none';
  }
  if (
    EmailValidator.validate(inputValue) === false
  ) {
    email.classList.remove('contact__form-input');
    email.classList.add('wrong__input');
    message.style.display = 'block';
  }
  if (evt.currentTarget.value === '') {
    email.classList.remove('correct__input');
    email.classList.remove('wrong__input');
    email.classList.add('contact__form-input');
    message.style.display = 'none';
  }
}
