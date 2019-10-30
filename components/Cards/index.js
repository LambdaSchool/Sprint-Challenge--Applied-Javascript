// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function newCard(data){
    //main div
    const $cardDiv = document.createElement('div');
    $cardDiv.classList.add('card');

    //headline div
    const $headlineDiv = document.createElement('div');
    $headlineDiv.classList.add('headline');
    $headlineDiv.textContent = data.headline;

    //author div
    const $authorDiv = document.createElement('div');
    $authorDiv.classList.add('author');

    //img Container 
    const $authorImgCont = document.createElement('div');
    $authorImgCont.classList.add('img-container');

    //author image
    const $authorImg = document.createElement('img');
    $authorImg.src = data.authorPhoto;

    //Author name 
    const $authorName = document.createElement('span');
    $authorName.textContent = data.authorName;

    //append
    $cardDiv.appendChild($headlineDiv);
    $cardDiv.appendChild($authorDiv);

    $authorDiv.appendChild($authorImgCont);
    $authorDiv.appendChild($authorName);

    $authorImgCont.appendChild($authorImg);

    const $mainCardCont = document.querySelector('.cards-container');
    $mainCardCont.appendChild($cardDiv);

    return $cardDiv;

    
}

axios.get('https://lambda-times-backend.herokuapp.com/articles') 
    .then((response) => { 
        console.log(response);
        response.data.articles.javascript.forEach(article => newCard(article));
        response.data.articles.bootstrap.forEach(article => newCard(article));
        response.data.articles.jquery.forEach(article => newCard(article));
        response.data.articles.node.forEach(article => newCard(article));
        response.data.articles.technology.forEach(article => newCard(article));
    })

    .catch((err) => { 
        console.log(err) 
    })
