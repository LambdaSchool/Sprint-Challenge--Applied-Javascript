class Carousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.rotate());
  }
  rotate() {
    document.querySelectorAll('.carousel img').forEach(img => img.classList.remove('image-active'));
    if (this.element.classList.contains('left-button')) {
      if (currentIndex === 0) {
        currentIndex = carouselPics.length -1;
      } else {
        currentIndex--;
      }
      TweenMax.from(".carousel img", 2, {opacity:0, x:100})
      document.querySelectorAll('.carousel img')[currentIndex].classList.add('image-active');
    } 
    else if (this.element.classList.contains('right-button')) {
      if (currentIndex === carouselPics.length -1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      document.querySelectorAll('.carousel img')[currentIndex].classList.add('image-active');
      TweenMax.from(".carousel img", 2, {opacity:0, x:-100})
    }
  }
}

let buttons = document.querySelectorAll('.carousel div');
let carouselPics = document.querySelectorAll('.carousel img');
let currentIndex = 0;

buttons = Array.from(buttons).map(button => new Carousel(button));
document.querySelectorAll('.carousel img')[Math.floor(Math.random() * 3)].classList.add('image-active');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/