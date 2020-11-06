
    let elem = document.getElementById("myVideo");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    let video = document.getElementById("myVideo");
    
   
    let btn = document.getElementById("myBtn");


    
    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
    
    function nextFunction(){
      window.location = "lejeudeladame.html";
  }
  
  let inputStar = document.getElementsByClassName("rate");
  localStorage.setItem("rate", inputStar.value);
  
  localStorage.getItem("rate");
  
    