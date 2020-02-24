// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const axios = require('axios');
const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
console.log(axiosPromise);

axiosPromise.then(response => {
    console.log('res', response);
});

