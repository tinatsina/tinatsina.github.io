// Global defines
const ERROR_MESSAGE = 'Please enter lowecase only !';

const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formMessage = document.getElementById('form-message');
const formButton = document.getElementById('form-button');
const formError = document.getElementById('form-error');

formButton.addEventListener('click', function(e) {

    

    if (!formNameChecker(formEmail)) {
        e.preventDefault();
        formError.textContent = "Lower case --> "+formEmail.value.toLowerCase();
        console.log(formNameChecker(formEmail));
    }


});

function formNameChecker(formName) {
    let result = false
    const formNameLowerCase = formName.value.toLowerCase();
    if (formName.value === formNameLowerCase) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
