class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.imageData = this.element.dataset.images;

    
  }



}

let carousel = document.querySelector(".carousel");
let leftBtn = carousel.querySelector(".left-button");
let rightBtn = carousel.querySelector(".right-button");
let currentIndex = 0;

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    this.images = this.images[currentIndex - 1];
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex )
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
