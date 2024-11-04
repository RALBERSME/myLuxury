const dataBox = document.querySelector(".dataBox");
function oldImage() {
  const salon = document.getElementById("salon");
  salon.setAttribute("src", "Images/alterSalon.png");
  dataBox.innerHTML = `
  <p>source of pic: https://de.wikipedia.org/wiki/%C3%8Ele_de_France_(Schiff)#/media/Datei:Paquebot_Ile_de_France-Grand_Salon_de_1re_classe.jpg</p>
        <br />
        <h3 onclick="newImage()">
          If you want to see the current version from the 1950ies, click here
        </h3>`;
}

function newImage() {
  const salon = document.getElementById("salon");
  salon.setAttribute("src", "Images/salonIledeFrance.png");
  dataBox.innerHTML = `
  <p>source of pic: https://en.wikipedia.org/wiki/SS_%C3%8Ele_de_France#/media/File:SS_Ile_de_France_Grand_Salon.JPG</p>
        <br />
        <h3 onclick="oldImage()">
          If you want to see the old version from 1926, click here
        </h3>`;
}

/* information in German */

function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("hide");
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("hide");
}
function toGerman() {
  const modal = document.querySelector(".modal");

  modal.innerHTML = `
 <h4 class="info">
   Unser wundervolles Schiff trägt den Namen <strong>«SS Île de France»</strong> und wurde 1926 zu Wasser gelassen. Die französische Reederei Compagnie Générale Transatlantique hatte mit der französischen Regierung 1916 einen Vertrag über den Bau von vier Passagierschiffen abgeschlossen. Das erste dieser Schiffe war die <em>«SS Paris»</em>, die 1921 in Dienst gestellt wurde. Am 14. März 1926 fand dann der Stapellauf der Ile de France statt, die ihre erste Probefahrt am 29. Mai 1926 startete. Zu dieser Zeit kämpften die großen Ocean Liner um das Blaue Band, die Ehrung für das Schiff, welches am schnellsten den Atlantik überqueren konnte. Die «SS Île de France» mit einer Länge von 214,35 metern und einer Breite von 28 metern, war zwar mit einer Höchstgeschwindigkeit von 23,5 Knoten per Stunde (das sind ca. 44 Stundenkilometer) nie das schnellste Schiff.....aber es gehörte zu den Schiffen mit einer bezaubernden Innenausstattung. Alles war im Stil des  Art déco gehalten. 
   <br />
   <br />
   <a href="https://de.wikipedia.org/wiki/Art_d%C3%A9co" target="_blank">
     >>lesen Sie mehr über den Art Deco Stil
   </a>
   <br />
   <a href="https://www.youtube.com/watch?v=Q2g_xbq-2v8" target="_blank">
     >>Film über Jugendstil und Art Deco Stil <br><br> <u>Hinweis:</u><br> Während der Jugendstil durch elegante Kurven und langgeschwungene Linien verzückt, legt der Art Déco Wert auf spitze Winkel und geometrische Formen.
   </a>
   <br />
   <br />
   Die «SS Île de France» war der weltgrößte Passagierschiffsneubau nach dem Ersten Weltkrieg.
   <br />
   Die Saloneinrichtung aus dem Jahr 1926 zeigt den üppig goldverzierten Salon der ersten Klasse. Aber auch die anderen Räume hoben sich von früheren Ozeandampfern ab. Alle Kabinen verfügten nun über Betten statt Kojen. Eine prächtige Treppe führte in den exquisiten Speisesaal. Sogar ein Karussell für Kinder gab es an Bord.
   <br />
   Die Jungerfernfahrt trat die «SS Île de France» am 22. Juni 1927 an. Damals wurde sie unter großem Beifall in New York empfangen. Aufgrund ihres Glanzes bevorzugten die reichen Amerikaner und Europäer dieses Schiff für ihre Transatlantiküberquerungen und spülten damit viel Geld in die Kassen der französischen Reederei. Der Luxus wurde noch erhöht, indem 1928 ein Wasserflugzeug-Katapult auf dem Schiff installiert wurde von denen Flugboote starten konnten, die dem Schiff mit der Post vorausflogen, wenn die «SS Île de France» ca. 200 Seemeilen vom Land entfernt war. Somit konnte die Post bereits einen Tag vor Ankunft des Schiffes auf dem Festland weiterverteilt werden. Somit war zumindest ihr Postdienst (bis 1930, als diese Errungenschaft aus Kostengründen eingestellt wurde) der schnellste zwischen Europa und den USA.  
   <br />
   <br />
  Am 1. September 1939 begann der Zweite Weltkrieg, als dessen Folge der zivile transatlantische Verkehr seitens Frankreich eingestellt wurde.
   <br />
   <br />
      <p onclick="closeModal()" id="closeModal">
     klicken Sie hier, um die Infobox zu schließen
   </p>
 </h4>;
 `;
}

/*audio */
function playAudio() {
  let audio = new Audio("french.mp3");
  audio.play();
}
