class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftBtn = document.querySelector(".carousel .left-button");
    this.rightBtn = document.querySelector(".carousel .right-button");
    this.images = document.querySelectorAll(".carousel img");
    this.currentIndex = 0;
    this.currentPicture = this.images[this.currentIndex];
    this.currentPicture.style.display = "block";
    this.leftBtn.addEventListener("click", () => {
      this.picLeft();
    });
    this.rightBtn.addEventListener("click", () => {
      this.picRight();
    });
  }
  picLeft() {
    this.currentPicture.style.display = "none";
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    this.currentPicture = this.images[this.currentIndex];
    this.currentPicture.style.display = "block";
  }
  picRight() {
    this.currentPicture.style.display = "none";
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.currentPicture = this.images[this.currentIndex];
    this.currentPicture.style.display = "block";
  }
}

const carousel = new Carousel(document.querySelector(".carousel"));
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
