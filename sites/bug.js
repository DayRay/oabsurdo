function startAnimation() {
    var animationElement = document.getElementById("cerejeira");
    var position = 0;
    var interval = setInterval(moveElement, 10);
  
    function moveElement() {
      if (position >= 300) {
        clearInterval(interval);
        position = 0;
      } else {
        position += 5;
        animationElement.style.left = position + "px";
      }
    }
  }