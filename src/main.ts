console.log("hello");

const passField = document.getElementById("password");
const passFieldConfirm = document.getElementById("password-confirm");
const formButton = document.getElementById("form-button");
const loginForm = document.getElementById("login-form");

formButton?.addEventListener("click", () => {
  if (passField?.textContent !== passFieldConfirm?.textContent) {
    loginForm?.setAttribute("onsubmit", "return false;");
  } else {
    loginForm?.setAttribute("onsubmit", "return true;");
  }
})


