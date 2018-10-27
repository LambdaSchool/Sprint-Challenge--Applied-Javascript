# Sprint-Challenge Applied Javascript

We've covered a lot this week. We've learned how to plug Javascript into our HTML/CSS static pages and create dynamic content. We learned about the DOM and how we can modify HTML elements dynamically. We've learned about events and how to listen for, and act on them. And finally, we learned about component architecture and how to build components that share functionality and styling with many elements. In this Sprint Challenge we will be utilizing all of the above.

**This project is to be worked on alone but you can use outside resources like Google. You can _reference_ any old code you may have and the training kit content.**

## Set Up The Project With Git

* [ x ] Fork the project into your GitHub user account
* [ x ] Clone the forked project into a directory on your machine
* [ x ] You are now ready to build this project with your preferred IDE

## Comprehension Questions

Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. [ x ] What is the DOM?
2. [ x ] What is an event?
3. [ x ] What is an event listener?
4. [ x ] Why would we convert a NodeList into an Array?
5. [ x ] What is a component?

## Challenge: Lambda Newspaper

We are going to create a Lambda Newspaper. The styling is modeled after the [LA Times Website](http://www.latimes.com). Open it up and you will notice all of the HTML and CSS has already been created and imported properly. Our job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

### Tasks

- [ x ] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

- [ x ] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

- [ x ] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

## Stretch Challenge

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

- [ ] Complete the carousel functionality in `Carousel.js`

- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

- [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

- [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
