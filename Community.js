    
    var video = document.getElementById("myVideo");
    
    
    var btn = document.getElementById("myBtn");

    let elem = document.getElementById("myVideo");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
      }
    }

function nextFunction(){
    window.location = "lejeudeladame.html";
}

let inputStar = document.getElementsByClassName("rate");
localStorage.setItem("rate", inputStar.value);

localStorage.getItem("rate");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
