const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwdFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signUp-link"),
  login = document.querySelector(".login-link");

//js code to show/hide password and change icon

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwdFields.forEach((pwdField) => {
      if (pwdField.type === "password") {
        pwdField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwdField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

//js code to appear sign up and login form
signUp.addEventListener("click", () => {
  event.preventDefault();
  console.log("hi");
  container.classList.add("active");
});

login.addEventListener("click", () => {
  event.preventDefault();
  container.classList.remove("active");
});
