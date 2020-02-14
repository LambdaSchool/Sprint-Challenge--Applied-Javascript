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

//funtion to create card
function createCard(infoObj){
//create elements
  const newCard = document.createElement('div');
  const newHeadline = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newImageCtn = document.createElement('div');
  const newAuthorImg = document.createElement('img');
  const newAuthorName = document.createElement('span');

//assign classes
    newCard.classList.add('card');
    newHeadline.classList.add('headline')  ;
    newAuthor.classList.add('author');
    newImageCtn.classList.add('img-container');

//set the content
    newHeadline.textContent = headline;
    newAuthorImg.src = 'imgSrc';
    newAuthorName.textContent = `By ${authorName}`;

//append the elements
    newCard.appendChild(newHeadline, newAuthor, newAuthorName);
    newAuthor.appendChild(newImageCtn);
    newImageCtn.appendChild(newAuthorImg);

return newCard;

}//end createCard()

//get entry point & don't name it entryPoint
const cardEntry = document.querySelector('.cards-container');

//api call
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console.log(response.data.articles);

        //loop response - need keys and indexes?
        // response.data.articles.forEach(article => {
        //     console.log(response);// this is an js array

        //     //console.log(key);


        //     //const freshCard = new Card(article);
        //     //cardEntry.appendChild(freshCard);
        //  });

        // for (let key in response.data.articles){
        //     //console.log(key);//returns javascript, bootstrapp, technology, jquey, node
        // }

        for(let i = 0; i < response.data.articles[key].length; i++){
            const freshCard = createCard(response.data.articles[key][i]);

            // console.log("This" + response.data.articles);
            // console.log(response.data.articles[key][i]);

            
        }

        for (let key in response.data.articles){
            for (let i = 0; i < response.data.articles[key].length; i++){
                const freshCard = createCard(response.data.articles[key][i]);
                entry.appendChild(freshCard);
            }
        }
       

    })//end response
        .catch(error => {
            console.log("Error in cards index.js.")
        })



//create new card


// append to entry point - which will not be named entryPoint
