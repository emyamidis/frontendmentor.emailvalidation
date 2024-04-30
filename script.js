document.addEventListener('DOMContentLoaded', function () {

const emailInput = document.getElementById('email')
const form = document.getElementById('form')
let formsubmitted = false

function validateEmail(element) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(element)
}

function setError(message) {
    const errorDisplay = document.getElementById('error-message')
    
    errorDisplay.innerText = message;
    errorDisplay.style.display = 'block';
    emailInput.classList.add('active');
}

function setSuccess() {
    const errorDisplay = document.getElementById('error-message')

    errorDisplay.innerText = '';
    errorDisplay.style.display = 'none';
    emailInput.classList.remove('active');
}

function checkEmail() {
    if (emailInput.value === '') {
        setError('Email is required');
    }  else if (!validateEmail(emailInput.value)) {
        setError('Please provide a valid email address');
    } else {
        setSuccess();
    };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
    formsubmitted = true;
});

emailInput.addEventListener('input', () => {
    if (formsubmitted) {
        checkEmail();
    }
});

})
