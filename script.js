let swiperInstance; 

function manageSwiper() {
  const screenWidth = window.innerWidth; 

  if (screenWidth <= 767) {
    if (!swiperInstance) { 
      swiperInstance = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 16,
      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true); 
      swiperInstance = null;
    }
  }
}

manageSwiper();
window.addEventListener('resize', manageSwiper);

function readMore() {
    let toggleButton = document.getElementById("toggleButton");
    let acer = document.getElementById("acer");
    let sony = document.getElementById("sony");

    if (acer.style.display === "none") {
      acer.style.display = "grid";
      toggleButton.innerHTML = "Скрыть";
    } else {
      acer.style.display = "none";
      toggleButton.innerHTML = "Показать все";
    }

    if (sony.style.display === "none") {
      sony.style.display = "grid";
      toggleButton.innerHTML = "Cкрыть";
    } else {
      sony.style.display = "none";
      toggleButton.innerHTML = "Показать все";
    }
}