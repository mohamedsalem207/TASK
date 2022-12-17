// Declaring of used variables
let usernameInput = document.getElementById("username");
let nameErrorEl = document.getElementById("usernameError");
let email = document.getElementById("email");
let emailErrorEl = document.getElementById("emailError");
let password = document.getElementById("password");
let passwordErrorEl = document.getElementById("passwordError");
let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordErrorEl = document.getElementById("confirmPasswordError");
let registerBtn = document.getElementById("registerBtn");
let usernameError = false;
let emailError = false;
let passwordError = false;
let confirmPasswordError = false;
let emailTxt = document.getElementById("emailValue");

// Function that check the validation of the username
let checkUsername = () => {
  let firstLetter = usernameInput.value[0];
  let lastLetter = usernameInput.value[usernameInput.value.length - 1];

  if (
    usernameInput.value &&
    /^[A-Za-z][A-Za-z0-9]{5,15}$/.test(usernameInput.value) &&
    isNaN(firstLetter) &&
    isNaN(lastLetter)
  ) {
    usernameError = false;
    nameErrorEl.classList.remove("visible");
    nameErrorEl.classList.add("invisible");
  } else {
    usernameError = true;
    nameErrorEl.classList.remove("invisible");
    nameErrorEl.classList.add("visible");
  }
};

usernameInput.oninput = checkUsername;
usernameInput.onblur = checkUsername;

// Function that check the validation of the email
let checkEmail = () => {
  if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
    emailError = false;
    emailErrorEl.classList.remove("visible");
    emailErrorEl.classList.add("invisible");
  } else {
    emailError = true;
    emailErrorEl.classList.remove("invisible");
    emailErrorEl.classList.add("visible");
  }
};

email.oninput = checkEmail;
email.onblur = checkEmail;

// Function that check the validation of the password
let checkPassword = () => {
  if (password.value.length >= 8) {
    passwordError = false;
    passwordErrorEl.classList.remove("visible");
    passwordErrorEl.classList.add("invisible");
  } else {
    passwordError = true;
    passwordErrorEl.classList.remove("invisible");
    passwordErrorEl.classList.add("visible");
  }
};

password.oninput = checkPassword;
password.onblur = checkPassword;

// Function that check the validation of the confirm password
let checkConfirmPassword = () => {
  if (password.value == confirmPassword.value) {
    confirmPasswordError = false;
    confirmPasswordErrorEl.classList.remove("visible");
    confirmPasswordErrorEl.classList.add("invisible");
  } else {
    confirmPasswordError = true;
    confirmPasswordErrorEl.classList.remove("invisible");
    confirmPasswordErrorEl.classList.add("visible");
  }
};

confirmPassword.oninput = checkConfirmPassword;
confirmPassword.onblur = checkConfirmPassword;

registerBtn.onclick = async (e) => {
  e.preventDefault();
  if (usernameError || emailError || passwordError || confirmPasswordError) {
    return false;
  } else {
    await fetch("https://goldblv.com/api/hiring/tasks/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: usernameInput.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
      },
    })
      .then(() => {
        localStorage.setItem("email", email.value);
        window.location.href = "/success.html";
      })
      .catch((e) => console.error(e));
  }
};
