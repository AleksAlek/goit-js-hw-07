const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const generalList = document.querySelector("ul");

for (const ingredient of ingredients) {
  const item = document.createElement("li");
  generalList.append(item);
  item.textContent = ingredient;
}
