const englishText = document.getElementById("englishText");

function showGerman() {
  englishText.innerHTML = `
    <h3><br>
        Ende der 1960iger verlagerte sich der Passagiertransport zunehmend auf
        Flugzeuge. Die Passagierzahlen der Ocean Liner ging massiv zurück und
        daher wurde beschlossen, dass die «SS Île de France» verkauft werden sollte.
        <br /><br />
        Am 26. Februar 1959 trat sie daher ihre letzte Fahrt an und wurde noch
        zum Filmstar. Dies lag darin begründet, dass der Filemmacher Andrew
        Stone einen Katastrophenfilm über einen alternden Luxusliner drehen
        wollte. Um alles realistisch darzustellen, verwendete er die «SS Île de France»,
        die im Film aber in «SS Claritin» umbenannt ist. Trotz echter
        Explositionen an Bord zerrissen die Kriter den Film, der einen Verlust
        von 551.000 USD für MGM einbrachte. Die Überreste des Schiffes wurden
        dann in Japan verschrottet.<br /><br />
        <a href="https://www.youtube.com/watch?v=cf986jRl-Fk" target="_blank"
          >The disaster with the ship Ile De France (dies ist der oben genannte
          MGM Film)</a
        ><br><br>Die «SS Île de France» hat 735 Menschen von der Andrea Doria und 24 Crew-Mitglieder des
        Frachters Greenville gerettet. Sie hat rund 300.000 Soldaten zur
        Vorbereitung des D-Days nach Europa und Afrika gebracht und während
        ihres Einsatzes (1927 - 1959) ca. 1,5 Millionen Passagiere über den
        Atlantik transportiert.<br> Dafür gibt es Standing Ovations und einen Gewinnersong!<br /><br />
        <a href="#" onclick="addSound()">
          >> klicken, um die Gewinnerhymne zu spielen (Call to win by GoodBMusic) </a
        ><br /><br />
         <a href="bye.html">>> klicken, um fortzufahren</a>
      </h3>
    `;
}

/*audio */
function addSound() {
  let audio = new Audio("end.mp3");
  audio.play();
}
