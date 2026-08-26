// Получаем элементы
const searchInput = document.getElementById("searchInput");
const updateBtn = document.querySelector(".updateSearchBtn");
const tags = document.querySelectorAll("button"); // или 'button', если именно тег <tag>

// Добавляем обработчик клика
tags.forEach((tag) => {
  tag.addEventListener("click", function () {
    // Получаем текст из тега и вставляем в поле поиска
    const text = this.textContent || this.innerText; // Учитываем и текст, и textContent
    searchInput.value = text;

    // Можно добавить логику для автоматического запуска поиска (например, симуляция нажатия Enter)
    // searchInput.dispatchEvent(new Event('input', { bubbles: true }));
  });
});
