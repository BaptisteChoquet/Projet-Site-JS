
    var elem = document.getElementById("myVideo");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
   
  
  
    //Get the video
    var video = document.getElementById("myVideo");
    
    // Get the button
    var btn = document.getElementById("myBtn");


    // Pause and play the video, and change the button text
    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
    
    