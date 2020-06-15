// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>




 function topics(someTopic) {
     const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = someTopic;
    const topics = document.querySelector('topics');

    return tab;
 }

 const entry = document.querySelector('.topics');


 axios.get('https://lambda-times-backend.herokuapp.com/topics')
 .then(response => {
     response.data.topics.forEach(element => {
         const newTopic = topics(element)
         entry.appendChild(newTopic)
         
     });
 })
 .catch(err => {
     console.log("Error on the card")
 })