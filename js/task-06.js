const inputArea = document.querySelector("input");
console.log(inputArea);
const requaredNumber = inputArea.getAttribute("data-length");
console.log(requaredNumber);

function checkClassName() {
  if (
    inputArea.value.length < requaredNumber ||
    inputArea.value.length > requaredNumber
  ) {
    inputArea.classList.add("invalid");
  } else {
    inputArea.classList.replace("invalid", "valid");
  }
}

inputArea.addEventListener("blur", checkClassName);
console.log(inputArea);
