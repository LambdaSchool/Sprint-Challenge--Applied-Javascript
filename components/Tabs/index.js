// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the 
//address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabTopicCreator (data){
    const $newTab = document.createElement('div');
    $newTab.classList.add('tab');
    $newTab.textContent = data;

    const $tabSelector = document.querySelector('.tabs');
    const $topicSelector = document.querySelector('.topics');

    $topicSelector.appendChild($newTab);

    return $tabSelector;
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => { 
        response.data.topics.forEach(topic => tabTopicCreator(topic));
        console.log(response);
    })

    .catch((err) => { 
        console.log(err) 
    })