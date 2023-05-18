addressField.addEventListener("input", () => {
  requiredValidation(addressField);
  minLengthValidation(addressField, 3);
});
contactAddressField.addEventListener("input", () => {
  requiredValidation(contactAddressField);
  minLengthValidation(contactAddressField, 3);
});

const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");
checkboxField.addEventListener("change", () => {
  contactAddress.hidden = checkboxField.checked;
});

function requiredValidation(field) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!field.value || field.value === "") {
    errorField.innerHTML = "To pole jest wymagane";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function minLengthValidation(field, minLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length < minLength) {
    errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function maxLengthValidation(field, maxLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length > maxLength) {
    errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validSexFileds() {
  let result = false;

  const errorField = document.querySelector("span.sex.error");

  sexFields.forEach((field) => {
    result = field.checked || result;
  });

  errorField.innerHTML = result ? "" : "Prosze wybrać płeć";

  return !result;
}

function emailValidation(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!emailRegex.test(field.value)) {
    errorField.innerHTML = "Proszę podać poprawny adres e-mail.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function passwordValidation(field) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!passwordRegex.test(field.value)) {
    errorField.innerHTML =
      "Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validAge() {
  const today = new Date();
  const date = new Date(birthDateField.value);

  var age = today.getFullYear() - date.getFullYear();
  var m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  const errorField = document.querySelector('[name="birthDate"] + span.error');

  errorField.innerHTML = age < 18 ? "Musisz być pełnoletni" : "";

  return age < 18;
}

function validConfirmPassword() {
  const errorField = document.querySelector(
    `[name='confirm-password'] + span.error`
  );
  if (confirmPasswordField.value !== passwordField.value) {
    errorField.innerHTML = "Hasła nie są takie same";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validForm() {
  if (
    requiredValidation(nameField) ||
    requiredValidation(surnameField) ||
    requiredValidation(emailField) ||
    requiredValidation(passwordField) ||
    validSexFileds() ||
    requiredValidation(phoneField) ||
    requiredValidation(provinceField) ||
    requiredValidation(birthDateField) ||
    requiredValidation(countyField) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(surnameField, 2) ||
    minLengthValidation(emailField, 2) ||
    minLengthValidation(passwordField, 8) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(phoneField, 9) ||
    maxLengthValidation(phoneField, 9) ||
    emailValidation(emailField) ||
    passwordValidation(passwordField) ||
    validAge() ||
    validConfirmPassword() ||
    requiredValidation(addressField) ||
    minLengthValidation(addressField, 3) ||
    (!checkboxField.checked &&
      (requiredValidation(contactAddressField) ||
        minLengthValidation(contactAddressField, 3)))
  ) {
    return false;
  }

  return true;
}
