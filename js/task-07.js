const slider = document.querySelector("#font-size-control");
const mainText = document.querySelector("#text");

function changeSize() {
  mainText.style.fontSize = slider.value + "px";
}

slider.addEventListener("input", changeSize);
