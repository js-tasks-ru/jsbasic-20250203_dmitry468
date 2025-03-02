function initCarousel() {
  const left_arrow = document.querySelector('.carousel__arrow_left');
  const right_arrow = document.querySelector('.carousel__arrow_right');
  const carousel_inner = document.querySelector('.carousel__inner');
  const slides = document.querySelectorAll('.carousel__slide')
  const slide_width = slides[0].offsetWidth;
  let slide_number = 0;

  left_arrow.style.display = 'none';

  function update_carousel() {
    if (slide_number === 0) {
      left_arrow.style.display = 'none';
    } else {
      left_arrow.style.display = '';
    }
    carousel_inner.style.transform = `translateX(${slide_width * slide_number}px)`;

    if (slide_number === slides.length-1) {
      right_arrow.style.display = 'none';    
    } else {
      right_arrow.style.display = '';
    }
    carousel_inner.style.transform = `translateX(-${slide_width * slide_number}px)`;
  }

  left_arrow.addEventListener('click', 
    () => {
      slide_number--;
      update_carousel();
    }
  )
  right_arrow.addEventListener('click', 
    () => {
      slide_number++;
      update_carousel();
    }
  )  
}
