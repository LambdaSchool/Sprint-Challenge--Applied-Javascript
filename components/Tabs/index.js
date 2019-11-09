// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// tabMaker funcion creates tabs for .tabs
function tabMaker(topic) {

    const div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = topic

    return div
}

// Grabs the ellement to add new tabs too
const topics = document.querySelector('.topics')
// topics.addEventListener('click', event => {
//     event.currentTarget.classList.toggle('title')
// })

const tabs = document.querySelector('.tabs');


// topics.classList.toggle('.tabs')

// Testing Funcion
// topics.appendChild(tabMaker('well hello'))
// console.log(topics);


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response, reject) => {
        //console.log(response.data.topics) //<-- Data to read through
        response.data.topics.forEach((topic) => {
        topics.appendChild(tabMaker(topic))
        
        })
    })
    .catch((error) => {
        console.log(`The request was rejected ${error}`)
    })