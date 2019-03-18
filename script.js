var i = 0;
var txt = `Hi! I'm Daniel, a Columbia-based self-taught web-developer!`;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

