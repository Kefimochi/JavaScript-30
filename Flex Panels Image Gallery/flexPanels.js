const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('mouseover', hovered));
panels.forEach(panel => panel.addEventListener('mouseout', notHovered))

function hovered() {
  setTimeout(() => {
    this.classList.toggle('open');
  }, 300);
  setTimeout(() => {
    this.classList.toggle('open-active');
  }, 700);
}

function notHovered() {
  setTimeout(() => {
    this.classList.remove('open');
  }, 300);
  setTimeout(() => {
    this.classList.toggle('open-active');
  }, 700);
}
