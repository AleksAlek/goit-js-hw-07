const currentValue = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let click = 0;

function increment() {
  click += 1;
  currentValue.textContent = click;
}

function decrement() {
  click -= 1;
  currentValue.textContent = click;
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
