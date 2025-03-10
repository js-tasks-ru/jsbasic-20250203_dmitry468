import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    this.initCarousel();
  }

  carouselTemplate() {
    return createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.slides.map(slide => this.slideTemplate(slide)).join('')}
        </div>
      </div>
    `)
  }

  slideTemplate(slide) {
    return `
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `
  }

  render() {
    this.elem = this.carouselTemplate();

    return this.elem
  }

  initCarousel() {
    const carousel = this.elem;
    const left_arrow = carousel.querySelector('.carousel__arrow_left');
    const right_arrow = carousel.querySelector('.carousel__arrow_right');
    const carousel_inner = carousel.querySelector('.carousel__inner');
    const carousel_slides = carousel.querySelectorAll('.carousel__slide');
    let slide_number = 0;
  
    left_arrow.style.display = 'none';
  
    function update_carousel() {
      const slide_width = carousel_slides[0].offsetWidth;

      if (slide_number === 0) {
        left_arrow.style.display = 'none';
      } else {
        left_arrow.style.display = '';
      }
  
      if (slide_number === carousel_slides.length-1) {
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
    
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        let slide = this.slides[slide_number];
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true}));
      }
    })
  }
}
