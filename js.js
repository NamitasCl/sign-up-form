const passFieldOne = document.querySelector('#password');
const passFieldTwo = document.querySelector('#confirm-password');
const span = document.createElement('span');
span.classList = 'input-invalid-text';
span.textContent = 'Passwords do not match.';
let addChild = false;

passFieldTwo.onchange = validatePassword;

function validatePassword() {
    let passOne = passFieldOne.value;
    let passTwo = passFieldTwo.value;

    if(passOne !== passTwo) {
        passFieldOne.classList = 'input-invalid';
        passFieldTwo.classList = 'input-invalid';
        passFieldOne.parentElement.appendChild(span);
        addChild = true;
    } else {
        passFieldOne.classList.remove('input-invalid');
        passFieldTwo.classList.remove('input-invalid');
        if (addChild) passFieldOne.parentElement.removeChild(span);
    }

}
