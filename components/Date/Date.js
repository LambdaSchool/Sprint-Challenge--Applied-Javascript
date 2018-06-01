const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

let d = new Date();
let date = document.querySelector('.date');

date.textContent = months[d.getMonth()] + " " +
d.getDate() + ", " + d.getFullYear();

date.style.marginLeft = '25px';
