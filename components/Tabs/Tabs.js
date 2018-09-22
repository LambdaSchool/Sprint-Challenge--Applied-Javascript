class TabLink {
  constructor(element) {
    this.element = element;
    // get tab data set values
    this.tabData = this.element.dataset.tab;

    if (this.tabData === "all") {
      // if all tabs is selected, grab all cards with .card class
      this.cards = document.querySelectorAll('.card');
    } else {
      // if any other card is selected, grab individual dataset
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }

    // map an array from cards to make a TabCard class
    this.cards = Array.from(this.cards).map(cards => new TabCard(cards));
    this.element.addEventListener('click', () => {
      this.selectTab();
    });
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => { tab.classList.remove('active-tab'); });
    this.element.classList.add("active-tab");

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => { card.style.display = "none" });
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }
  selectCard() {
    this.element.style.display = null;
  }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));


//Once you are complete, call the .select method on the first tab
//tabs[0].select();
tabs[0].selectTab();