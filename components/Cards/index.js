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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data);

    let bootstrap = response.data.articles.bootstrap.forEach(item => {
      //  console.log(item)
      const newArticle = new articleCreator(item);
    });

    let javascript = response.data.articles.javascript.forEach(item => {
      //   console.log(item)
      const newArticle = new articleCreator(item);
    });

    let jquery = response.data.articles.jquery.forEach(item => {
      //   console.log(item)
      const newArticle = new articleCreator(item);
    });

    let node = response.data.articles.node.forEach(item => {
      // console.log(item)
      const newArticle = new articleCreator(item);
    });

    let technology = response.data.articles.technology.forEach(item => {
      // console.log(item)
      const newArticle = new articleCreator(item);
    });
  })
  .catch(err => {
    console.log(err);
  });

function articleCreator(data) {
  const newArticleDiv = document.createElement("div");
  newArticleDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = data.headline;
  newArticleDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  newArticleDiv.appendChild(headlineDiv);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  headlineDiv.appendChild(imgDiv);

  const authorImg = document.createElement("img");
  authorImg.src = data.authorPhoto;
  imgDiv.appendChild(authorImg);

  const authorSpan = document.createElement("span");
  authorSpan.textContent = data.authorName;
  imgDiv.appendChild(authorSpan);

  const container = document.querySelector(".cards-container");
  container.appendChild(newArticleDiv);

  return newArticleDiv;
}
