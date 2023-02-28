const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBx = document.querySelector(".formBx");
const body = document.querySelector("body");

signupBtn.onclick = function () {
  formBx.classList.toggle("active");
  body.classList.toggle("active");
};

signinBtn.onclick = function () {
  formBx.classList.toggle("active");
  body.classList.toggle("active");
};
