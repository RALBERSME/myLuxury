function toGerman() {
  const englText = document.querySelector(".englishText");
  englText.innerHTML = `
 <p class="text">
        Bis zum Ausbruch des 2. Weltkriegs hatte die «SS Île de France» mehr als 346
        Transatlantik-Überquerungen absolviert und dabei mehr als 245 000
        Menschen transportiert. Sie war somit eines der erfolgreichsten Schiffe
        der 1930iger Jahre.
        <br />
        <br />
        Am 3. September 1939 lief sie ein letztes Mal in Richtung New York aus,
        dieses Mal vollgefrachtet mit 1.777 Passagieren, also weit mehr als die
        1.644 regulären Passagiertkapazitäten, die das Schiff aufwies. Die
        Passagiere bestanden überwiegend aus Amerikanern, die vor einem Krieg
        fliehen wollten. Nur zwei Tage vorher war Deutschland illegal in Polen
        eingewandert. Drei Stunden, nachdem die «SS Île de France» den französischen
        Hafen verlassen hatte, erklärte Frankreich, wie auch England, den
        Deutschen den Krieg.
        <br />
        Die Nerven der Reisenden, aber auch der Mannschaft war angespannt.
        Jederzeit könnten sie nun von deutschen U-Booten angegriffen werden.
        <br />
        <br />
        Am 9. September 1939 lief das Schiff endlich im Hafen von New York ein.
        Die Reederei stellt den Dienst des Schiffes ein. Aber das Schiff konnte
        nicht dauerhaft im Hafen liegen bleiben. Daher wurde es nach fünf
        Monaten nach Staten Island geschleppt. Die Mannschaft wurde von 800 Mann
        auf nur noch 100 Mann reduziert, um die Kosten zu senken und die
        Instandhaltung des Schiffs zu sichern.
        <br />
        Im März 1940 wurde das Schiff unter den Befehl der britischen Admiralität
        gestellt. Es erhielt einen schwarzgrauen Militäranstrich und wurde mit
        12 000 Tonnen Kriegsmaterialien, Panzern, Öl für U-Boote und in Teile
        zerlegten Bombern beladen. Das Schiff legte im Mai 1940 mit Ziel Europa
        ab.
        <br />
        Anfang 1941 wurde das Schiff in aller Eile in einen Truppentransporter
        umgewandelt. Zusammen mit den Ocean Liners Queen Mary, Queen Elizabeth,
        der Mauritania und der New Amsterdam, sowie weiterer Schiffe bildetet
        sich im März 1941 ein riesiger Konvoi, der mit mehr als 4.000 Soldaten
        australische Truppen nach Nordafrika transportierte. Aufgrund der Eile
        waren Belüftung, Verpflegung und sanitäre Einrichtungen nicht bedacht
        und die Überfahrten wurden daher für die australischen Soldaten zur
        Qual.
        <br />
        1944 wurde die «SS Île de France» an die Cunard White Star Line Reederei
        übergeben, die den Transport amerikanischer und kanadischer Truppen nach
        Europa vorbereitete.
        <br />
        Das Schiff wurde somit ein weiteres Mal umgebaut, doch auch, wenn die
        Konditionen für die Soldaten hierdurch besser wurden, war es immer noch
        sehr eng und unbequem. Als Helferin zur Vorbereitung des sog. D-Days kam
        ihr dennoch eine wichtige Rolle zu. Schätzungsweise 485.000 Soldaten
        hatte sie transportiert und das einstige Luxusschiff sah inzwischen
        ramponiert und abgenutzt aus.       
        
      </p>

`;
}

/*audio */
function playAudio() {
  let audio = new Audio("war.mp3");
  audio.play();
}

/*comparison*/

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = w / 2 + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e);
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e.changedTouches ? e.changedTouches[0] : e;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
initComparisons();
