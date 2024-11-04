const painting = document.querySelector(".painting");
const pinsel = document.getElementById("pinsel");
const blueSpot = document.getElementById("blueSpot");
const oldShip = document.getElementById("oldShip");
const title = document.querySelector("h1");
const information = document.querySelector(".information");
const englishText = document.getElementById("englishText");
const cta = document.getElementById("cta");
function changeShip() {
  oldShip.style.animation = "changeShip 2s linear forwards";
}
setTimeout(() => {
  changeShip();
}, 3400);
setTimeout(() => {
  oldShip.setAttribute("src", "Images/IleDeFrance.png");
  oldShip.style.width = "500px";
  oldShip.style.height = "300px";
  oldShip.style.marginTop = "20px";
}, 9000);
setTimeout(() => {
  blueSpot.style.animation = "spotShrink 4s linear forwards";
}, 7000);

function fadeOut() {
  pinsel.style.animation = "fadeOutElements 1s linear forwards";
  title.classList.remove("hide");
  information.classList.remove("hide");
}
setTimeout(() => {
  fadeOut();
}, 8800);

function germanVersion() {
  cta.classList.add("hide");
  englishText.textContent = `Erst nach der Kapitutation Deutschlands ging die «SS Île de France» zurück in
        französische Hände. Es folgten langjährige Repraraturarbeiten. Nach dem
        2. Weltkrieg besaß Frankreich keine glänzenden Ocean Liner mehr. Die «SS Paris» brannte am 19. April 1939 aus und sank, die «SS Normandy» wurde
        1942 ein Opfer der Flammen. Als Kriegsentschädigung erhielt Frankreich
        den deutschen Luxusliner «SS Europa», welches das Schwesterschiff der
        legendären «SS Bremen» war.
        <br />
        <br />
        Daher setzten die Franzosen so viel daran, die «SS Île de France» wieder
        in einen stattlichen Liniendampfer umzubauen. Die drei Schornsteine
        wurden entfernt und an ihre Stelle zwei größere, modernere Schornsteinge
        gesetzt. Das Schiff wurde neu gestrichen und erhielt eine moderne
        Innenausstattung. 1949 nahm es seine Transatlantikdienstleistungen
        wieder auf und überzeugte erneut als elegantes Luxusschiff.`;
}
