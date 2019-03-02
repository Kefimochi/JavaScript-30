const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('mouseover', hovered));
panels.forEach(panel => panel.addEventListener('mouseout', notHovered))

function hovered() {
    this.classList.toggle('open');
  setTimeout(() => {
    this.classList.toggle('open-active');
  }, 700);
}

function notHovered() {
    this.classList.remove('open');
  setTimeout(() => {
    this.classList.toggle('open-active');
  }, 700);
}
