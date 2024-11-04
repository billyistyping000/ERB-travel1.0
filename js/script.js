//Get the button
const bttButton = document.getElementById("backtotop-button");

// Add click event listener to the button
bttButton.addEventListener("click", console.log ('bttButton function!!!'));

// When the user clicks on the button, scroll to the top of the document
bttButton.addEventListener("click", backToTop);
  
function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

