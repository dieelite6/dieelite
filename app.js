  var count = 1; // variable für Versuche, am Anfang 3 
  function checkAnswer() { //func prüft Antwort 
    var solutionInput = document.getElementById("text").value //uebernahme der eingabe des inputfeldes
    if (solutionInput == "Justus") { //antwort pruefen 
      sleep(1000) // delay 1000ms
      window.location.replace("loader.html"); //weiterleitung auf congrats page
       
    } else { //unumgesetzte Idee für Tipp bei falscher Eingabe des Lösungswortes 
        count -=1;
        document.getElementById("clicks").innerHTML = count;
          if(count == 0) {
            alert("Tipp")
            location.reload();
          }
    }
    document.getElementById("text").value = null; //input feld clearen
}

function sleep(milliseconds) {   //delay function 
  const date = Date.now();
  let currentDate = null;
    do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

