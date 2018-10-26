class TabLink {
    constructor(tabElement) {

        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;

        // Check to see if this.tabData is equal to 'all'
        this.tabData === 'all' ? this.cards = document.querySelectorAll('.card') : this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);

        // Convert to Array and TabCard objects
        this.cards = Array.from(this.cards).map(card => new TabCard(card));

        // Click Events
        this.tabElement.addEventListener('click', () => this.selectTab());
    }

    selectTab() {
        console.log(`${this.tabData} Button was clicked`);

        // Select all elements with the .tab class on them
        const tabs = document.querySelectorAll('.tab');

        // Iterate through the NodeList removing the .active-tab class from each element
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        console.log('Tabs:', tabs);

        // Select all of the elements with the .card class on them
        const cards = document.querySelectorAll('.card');
        console.log('Cards:', cards);

        // Iterate through the NodeList setting the display style each one to 'none'
        cards.forEach(card => card.style.display = 'none');

        // Add a class of ".active-tab" to this.tabElement
        this.tabElement.classList.toggle('active-tab');
        console.log('This Tab:', this.tabData);

        // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement) {
        // Assign this.cardElement to the cardElement DOM reference
        this.cardElement = cardElement;
    }
    selectCard() {
        // Update the style of this.cardElement to display = "flex"
        this.cardElement.style.display = 'flex';
    }

}

// First step! Create a reference to all ".tab" classes.
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
tabs = Array.from(tabs).map(tab => new TabLink(tab));

console.log(tabs);