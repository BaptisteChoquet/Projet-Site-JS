function passwordGood(){
    let psw1 = document.getElementById("psw");
    let psw2 = document.getElementById("psw-repeat");
    let n = psw1.toString().localeCompare(psw2.toString());
    if (psw1.length < 6) {
    console.log("trop court")
    window.alert("Mot de passe trop court")
  }
  else if (n != 0) {
    console.log("différent")
    window.alert("Mot de passe incorrect")
  }
  else {
    console.log("bonMdP")
    window.location= "signup.html";
  }
  }
    


