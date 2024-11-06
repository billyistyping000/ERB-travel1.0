//Get the button
const bttButton = document.getElementById("backtotop-button");

// When the user clicks on the button, scroll to the top of the document
bttButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
