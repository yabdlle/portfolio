// Define colors and messages
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}


const colors = ["#ff5733", "#33D8FF", "#9733FF"]; // Array of colors
const messageArr = ["UMN Student", "Software Engineer", "Frontend Developer"];

var currentMessage = 0;
var textPosition = 0;
var typingSpeed = 100;
var backspacingSpeed = 50;
var resumeDelay = 2000;

function typewriter() {
  var element = document.querySelector("#jobTitle");

  // Update text with color
  element.innerHTML = `<span style="color: ${colors[currentMessage]}">${messageArr[currentMessage].substring(0, textPosition)}</span>`;

  if (textPosition < messageArr[currentMessage].length) {
    textPosition++;
    setTimeout(typewriter, typingSpeed);
  } else {
    setTimeout(backspace, resumeDelay);
  }
}

function backspace() {
  var element = document.querySelector("#jobTitle");

  // Update text with color
  element.innerHTML = `<span style="color: ${colors[currentMessage]}">${messageArr[currentMessage].substring(0, textPosition)}</span>`;

  if (textPosition > 0) {
    textPosition--;
    setTimeout(backspace, backspacingSpeed);
  } else {
    currentMessage = (currentMessage + 1) % messageArr.length;
    setTimeout(typewriter, typingSpeed);
  }
}

// Start the typewriter effect once the page is loaded
window.onload = function() {
  typewriter();
};

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}
