const form = document.getElementById("form");
const input = document.getElementById("input");
const error = document.getElementById("error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    error.innerText = "Oops! Please add your email";
    error.classList.remove("hidden");
    input.classList.remove("border-opacity-0");
  } else if (!emailRegex.test(input.value)) {
    error.innerText = "Oops! That doesn’t look like an email address";
    error.classList.remove("hidden");
    input.classList.remove("border-opacity-0");
  }
});

input.addEventListener("focus", () => {
  error.innerText = "";
  error.classList.add("hidden");
  input.classList.add("border-opacity-0");
});
