const title = document.querySelector("h1");
const inputValue = document.querySelector("#name-input");
const personName = document.querySelector("#name-output");

function changeName() {
  personName.textContent = inputValue.value;

  if (inputValue.value === "") {
    personName.textContent = "незнакомец";
  }
}

inputValue.addEventListener("input", changeName);
