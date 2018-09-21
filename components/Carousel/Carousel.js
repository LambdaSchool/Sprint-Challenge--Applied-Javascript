class Carousel {
	constructor(carousel) {
		/*-- DOM selectors, constants ------------------*/
		this.currentIndex = 0;
		this.carousel = carousel;
		this.imgs = Array.from(this.carousel.querySelectorAll('img'));
		this.leftButton = document.querySelector('.left-button');
		this.rightButton = document.querySelector('.right-button');
		/*-- event listeners ---------------------------*/
		this.leftButton.addEventListener('click', () => this.shiftLeft());
		this.rightButton.addEventListener('click', () => this.shiftRight());
	}

	shiftLeft() {
		this.currentIndex === 0 ? (this.currentIndex = 3) : (this.currentIndex -= 1);
		this.imgs.forEach(img => img.classList.replace('img-show', 'img-null'));
		this.imgs[this.currentIndex].classList.replace('img-null', 'img-show');
	}

	shiftRight() {
		this.currentIndex === 3 ? (this.currentIndex = 0) : (this.currentIndex += 1);
		this.imgs.forEach(img => img.classList.replace('img-show', 'img-null'));
		this.imgs[this.currentIndex].classList.replace('img-null', 'img-show');
	}
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
