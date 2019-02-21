function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = document.querySelectorAll('.key');
    //Since keys is an array, we can't just call addEventListener
    //Instead, for each key add an event listener
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
