const frenchText = document.querySelector(".french");
function showEnglish() {
  frenchText.innerHTML = `
    <h2>Welcome!</h2><br><br>Welcome ladies and gentlemen! <br><br>I warmly welcome you to my
            ship. My name is Baron Raoul de Beaudéan and I am the captain of
            this beautiful luxury ship. We are currently in the port of New York, which we will leave this evening for France. Do you know that city on the pic? That is Le Havre in France where this beautiful ocean liner has its home port.<br><br> Please come with me into the salon. Over a sparkling glass of champagne, I will tell you more
            about the ship and our enchanting trip to Europe.`;
}

function showGerman() {
  frenchText.innerHTML = `
     <h2>Willkommen!</h2><br><br> Willkommen meine Damen und Herren!<br><br> Ich heiße Sie herzlich auf
            meinem Schiff willkommen. Mein Name ist Baron Raoul de Beaudéan und
            ich bin der Kapitän dieses wunderschönen Luxusschiffs. Wir liegen
            gerade im Hafen von New York, den wir heute Abend in Richtung Frankreich verlassen werden. Kennen Sie die Stadt auf dem Foto? Das ist Le Havre (Frankreich); dort befindet sich der Heimathafen des Schiffs.<br><br> Bitte kommen Sie mit mir in den Salon. Bei einem prickelnden Glas Champagner
            werde ich Ihnen mehr über das Schiff und unsere bezaubernde Reise
            nach Europa erzählen.
    `;
}

/*magic glass */
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

imageZoom("captain", "myresult");
