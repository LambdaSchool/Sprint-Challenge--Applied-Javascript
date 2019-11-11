// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        let articles = response.data.articles
        let js = articles.javascript
        let boot = articles.bootstrap
        let jquery = articles.jquery
        let node = articles.node
        let tech = articles.technology

        js.forEach(element => {
            document.querySelector('.cards-container').appendChild(CardCreator(element))
        });

        boot.forEach(element => {
            document.querySelector('.cards-container').appendChild(CardCreator(element))
        });

        jquery.forEach(element => {
            document.querySelector('.cards-container').appendChild(CardCreator(element))
        });

        node.forEach(element => {
            document.querySelector('.cards-container').appendChild(CardCreator(element))
        });

        tech.forEach(element => {
            document.querySelector('.cards-container').appendChild(CardCreator(element))
        });
    })

    .catch(error => {
        console.log(error)
    })

function CardCreator(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = data.authorPhoto;
    imgContainer.appendChild(img);

    const name = document.createElement('span');
    name.textContent = `By ${data.authorName}`;
    author.appendChild(name);

    return card;
}