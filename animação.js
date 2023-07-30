const link = document.getElementById('link');

link.addEventListener('click', () => {
  link.classList.add('glitch-effect');

  setTimeout(() => {
    link.classList.remove('glitch-effect');
  }, 2000);
});