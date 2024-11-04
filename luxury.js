const frenchText = document.querySelector(".french");
function showEnglish() {
  frenchText.innerHTML = `
    <h2>Welcome!</h2><br><br>Welcome ladies and gentlemen! <br><br>I warmly welcome you to my
            ship. My name is Baron Raoul de Beaudéan and I am the captain of
            this beautiful luxury ship. We are currently in the port of New York, which we will leave this evening for France. Do you know that city on the pic? That is Le Havre in France where this beautiful ocean liner was built.<br><br> Please come with me into the salon. Over a sparkling glass of champagne, I will tell you more
            about the ship and our enchanting trip to Europe.`;
}

function showGerman() {
  frenchText.innerHTML = `
     <h2>Willkommen!</h2><br><br> Willkommen meine Damen und Herren!<br><br> Ich heiße Sie herzlich auf
            meinem Schiff willkommen. Mein Name ist Baron Raoul de Beaudéan und
            ich bin der Kapitän dieses wunderschönen Luxusschiffs. Wir liegen
            gerade im Hafen von New York, den wir heute Abend in Richtung Frankreich verlassen werden. Kennen Sie die Stadt auf dem Foto? Das ist Le Havre (Frankreich); dort wurde dieses Schiff gebaut.<br><br> Bitte kommen Sie mit mir in den Salon. Bei einem prickelnden Glas Champagner
            werde ich Ihnen mehr über das Schiff und unsere bezaubernde Reise
            nach Europa erzählen.
    `;
}
