const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Fill please all fields');
  }
}

document.addEventListener('DOMContentLoaded', onPageLoad);

function onPageLoad() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    formData.email = JSON.parse(savedFormData).email;
    formData.message = JSON.parse(savedFormData).message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}
