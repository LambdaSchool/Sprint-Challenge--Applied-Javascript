// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs_topics = document.querySelector(".topics");

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        const topics = response.data.topics;
        topics.forEach(topic => {
            // CREATE ELEMENTS
            const tab = document.createElement("div");
            // ADD CLASSES
            tab.classList.add("tab");
            // ADD TEXT/VALUE
            tab.textContent = topic;
            // APPEND
            tabs_topics.appendChild(tab);
        });
    })
    .catch(error => {
        console.log("🚨", error);
    });
