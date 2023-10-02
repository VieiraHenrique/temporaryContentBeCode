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

/* show error / success */

const showError = (input, msg) => {};

/* Prevent submit and perform tests */

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid()) {
    console.log(formData);
  } else {
    console.log("Error");
  }
});

/* Bind formData to the data entered */

document.addEventListener("change", (e) => {
  if (e.target.matches("#username")) {
    formData.username = e.target.value;
  }
  if (e.target.matches("#email")) {
    formData.email = e.target.value;
  }
  if (e.target.matches("#password")) {
    formData.password = e.target.value;
  }
  if (e.target.matches("#password2")) {
    formData.passwordCheck = e.target.value;
  }
});

/* Functions of validation */

const isFilled = (arrOfFields) => {
  for (let i = 0; i < arrOfFields.length; i++) {
    if (!arrOfFields[i].value) {
      return false;
    }
  }
  return true;
};

const isEmail = (arrOfFields) => {
  for (let i = 0; i < arrOfFields.length; i++) {
    if (
      !arrOfFields[i].value.match(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      )
    ) {
      return false;
    }
  }
  return true;
};

const areTheSame = (field1, field2) => {
  if (field1.value !== field2.value) {
    return false;
  }
  return true;
};

const isMinMaxOK = (arrOfFields, min, max) => {
  for (let i = 0; i < arrOfFields.length; i++) {
    if (
      arrOfFields[i].value.length < min ||
      arrOfFields[i].value.length > max
    ) {
      return false;
    }
  }
  return true;
};

/* Check if it is valid */

const isFormValid = () => {
  if (
    !isFilled([usernameInput, emailInput, passwordInput, password2Input]) ||
    !isEmail([emailInput]) ||
    !areTheSame(passwordInput, password2Input) ||
    !isMinMaxOK([usernameInput, passwordInput], 5, 10)
  ) {
    return false;
  }
  return true;
};
