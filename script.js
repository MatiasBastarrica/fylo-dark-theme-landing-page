const form = document.querySelector("form");
const inputContainer = document.querySelector(".input-container");
const emailInput = document.querySelector("input[type='email']");
const submitBtn = form.querySelector("button");

function showError(emailInput) {
  if (inputContainer.childElementCount === 1) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please enter a valid email address";
    errorMessage.classList.add("error-message");
    emailInput.after(errorMessage);
  }
}

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  showError(emailInput);
});
