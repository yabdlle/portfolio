function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}
var messageArr = ["UMN Student", "Software Engineer", "Fullstack Developer"];
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

document.getElementById('copy').addEventListener('click', function() {
  // Get the email address
  const email = document.getElementById('email').innerText;

  // Create a temporary textarea element to copy the email address
  const textarea = document.createElement('textarea');
  textarea.value = email;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Show a confirmation message
  const copiedMessage = document.getElementById('copied');
  copiedMessage.classList.add('active');
  
  setTimeout(() => {
    copiedMessage.classList.remove('active');
  }, 2000);
});
