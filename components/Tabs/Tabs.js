class TabLink {
	constructor(element) {
		/*-- DOM selectors, constants ------------------*/
		this.element = element;
		this.tabData = this.element.dataset.tab;
		if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
		} else {
			this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }
		/*-- connect sister component ------------------*/
		this.cards = Array.from(this.cards).map(card => new TabCard(card));
		/*-- event listeners ---------------------------*/
		this.element.addEventListener('click', () => this.selectTab());
	}

	selectTab() {
		// Select all elements with the .tab class on them
		const tabs = document.querySelectorAll('.tab');
		// Iterate through the NodeList removing the .active-tab class from each element
		tabs.forEach(tab => tab.classList.remove('active-tab'));
		// Add a class of ".active-tab" to this.element
		this.element.classList.add('active-tab');

		// Select all of the elements with the .card class on them
		const cards = document.querySelectorAll('.card');
		// Iterate through the NodeList setting the display style each one to 'none'
		cards.forEach(card => (card.style.display = 'none'));
		// Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
		this.cards.forEach(card => card.selectCard());
	}
}

class TabCard {
	constructor(element) {
		/*-- DOM selectors, constants ------------------*/
		this.element = element;
	}
	selectCard() {
		// Update the style of this.element to display = null
		this.element.style = null;
	}
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].selectTab();
