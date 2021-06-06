const boxes = document.querySelector("#boxes");
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const inputArea = document.querySelector("input");

function createBoxes(amount) {
  let basicWidth = 30;
  let basicHeight = 30;

  for (let i = 0; i <= amount; i += 1) {
    const someDiv = document.createElement("div");

    let randomNumberForRed = Math.random() * (0, 255) + 0;
    let randomNumberForGreen = Math.random() * (0, 255) + 0;
    let randomNumberForBlue = Math.random() * (0, 255) + 0;

    if (i > 0) {
      basicWidth += 10;
      basicHeight += 10;
    }

    someDiv.style.width = basicWidth + "px";
    someDiv.style.height = basicHeight + "px";
    someDiv.style.backgroundColor = `rgb(${randomNumberForRed}, ${randomNumberForGreen}, ${randomNumberForBlue})`;

    boxes.appendChild(someDiv);
  }
}

renderButton.addEventListener("click", () => {
  createBoxes(inputArea.value - 1);
});
