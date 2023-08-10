    // Set the countdown date and time
    var countdownDate = new Date("August 8, 2023 18:00:00").getTime();
  
    // Update the countdown every second
    var countdown = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the time remaining
      var distance = countdownDate - now;
  
      // Calculate the days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Espelho";
      }
    }, 1000);