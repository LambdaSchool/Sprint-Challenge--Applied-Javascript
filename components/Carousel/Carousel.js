class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = document.querySelector('.left-button');
        this.rightArrow = document.querySelector('.right-button');
        this.currentIndex = 0;
        this.images = document.querySelectorAll('.carousel img');
        this.images = Array.from(this.images);
        this.leftArrow.addEventListener('click', (e) => {
            if (e) {
                this.images.forEach(image => {
                    image.style.opacity = '0';
                    image.style.display = 'none'});
                    this.images[this.currentIndex].style.display = 'block';
                    this.images[this.currentIndex].style.opacity = '1';
                if (this.currentIndex < this.images.length - 1) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = 0
                }
            };
        });
        this.rightArrow.addEventListener('click', (e) => {
            if (e) {
                this.images.forEach(image => {
                    image.style.opacity = '0';
                    image.style.display = 'none'});
                    this.images[this.currentIndex].style.display = 'block';
                    this.images[this.currentIndex].style.opacity = '1';
                if (this.currentIndex < this.images.length - 1) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = 0
                }
            };
        });
    }
}
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
document.querySelector('.carousel img:last-of-type').style.display = "block";
document.querySelector('.carousel img:last-of-type').style.opacity = '1';


/* If You've gotten this far, you're on your own! Although we will give you some hints:
 [x]  1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
 [x]  2. You will need to grab a reference to all of the images
 [x]  3. Create a current index
 [x]  4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
 [x]  6. Have fun!
*/