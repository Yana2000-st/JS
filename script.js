// let toggleButton = document.getElementById('toggleButton');
// let linksContainer = document.querySelector('.links');

// toggleButton.addEventListener('click', () => {
//   let isOpen = linksContainer.classList.toggle('open');
//   toggleButton.textContent = isOpen ? 'Скрыть' : 'Показать все';
//  });

  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,          
    },
    slidesPerView: 1.5,   
    spaceBetween: 120,         
  });