



/*==========profile details=============*/
function changePassword() {
    var newPassword = prompt("Enter your new password:");
    if (newPassword !== null && newPassword.trim() !== "") {
        document.getElementById("savedPassword").textContent = newPassword;
    }
}

function changePhoneNumber() {
    var newPhoneNumber = prompt("Enter your new phone number:");
    if (newPhoneNumber !== null && newPhoneNumber.trim() !== "") {
        document.getElementById("savedPhoneNumber").textContent = newPhoneNumber;
    }
}


/*====profile===============*/

document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const fullNameInput = document.getElementById('fullName');
    const birthdayInput = document.getElementById('birthday');
    const genderInput = document.getElementById('gender');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneNumberInput = document.getElementById('phoneNumber');

    const savedFullName = document.getElementById('savedFullName');
    const savedBirthday = document.getElementById('savedBirthday');
    const savedGender = document.getElementById('savedGender');
    const savedEmail = document.getElementById('savedEmail');
    const savedPassword = document.getElementById('savedPassword');
    const savedPhoneNumber = document.getElementById('savedPhoneNumber');

    saveBtn.addEventListener('click', function () {
        savedFullName.textContent = fullNameInput.value;
        savedBirthday.textContent = birthdayInput.value;
        savedGender.textContent = genderInput.value;
        savedEmail.textContent = emailInput.value;
        savedPassword.textContent = passwordInput.value;
        savedPhoneNumber.textContent = phoneNumberInput.value;
        alert('Profile saved!');
    });
});