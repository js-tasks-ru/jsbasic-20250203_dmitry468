import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
    this.activeCategory = null;
  }

  ribbonTemplate() {
    return createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          ${this.categories.map(
            category => `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
            ).join('')}
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)
  }

  moveRibbon() {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    const leftArrowBtn = this.elem.querySelector('.ribbon__arrow_left');
    const rightArrowBtn = this.elem.querySelector('.ribbon__arrow_right');

    this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
    this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');

    leftArrowBtn.addEventListener('click',
      () => {ribbonInner.scrollBy(-350, 0); this.checkArrowVisibility(ribbonInner)});
    rightArrowBtn.addEventListener('click',
      () => {ribbonInner.scrollBy(350, 0); this.checkArrowVisibility(ribbonInner)});

    ribbonInner.addEventListener('scroll',
        () => this.checkArrowVisibility(ribbonInner));
  }

  checkArrowVisibility(ribbonInner) {

    let scrollLeft = ribbonInner.scrollLeft;
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollLeft === 0) {
      this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
    } else {
      this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
    }

    if (scrollRight < 1) {
      this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
    } else {
      this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
    }
  }

  render() {
    this.elem = this.ribbonTemplate();
    this.moveRibbon();
    this.elem.addEventListener('click', (event) => this.onCategoryClick(event));

    return this.elem
  }

  onCategoryClick(event) {
    event.preventDefault();

    const target = event.target.closest('.ribbon__item');
    if (!target) return;

    if (this.active_category) {
      this.active_category.classList.remove('ribbon__item_active');
    }

    target.classList.add('ribbon__item_active');
    this.active_category = target;
    const customEvent = new CustomEvent('ribbon-select', {
      detail: target.dataset.id,
      bubbles: true
    });

    this.elem.dispatchEvent(customEvent);
  }
}
