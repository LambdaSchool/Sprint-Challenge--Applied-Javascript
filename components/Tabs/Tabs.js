class TabCard {
  constructor($element) {
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element = $element;
  }
  selectCard() {
    // show the card
    this.element.addClass("tab-card-selected");
  }
  deselectCard() {
    // hide the card
    this.element.removeClass("tab-card-selected");
  }
}

class TabLink {
  constructor($element, $parent) {
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element = $element;
    // assign this.parent to the parent parameter
    this.parent = $parent;

    // Note that we are calling getCards() on Tabs (The parent of TabLink) and passing the data attribute: data-tab, no need to update this line of code.
    this.cards = this.parent.getCards(this.element.data('tab'));

    // Using jQuery, map over the array of cards.  In your callback function, create new instances of the TabCard class that contain a card reference. TabCard(card) as an example.
    this.cards = this.cards.map((index, card) => {
      return new TabCard($(card), this);
    });

    // You will need to create a click handler for the TabLink element that calls selectTab()
    this.element.click(() => {
        this.Tabs.updateActive(this);
        this.selectTab();
      });
    };

    selectTab() {
      // use this.parent to call the updateActive() method and pass the `this` keyword as a parameter
      this.parent.updateActive(this);
      // using a jQuery method, add a class to this.element named "active-tab"
      this.element.addClass("active-tab");
      // iterate over each card using the .each() method in jQuery. call the selectCard() method in your callback function
      this.cards = this.parent.each(this.element.selectCard('card'));
    }

    deselectTab() {
      // use a jQuery method to remove the class "active-tab" from this.element
      this.element;
      // iterate over each card using the .each() method in jQuery. call the deselectCard() method in your callback function
      this.cards;
    }
  }

  class Tabs {
    constructor(element) {
      this.element = $(element);

      // Using jQuery, find all of the tabs on this element.
      this.tabs;

      this.tabs = this.tabs.map((i, tab) => new TabLink(tab, this));

      // Set the initial active tab to the first tab in the list.
      this.activeTab;

      this.init();
    }

    init() {
      // use activeTab to call the selectTab() method
      this.activeTab;
    }

    updateActive(tabElement) {
      // use activeTab to call the deselectTab() method
      this.activeTab;
      // assign activeTab to tabElement
      this.activeTab;
    }

    getCards(data) {
      // This method is meant to get all the cards from the HTML page.  
      // If the data supplied is 'all' then all of the cards should be returned. 
      // Otherwise, only cards matching the data attribute should be returned. 
    
    }
  }

  // Using jQuery, select the correct tabs component. Then initialize the Tabs class.
  let tabs = $(".");
  // tabs = new Tabs(tabs)