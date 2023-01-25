var button = document.getElementById("clickme");
var count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Share : " + count + "/20";
  if (count == 20) {
    document.getElementById("share").innerHTML="Scammed Loser!";
    document.getElementById("scammed").innerHTML="How does it feel to be Scammed?";
    button.style.display = "none";
  }
};