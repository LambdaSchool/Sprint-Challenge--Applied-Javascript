// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
    
    //header element creation 
    const $headerDiv = document.createElement('div');
    const $headerSpan = document.createElement('span');
    const $headerH1 = document.createElement('h1');
    const $headerSpan2 = document.createElement('span')
    
    //header class assignment. 

    $headerDiv.classList.add('header');
    $headerSpan.classList.add('date');
    $headerSpan2.classList.add('temp');

    //header text content addition
    $headerSpan.textContent = 'March 28, 2019';
    $headerH1.textContent = 'Lambda Times';
    $headerSpan2.textContent = '98 \u00b0';

    //append 
    $headerDiv.appendChild($headerSpan);
    $headerDiv.appendChild($headerSpan);
    $headerDiv.appendChild($headerH1);
    $headerDiv.appendChild($headerSpan2);

    return $headerDiv;

}

const $headerCont = document.querySelector('.header-container');
$headerCont.appendChild(header());

