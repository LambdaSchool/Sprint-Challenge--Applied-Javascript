class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;

    
    this.leftButton = this.carouselElement.querySelector('.left-button');
    this.rightButton = this.carouselElement.querySelector('.right-button');

    this.images = document.querySelectorAll('.carousel img');

    this.index = 0;
    this.images[this.index].style.display = 'block';

    this.leftButton.addEventListener('click', () => this.move(-1));
    this.rightButton.addEventListener('click', () => this.move(1));
  }

  move(dir) {
    this.images[this.index].style.display = 'none';
    this.index += dir;
    if(this.index >= this.images.length) {
      this.index = 0;
    } else if(this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.images[this.index].style.display = 'block';
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/