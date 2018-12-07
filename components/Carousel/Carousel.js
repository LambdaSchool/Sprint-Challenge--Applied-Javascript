class Carousel {
    constructor(el) {
        //Assign DOM elements
        this.carousel = el;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');
        this.slides = this.carousel.querySelectorAll('img');
        this.currentSlide = this.slides[0];
        this.currentSlideIndex = 0;
        
        //Assign Event Listeners
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());

        //Show current slide/image
        this.currentSlide.style.display = 'flex';

        //Keep track if Carousel Animating or not
        this.animating = false;
        
        //Create TimeBar Reference
        this.timeBar = document.querySelector('.time-bar');
        this.timeBarStart();
        
        //Create Slide Skip-To Buttons
        this.skipTosContainer = this.carousel.querySelector('.slide-skips');
        this.skipToBtns = [];
        this.slides.forEach((s, i) => {
            let newSkip = document.createElement('div');
            newSkip.classList.add('slide-skip');
            newSkip.dataset.slide = i;
            newSkip.addEventListener('click', () => this.skipToSlide(i));
            this.skipTosContainer.appendChild(newSkip);
            this.skipToBtns.push(newSkip);
        });
        this.slideSkipBtnActivate(this.currentSlideIndex);
    }

    moveLeft() {
        //If a slide transition IS NOT happening, we can do this.
        if(!this.animating) {
            //Hitting left will pause the automatic looping of images. This gets resumed if you move the slide right.
            TweenMax.killAll();
            this.timeBar.style.width = '0%';
            //Hide all images, then display the next slide to the right/-1  index
            let exitSlide = this.currentSlide;
            let nextSlideIndex = this.currentSlideIndex - 1;
            let nextSlide = undefined;
            if(this.slides[nextSlideIndex] !== undefined) {
                this.currentSlideIndex = nextSlideIndex;
                nextSlide = this.slides[nextSlideIndex];
                // this.slides.forEach(s => {
                //     s.style.display = 'none';
                // });
                this.currentSlide = nextSlide;
                //this.currentSlide.style.display = 'flex';
            } else {
                this.currentSlideIndex = this.slides.length - 1;
                nextSlide = this.slides[this.slides.length - 1];
                // this.slides.forEach(s => {
                //     s.style.display = 'none';
                // });
                this.currentSlide = nextSlide;
                //this.currentSlide.style.display = 'flex';
            }
            this.slideSkipBtnsDeactivate();
            this.slideSkipBtnActivate(this.currentSlideIndex);
            this.animateCarousel(exitSlide, this.currentSlide);
        }
        
    }

    moveRight() {
        //If a slide transition IS NOT happening, we can do this.
        if(!this.animating) {
            //Hide all images, then display the next slide to the right/+1  index
            let exitSlide = this.currentSlide;
            let nextSlideIndex = this.currentSlideIndex + 1;
            let nextSlide = undefined;
            if(this.slides[nextSlideIndex] !== undefined) {
                this.currentSlideIndex = nextSlideIndex;
                nextSlide = this.slides[nextSlideIndex];
                // this.slides.forEach(s => {
                //     s.style.display = 'none';
                // });
                this.currentSlide = nextSlide;
                //this.currentSlide.style.display = 'flex';
            } else {
                this.currentSlideIndex = 0;
                nextSlide = this.slides[0];
                // this.slides.forEach(s => {
                //     s.style.display = 'none';
                // });
                this.currentSlide = nextSlide;
                //this.currentSlide.style.display = 'flex';
            }
            this.slideSkipBtnsDeactivate();
            this.slideSkipBtnActivate(this.currentSlideIndex);
            this.animateCarousel(exitSlide, this.currentSlide);
            this.timeBarReset();
        }
    }

    animateCarousel(exit, next) {
        this.animating = true;
        //Animate exit/current slide fading out.
        TweenMax.fromTo(exit, .5, {
            opacity: 1
        }, {
            opacity: 0,
            onComplete: () => {
                exit.style.display = 'none';
                exit.style.opacity = 1;
                next.style.display = 'flex';
                TweenMax.fromTo(next, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    onComplete: () => {
                        this.animating = false;
                    }
                });
            }
        });
    }

    skipToSlide(i) {
        if(!this.animating) {
            //Pause carousel
            TweenMax.killAll();
            this.timeBar.style.width = '0%';
            //Set slide skip button to active, set the rest to inactive.
            this.slideSkipBtnsDeactivate();
            this.slideSkipBtnActivate(i);
            //Hide all images, then display the next slide to the right/-1  index
            let exitSlide = this.currentSlide;
            let nextSlideIndex = i;
            let nextSlide = undefined;

            this.currentSlideIndex = nextSlideIndex;
            nextSlide = this.slides[nextSlideIndex];
            this.currentSlide = nextSlide;

            this.animateCarousel(exitSlide, this.currentSlide);
        }
    }

    slideSkipBtnsDeactivate() {
        this.skipToBtns.forEach(s => {
            s.style.backgroundColor = 'rgba(0,0,0,0)';
            s.classList.remove('active');
        });
    }

    slideSkipBtnActivate(i) {
        this.skipToBtns[i].style.backgroundColor = 'white';
        this.skipToBtns[i].classList.add('active');
    }

    timeBarStart() {
        let maxWidth = document.querySelector('.carousel').clientWidth;
        TweenMax.fromTo(this.timeBar, 6, {
            width: '0%'
        }, {
            width: maxWidth,
            onComplete: () => {
                this.moveRight();
                this.timeBarReset();
            }
        });
    }

    timeBarReset() {
        TweenMax.to(this.timeBar, 1, {
            width: '0%',
            onComplete: () => {
                this.timeBarStart();
            }
        });
    }
}

let carouselDOM = document.querySelector('.carousel');
let carousel = new Carousel(carouselDOM);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/