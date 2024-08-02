// Define colors and messages
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}




const colors = ["#0080FF","#0080FF", "#0080FF"];
const messageArr = ["UMN Student", "Software Engineer", "Fullstack Developer"];

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


document.addEventListener('DOMContentLoaded', () => {
  const copyEmailIcon = document.getElementById('copy-email-icon');
  const email = document.getElementById('email');
  const copiedMessage = document.getElementById('copied');
  
  // Highlight email on mouseover
  copyEmailIcon.addEventListener('mouseover', () => {
      email.classList.add('highlight-email');
  });

  // Remove highlight on mouseout
  copyEmailIcon.addEventListener('mouseout', () => {
      email.classList.remove('highlight-email');
  });

  // Copy email functionality
  copyEmailIcon.addEventListener('click', () => {
      navigator.clipboard.writeText(email.textContent).then(() => {
          copiedMessage.textContent = 'Copied!';
          copiedMessage.classList.add('active');

          // Remove the "Copied" message after a few seconds
          setTimeout(() => {
              copiedMessage.classList.remove('active');
              copiedMessage.textContent = '';
          }, 2000); // 2 seconds before "Copied" message disappears
      }).catch(err => {
          console.error('Failed to copy text: ', err);
      });
  });
});
