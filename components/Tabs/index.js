// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//create function
function createTab(topic){
    //create element
    const newTab = document.createElement('div');
  
    //assign class
    newTab.classList.add('tab');
  
    // set content
    newTab.textContent = topic;
  
    return newTab;
  }//end Tab

//get entry point
const tabEntry = document.querySelector('.topics');
//console.log(tabEntry);

//GET request & promise
axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    //console.log(response);

    //loop response
    response.data.topics.forEach(topic => {
        const freshTab = new createTab(topic);
        //append response
        tabEntry.appendChild(freshTab);
    })
   
  })
  .catch(err => {
    console.log(err);
  });






