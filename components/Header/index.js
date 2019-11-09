// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //Created All elements
    const header = document.createElement('div');
    header.classList.add('header');

    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = Date()

    const h1 = document.createElement('h1')
    h1.textContent = `Lambda Times`

    const span2 = document.createElement('span')
    span2.classList.add('temp');
    span2.textContent = '98 degrees';

    // Appended All Elements
    header.appendChild(span)
    header.appendChild(h1)
    header.appendChild(span2)

    return header
}


//Select dom Element to appened header function to. 
const container = document.querySelector('.header-container')

container.appendChild(Header())

// axios.get('https://api.openweathermap.org/data/2.5/weather?q=London')