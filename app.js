/* eslint-disable */
const allbtn = document.getElementsByClassName("navbtn");

const container = document.querySelector(".content");
let width;

bar_co = document.getElementById("barc").addEventListener("change", newArray);

function newArray() {
  container.innerHTML = "";
  container.innerText = "";

  const barc = document.getElementById("barc").value;

  width = Math.floor(window.innerWidth / barc) - 7;
  if (width > 36) {
    width = 36;
  }

  for (let i = 0; i < barc; i++) {
    bars = Math.floor(Math.random() * 101);

    const divbar = document.createElement("div");
    divbar.classList.add("bar");

    divbar.style.height = `${bars * 4}px`;
    divbar.style.width = `${width}px`;

    if (barc >= 71) {
      divbar.style.transform = `translateX(${i * 14.6}px)`;
    } else if (barc >= 60 && barc < 71) {
      divbar.style.transform = `translateX(${i * 20}px)`;
    } else if (barc > 0 && barc < 40) {
      divbar.style.transform = `translateX(${i * width * 1.2}px)`;
    } else if (barc >= 40 && barc < 60) {
      divbar.style.transform = `translateX(${i * width * 1.2}px)`;
    }

    const barLabel = document.createElement("label");

    barLabel.classList.add("bar_id");
    barLabel.innerHTML = bars;

    if (barc >= 71) {
      barLabel.style.fontSize = "0.8em";
    } else if (barc >= 60 && barc < 71) {
      barLabel.style.fontSize = "1em";
    } else if (barc > 0 && barc < 40) {
      barLabel.style.fontSize = "1.1em";
    } else if (barc >= 40 && barc < 60) {
      barLabel.style.fontSize = "1em";
    }

    divbar.appendChild(barLabel);
    container.appendChild(divbar);
  }
}
