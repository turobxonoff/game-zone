const menuBtn = document.getElementById('menu-icon'),
navbar = document.querySelector('.navbar'),
darkMode = document.querySelector('#darkmode'),
body = document.querySelector('body');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}

darkMode.onclick = () => {
    darkMode.classList.toggle('fa-moon');
    body.classList.toggle('active');
}


// Slide start
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Slide end