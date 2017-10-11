class Carousel {
  constructor(selector) {
    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.leftBtn = document.querySelector('.left-arrow');
    this.rightBtn = document.querySelector('.right-arrow');
    this.collection = Array.prototype.slice.call(this.element.children, 0);
    this.positon = 0;
  }

  clear(){
    this.collection.forEach(value => {
      value.classList.remove('active');
    })
  }

  init() {
    this.collection[0].classList.add('active');
    this.leftBtn.addEventListener('click', this.moveLeft.bind(this));
    this.rightBtn.addEventListener('click', this.moveRight.bind(this));
  }

  moveLeft() {
    this.positon--;
    if(this.positon == -1) this.positon = this.collection.length -1;
    this.clear();
    this.collection[this.positon].classList.add('active');
  }

  moveRight() {
    this.positon++;
    if(this.positon == this.collection.length) this.positon = 0;
    this.clear();
    this.collection[this.positon].classList.add('active');
  }
}

window.onload = () => {
  const carousel = new Carousel('.carousel');

  carousel.init();
}
