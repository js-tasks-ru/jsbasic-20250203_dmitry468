import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();

    this.elem.addEventListener('click', (event) => this.onSliderClick(event));
  }

  sliderTemplate() {
    return createElement(`
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>

      <div class="slider__progress"></div>

      <div class="slider__steps">
        ${this.stepsTemplate()}
      </div>
    </div>
    `)
  }

  stepsTemplate() {
    let steps_element = '';
    for (let i=0; i<this.steps; i++) {
      steps_element += `<span class data-value="${i}"></span>`
    }
    return steps_element
  }

  render() {
    this.elem = this.sliderTemplate();
    this.updateSlider();
    return this.elem
  }
  
  updateSlider() {
    const thumb = this.elem.querySelector('.slider__thumb');
    const progress = this.elem.querySelector('.slider__progress');
    const stepByValue = this.elem.querySelector('.slider__value');
    const steps = this.elem.querySelectorAll('.slider__steps span');

    let percent = (this.value / (this.steps - 1)) * 100;

    thumb.style.left = `${percent}%`;
    progress.style.width = `${percent}%`;

    stepByValue.textContent = this.value;

    steps.forEach((step, index) => {
        step.classList.toggle('slider__step-active', index === this.value);
    });
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
    }));
  }

  onSliderClick(event) {
    const rect = this.elem.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const totalWidth = rect.width;
    const newValue = Math.round((offsetX / totalWidth) * (this.steps - 1));

    if (newValue !== this.value) {
        this.value = newValue;
        this.updateSlider();
    }
  }
}
