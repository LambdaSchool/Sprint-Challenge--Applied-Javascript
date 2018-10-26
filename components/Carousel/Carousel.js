class Carousel {
  constructor(element) {
    this.element = element;

    this.left = this.element.querySelector('.left-button');
    this.right = this.element.querySelector('.right-button');

    this.images = document.querySelectorAll(`.image`);
    this.images = Array.from(this.images);
    this.index1 = 0;
    this.index2 = 0;

    this.left.addEventListener('click', event => this.select(event));
    this.right.addEventListener('click', event => this.select(event));

    // this.tween = TweenMax.to('.image', {opacity: 1, rotationX: 360, ease: Sine.easeIn });
  }

  select(event) {
    if (event.target === this.right) {
      this.images.forEach(image => (image.style.display = 'none'));
      if (this.index1 === 1) {
        this.images[0].style.display = 'none';
        this.images[1].style.display = 'block';
        this.index1 = 2;
        this.index2 = 0;
      } else if (this.index1 === 2) {
        this.images[1].style.display = 'none';
        this.images[2].style.display = 'block';
        this.index1 = 3;
        this.index2 = 1;
      } else if (this.index1 === 3) {
        this.images[2].style.display = 'none';
        this.images[3].style.display = 'block';
        this.index1 = 0;
        this.index2 = 2;
      } else {
        this.images[3].style.display = 'none';
        this.images[0].style.display = 'block';
        this.index1 = 1;
        this.index2 = 3;
      }
    }

    if (event.target === this.left) {
      this.images.forEach(image => (image.style.display = 'none'));
      if (this.index2 === 1) {
        this.images[2].style.display = 'none';
        this.images[1].style.display = 'block';
        this.index2 = 0;
        this.index1 = 2;
      } else if (this.index2 === 2) {
        this.images[3].style.display = 'none';
        this.images[2].style.display = 'block';
        this.index2 = 1;
        this.index1 = 3;
      } else if (this.index2 === 3) {
        this.images[0].style.display = 'none';
        this.images[3].style.display = 'block';
        this.index2 = 2;
        this.index1 = 0;
      } else {
        this.images[1].style.display = 'none';
        this.images[0].style.display = 'block';
        this.index2 = 3;
        this.index1 = 1;
      }
    }
  }
}

let carousel = document.querySelectorAll('.carousel');

//carousel = new Carousel
carousel = Array.from(carousel).map(part => new Carousel(part));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
