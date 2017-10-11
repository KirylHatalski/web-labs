class Carousel {
  constructor(selector) {
    this.selector = selector;
    this.element = document.querySelector(`.${this.selector}`);
    this.collection = Array.prototype.slice.call(this.element.children, 0);
  }

  init() {
    this.collection.forEach(img => {
      const chanel = () => (Math.round(Math.random() * 255))
      img.style.backgroundColor = `rgb(${chanel()}, ${chanel()}, ${chanel()})`;
    });
  }

  moveLeft() {

  }

  moveRight() {

  }
}

window.onload = () => {
  const carousel = new Carousel('carousel');

  carousel.init();
}
