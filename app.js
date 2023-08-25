const form = document.getElementById('form');
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValidation();
});


const checkValidation = () => {
    // receiving user input and removing whitespace
    const userNameInput = userName.value.trim();
    const userEmailInput = userEmail.value.trim();
    const passwordInput = password.value.trim();
    const confirmPasswordInput = confirmPassword.value.trim();


    // validation
    if(userNameInput === '') {
        displayError(userName, '* username is blank');
    } else {
        displayConfirm(userName);
    }

    if( userEmailInput === '') {
        displayError(userEmail, `* email cannot be blank`);
    } else if ( !checkEmailPattern(userEmailInput) ){
        displayError(userEmail, `* email is not valid`);
    } else {
        displayConfirm(userEmail);
    }

    if(passwordInput === '' ) {
        displayError(password, `* password cannot be blank`);
    
    } else {
        displayConfirm(password);
    }

    if(confirmPasswordInput === '') {
        displayError(confirmPassword, `* password cannot be blank`);
    } else if(confirmPasswordInput !== passwordInput) {
        displayError(confirmPassword, `* password didn't match`);
    } else {
        displayConfirm(confirmPassword);
    }
};


const displayConfirm = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

const displayError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const errorMessage = formControl.querySelector('small');
    errorMessage.innerText = message;
};


const checkEmailPattern = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
