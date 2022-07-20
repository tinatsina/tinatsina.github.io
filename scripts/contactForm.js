const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formMessage = document.getElementById('form-message');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', function(e) {

    e.preventDefault();
    console.log(formNameChecker(formEmail));
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
