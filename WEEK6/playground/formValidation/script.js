/* const form = document.querySelector("form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

const showError = (input, msg) => {
  input.parentElement.classList = "form-control error";
  input.nextElementSibling.innerText = msg;
  errors.push(input);
};

const showSuccess = (input) => {
  input.parentElement.classList = "form-control success";
  errors.filter((el) => el !== input);
};

let errors = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errors.length = 0;

  if (!username.value.trim().length) {
    showError(username, "Field is required");
  } else if (
    username.value.length < 5 ||
    username.value !== username.value.toLowerCase()
  ) {
    showError(username, "Must be at least 6 characters and lowercase");
  } else {
    showSuccess(username);
  }

  if (!email.value.trim().length) {
    showError(email, "Field is required");
  } else if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    showError(email, "Must be a valid email");
  } else {
    showSuccess(email);
  }

  if (!password.value.trim().length) {
    showError(password, "Field is required");
  } else if (password.value.length < 8 || password.value.length > 15) {
    showError(password, "Must have between 9 and 15 characters");
  } else {
    showSuccess(password);
  }

  if (!password2.value.trim().length) {
    showError(password2, "Field is required");
  } else if (password.value !== password2.value) {
    showError(password2, "Passwords don't match");
  } else {
    showSuccess(password2);
  }

  console.log(errors);

  if (!errors.length) {
    alert("submitted");
  }
});
 */

///////////////////////////////////////////////////////////////////////////////////

const form = document.querySelector("form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

const errors = [];

const showError = (input, msg) => {
  input.parentElement.classList = "form-control error";
  input.nextElementSibling.innerText = msg;
  errors.push(input);
};

const showSuccess = (input) => {
  input.parentElement.classList = "form-control success";
  errors.filter((el) => el !== input);
};

const checkRequired = (input) => {
  if (!input.value.trim().length) {
    showError(input, "This field is required");
  } else {
    showSuccess(input);
  }
};

const checkLength = (input, min, max) => {
  if (input.value.trim().length < min || input.value.trim().length > max) {
    showError(input, `Must be between ${min} and ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkEmail = (input) => {
  if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    showError(input, "Must be a valid email adress");
  } else {
    showSuccess(input);
  }
};

const checkMatch = (input1, input2) => {
  if (input1.value !== input2.value || !input1.value.length) {
    showError(input2, `Password don't match`);
  } else {
    showSuccess(input2);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errors.length = 0;

  checkRequired(username);
  checkRequired(email);
  checkRequired(password);
  checkRequired(password2);

  checkLength(username, 5, 10);
  checkLength(password, 6, 15);

  checkEmail(email);

  checkMatch(password, password2);

  if (!errors.length) {
    console.log({
      username: username.value,
      email: email.value,
      password: password.value,
    });
  }
});
