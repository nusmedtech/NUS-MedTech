document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
  
    menu.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    });
  
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.getElementsByClassName("slide");
      console.log(slides);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000);
    }
  });
  
