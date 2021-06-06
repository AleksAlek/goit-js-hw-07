// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
const categories = document.querySelectorAll("#categories > .item").length;
console.log(`В списке ${categories} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов
//   в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
//   Категория: Животные
//   Количество элементов: 4
const category = document.querySelectorAll(".item");

for (let i = 0; i < category.length; i += 1) {
  // Создаем сообщение "Категория: Животные"
  const title = category[i].querySelector("h2").textContent;
  console.log(`Категория: ${title}`);

  // Создаем сообщение "Количество элементов: 4"
  const pointsList = category[i].querySelectorAll("ul > li").length;
  console.log(`Количество элементов: ${pointsList}`);
}
