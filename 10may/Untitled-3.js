const inputt = document.getElementById("input");
const buttonn = document.getElementById("button");
const txtt = document.getElementById("txtt");
const inputdiv = document.getElementById(".inputdiv");
buttonn.addEventListener("click", run);
var count = 0;
function run() {
  if (inputt.value != "") {
    count++;
    var paragraf = document.createElement("p");
    var deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "X";
    paragraf.innerText = count + ")" + inputt.value;

    txtt.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    inputt.value = "";
  }
  deleteButton.addEventListener("click", function Deletee() {
    txtt.removeChild(paragraf);
  });
}
