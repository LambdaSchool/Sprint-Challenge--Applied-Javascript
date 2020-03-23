/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')

function carouselCreator () {
  const carousels = document.createElement('div')
  const leftbutton = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const rightbutton = document.createElement('div')

  carousels.classList.add('carousel')
  leftbutton.classList.add('left-button')
  leftbutton.textContent = '<'
  rightbutton.classList.add('right-button')
  rightbutton.textContent = '>'

  img1.src = 'assets/carousel/mountains.jpeg'
  img2.src = 'assets/carousel/computer.jpeg'
  img3.src = 'assets/carousel/trees.jpeg'
  img4.src = 'assets/carousel/turntable.jpeg'

  carousels.appendChild(leftbutton)
  carousels.appendChild(img1)
  carousels.appendChild(img2)
  carousels.appendChild(img3)
  carousels.appendChild(img4)
  carousels.appendChild(rightbutton)


  img1.style.display = 'block'
 
  // leftbutton.addEventListener('click')
  // rightbutton.addEventListenet('click')
  
  return carousels
}

carouselContainer.appendChild(carouselCreator())
