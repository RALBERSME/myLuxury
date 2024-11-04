function changeText() {
  const textMessage = document.getElementById("startText");
  textMessage.innerHTML = `<span>click </span><br /><span id="yellow"
              >on the <br>yellow edge</span
            >`;
}
function resetText() {
  const textMessage = document.getElementById("startText");
  textMessage.innerHTML = `<span>Start </span><br /><br><span id="yellow"
              >luxury travel</span
            >`;
}
