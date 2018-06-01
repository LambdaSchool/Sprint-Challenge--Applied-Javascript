class Tabs {
  constructor(element){
    this.element = element;
    // create a reference to all the ".tab" classes
    this.tabs = this.element.querySelectorAll('.tab');
    // Notice that we are passing a new tab AND a reference to Tabs by using "this"
    this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this) );
    // Assign activeTab to the first item in the tabs array
    this.activeTab = this.tabs[0];
    // init is simply calling a custom method named init(), nothing to do here
    this.init();
  }

  init(){
    // Invoke the selectTab() method on activeTab so we can see the tab when the page loads.
    this.activeTab.selectTab();
  }

  updateActive(tabElement){
    // Invoke the deselectTab() on activeTab to clear the styling on the tab
    this.activeTab.deselectTab();
    // assign activeTab to tabElement to update it's apperance
    this.activeTab = tabElement;
  }

  getCards(data){
    // Update the logic in the if statment to check if 'all' is equal to the passed in data.
    if(data === 'all')
     {
      // Return a reference to all the ".card" classes
      return document.querySelectorAll('.card');
    } else {
      // Return a reference to the data attributes of all the ".card" classes.  Hint: use the passed data value in getCards() to accomplish this.
      return document.querySelectorAll(`.card[data-tab="${data}"]`)
    }
  }
}

class TabLink {
  constructor(element, parent){
    // assign this.element to the element reference
    this.element = element;
    // assign this.parent to the parent reference
    this.parent = parent;
    // Nothing to update here, notice we are accessing the parent's method getCards(), nothing to update here
    this.cards = parent.getCards(this.element.dataset.tab);
    // Map over the cards array and convert each card reference into a new TabCard object. Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', this.selectTab.bind(this));
  }

  selectTab(){
    // Notice we are invoking updateActive on the parent class of TabLink, nothing to update here
    this.parent.updateActive(this);
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }

  deselectTab(){
    // Remove the class ".active-tab" from this.element
    this.element.classList.remove('active-tab');
    // Notice we are looping through the this.cards array and invoking deselectCard() from the TabCard class, nothing to update here
    this.cards.forEach( card => card.deselectCard());
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = null;
  }
  deselectCard(){
    // Update the style of this.element to display = "none"
    this.element.style.display = 'none';
  }
}

// Create a reference to ".tabs"
let tabs = document.querySelectorAll('.tabs');
// Map over the array and convert each tab reference into a new Tabs object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new Tabs(tab));
