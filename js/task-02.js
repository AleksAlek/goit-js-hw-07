const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const generalList = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const item = document.createElement("li");
//   generalList.append(item);
//   item.textContent = ingredient;
// }

const newList = ingredients.map((ingredient) => {
  const item = document.createElement("li");

  item.textContent = ingredient;

  return item;
});

generalList.append(...newList);
