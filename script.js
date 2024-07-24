function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}
var messageArr = ["UMN Student", "Software Engineer", "Frontend Developer", "Backend Developer", "Data Scientist", "Machine Learning Engineer"];
var currentMessage = 0;
var textPosition = 0;
var typingSpeed = 100;
var backspacingSpeed = 50;
var resumeDelay = 2000;

function typewriter() {
  var element = document.querySelector("#jobTitle");
  if (textPosition < messageArr[currentMessage].length) {
    element.innerHTML = messageArr[currentMessage].substring(0, textPosition + 1);
    textPosition++;
    setTimeout(typewriter, typingSpeed);
  } else {
    setTimeout(backspace, resumeDelay);
  }
}

function backspace() {
  var element = document.querySelector("#jobTitle");
  if (textPosition > 0) {
    element.innerHTML = messageArr[currentMessage].substring(0, textPosition - 1);
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
