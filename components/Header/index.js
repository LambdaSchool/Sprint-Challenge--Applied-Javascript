// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(object) {
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");
}

const headcon = document.querySelector(".header-container");

date.textcontent = "SMARCH 28, 2019";
title.textcontent = "Lambda Times";
temp.textcontent = "98°";


header.appendChild(date);
header.appendChild(title);
header.appendChild(temp);




//Class List
header.classList.add("header");
date.classlist.add("date");
temp.classList.add("temp");

headcon.appendChild(Header);