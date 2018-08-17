class Carousel {
	constructor(element) {
		this.element = element;
		this.images = document.querySelectorAll('img');
		this.counter = this.images.length - 1;
		this.current = 0;
	}
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');

// let images = document.querySelectorAll('img');
