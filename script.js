document.addEventListener('DOMContentLoaded', function() {
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('signupForm');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener("click", handleSubmit)
emailInput.addEventListener("change", validateEmail)
passwordInput.addEventListener("change", validatePassword)

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.length > 3 && emailPattern.test(emailInput.value)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Invalid email address';
        successMessage.textContent = '';
        return;
    }
    
    if (passwordInput.value.length > 8) {
        successMessage.textContent = 'All good to go!';
    } else {
        successMessage.textContent = '';
    }
}

function validatePassword() {
    if (passwordInput.value.length > 8) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must be more than 8 characters';
        successMessage.textContent = '';
        return;
    }
    
    if (emailInput.value.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        successMessage.textContent = 'All good to go!';
    } else {
        successMessage.textContent = '';
    }
}
//function checkAllValid() {
//   if (!emailError.textContent && !passwordError.textContent) {
//      successMessage.textContent = 'All good to go!';
//       submitButton.disabled = false;
//  }
//}
function handleSubmit(event) {
    event.preventDefault();
    if (emailError.textContent || passwordError.textContent) {
        return;
    }

    if (confirm('Do you want to submit the form?')) {
        alert('Successful signup!');
        form.reset();
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';
    }
}

//submitButton.onclick = handleSubmit;

form.onreset = function() {
    submitButton.disabled = false;
};

});
