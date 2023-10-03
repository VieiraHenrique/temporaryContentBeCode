const registerForm = document.querySelector("#register-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const password2Input = document.querySelector("#password2");

const formData = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
};

/* SHOW MSG */

const showError = (input, msg) => {
  input.parentElement.classList = "form-entry error";
  input.parentElement.querySelector(".msg").innerText = msg;
};

const showSuccess = (input) => {
  input.parentElement.classList = "form-entry success";
  input.parentElement.querySelector(".msg").innerText = "Message";
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usernameInput.value.length < 5 || usernameInput.value.length > 8) {
    showError(usernameInput, "Must be between 5 and 8 characters");
  } else {
    showSuccess(usernameInput);
  }

  if (
    !emailInput.value.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    showError(emailInput, "Not a valid email address");
  } else {
    showSuccess(emailInput);
  }

  if (passwordInput.value.length < 8 || passwordInput.value.length > 15) {
    showError(passwordInput, "Must be between 8 and 15 characters");
  } else {
    showSuccess(passwordInput);
  }

  if (
    password2Input.value !== passwordInput.value ||
    !password2Input.value.length
  ) {
    showError(password2Input, "Passwords don't match");
  } else {
    showSuccess(password2Input);
  }

  const formControls = Array.from(document.querySelectorAll(".form-entry"));

  let isValidForm = true;

  formControls.forEach((el) => {
    if (el.classList.contains("error")) {
      isValidForm = false;
    }
  });

  if (isValidForm) {
    console.log(formData);
  }
});

document.addEventListener("change", (e) => {
  const value = e.target.value;

  if (e.target === usernameInput) {
    formData.username = value;
  }
  if (e.target === emailInput) {
    formData.email = value;
  }
  if (e.target === passwordInput) {
    formData.password = value;
  }
  if (e.target === password2Input) {
    formData.passwordCheck = value;
  }
});
