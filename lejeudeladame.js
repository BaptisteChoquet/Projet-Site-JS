    //Get the video
    let video = document.getElementById("myVideo");
    
    // Get the button
    let btn = document.getElementById("myBtn");

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

function previousFunction(){
window.location = "Community.html";
}

function nextFunction(){
    window.location = "Série3.html";
}

let inputStar = document.getElementsByClassName("rate");
localStorage.setItem("rate", inputStar.value);

localStorage.getItem("rate");