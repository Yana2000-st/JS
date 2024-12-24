let toggleButton = document.getElementById('toggleButton');
let linksContainer = document.querySelector('.links');

toggleButton.addEventListener('click', () => {
  let isOpen = linksContainer.classList.toggle('open');
  toggleButton.textContent = isOpen ? 'Скрыть' : 'Показать все';
 });

 const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });