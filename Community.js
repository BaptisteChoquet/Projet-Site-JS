    //Get the video
    var video = document.getElementById("myVideo");
    
    // Get the button
    var btn = document.getElementById("myBtn");

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

function nextFunction(){
    window.location = "lejeudeladame.html";
}

let inputStar = document.getElementsByClassName("rate");
localStorage.setItem("rate", inputStar.value);

localStorage.getItem("rate");