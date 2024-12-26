let swiperInstance; // Переменная для хранения экземпляра Swiper

function manageSwiper() {
  const screenWidth = window.innerWidth; // Получаем ширину экрана

  if (screenWidth <= 767) { // Условие для активации свайпера (меньше или равно 768px)
    if (!swiperInstance) { // Если Swiper ещё не инициализирован
      swiperInstance = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        loop:true,
      });
    }
  } else {
    // Удаляем Swiper, если он существует, на больших экранах
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // Полностью уничтожаем Swiper
      swiperInstance = null; // Очищаем переменную
    }
  }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
manageSwiper();
window.addEventListener('resize', manageSwiper);
document.getElementById("toggleButton").style.setProperty('--rotate', '45deg');


function readMore() {
  const toggleButton = document.getElementById("toggleButton");
  const hiddenElements = document.querySelectorAll(".hidden"); // Скрытые элементы
  const largeScreenHiddenElements = document.querySelectorAll(".large-screen-hidden"); // Элементы для скрытия на больших экранах
  const screenWidth = window.innerWidth; // Текущая ширина экрана

  if (screenWidth >= 1120) {
      // Убираем 3 картинки при ширине 1120px
      if (largeScreenHiddenElements[0].style.display === "" || largeScreenHiddenElements[0].style.display === "none") {
          largeScreenHiddenElements.forEach((el) => {
              el.style.display = "grid"; // Показываем элементы
          });
          toggleButton.innerHTML = "Скрыть";
          toggleButton.style.setProperty('--rotate', '225deg')
      } else {
          largeScreenHiddenElements.forEach((el) => {
              el.style.display = "none"; // Скрываем 3 картинки
          });
          toggleButton.innerHTML = "Показать все";
          toggleButton.style.setProperty('--rotate', '45deg')
      }
  } else {
      // Управление скрытыми элементами на других разрешениях

      if (hiddenElements[0].style.display === "" ||  hiddenElements[0].style.display === "none") {
          hiddenElements.forEach((el) => {
              el.style.display = "grid"; // Показываем элементы
          });
          toggleButton.innerHTML = "Скрыть";
          toggleButton.style.setProperty('--rotate', '225deg')
      } else {
          hiddenElements.forEach((el) => {
              el.style.display = "none"; // Скрываем элементы
          });
          toggleButton.innerHTML = "Показать все";
          toggleButton.style.setProperty('--rotate', '45deg')
      }
  }
}