### Questions:

1. What is the DOM?

- The DOM is the document object model which is rendered on the page for you to see. It takes the information from the HTML file and adds all the CSS and javascript onto it. It can be manipulated live for the local session. The DOM can also be changed with CSS and javascript code.

2. What is an event?

- An event is when something occurs that can be referenced in the javascript code in order for us to execute actions upon. It can range from a mouse click, keypress, or window resizing.

3. What is an event listener?

- An event listener is attaching a sentry to a document node to watch for something to happen. Once the event takes place, an additional callback function will run code to take action.

4. Why would we convert a NodeList into an Array?

- Nodelist has some methods built in but not as robust in terms of methods that arrays have to offer. Nodelists has methods like .entries(), .forEach(), .keys(), .values(). However, an array has additional useful methods like .map(), .filter(), .reduce().

5. What is a component?

- A component is an abstraction that helps fulfill one job well. We used classes in our lectures to to add an event listener to DOM elements. The class component here was to simply do just that one job efficiently. It saves us time from having to repeat our code and keep processes modular.