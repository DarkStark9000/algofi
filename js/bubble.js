/* eslint-disable */

// const allbtn = document.getElementsByClassName("navbtn");

function disable() {
  for (btn of allbtn) {
    btn.disabled = true;
    btn.classList.add("disabled");
  }
}

function enable() {
  for (btn of allbtn) {
    btn.disabled = false;
    btn.classList.remove("disabled");
    btn.classList.add("enabled");
  }
}

async function bubbleSort(delay = 3) {
  disable();

  let speed = document.getElementById("sorts").value;

  speed /= 10;
  speed *= 100;

  const bars = document.querySelectorAll(".bar");

  for (var i = 0; i < bars.length; i++) {
    // bars[i].style.backgroundColor = "darkblue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );

    for (let j = 0; j < bars.length - i - 1; j++) {
      const val1 = parseInt(bars[j].childNodes[0].innerHTML);
      const val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

      // bars[j].style.backgroundColor = "red";
      // bars[j+1].style.backgroundColor = "red";

      if (val1 > val2) {
        const temp1 = bars[j].style.height;
        const temp2 = bars[j].childNodes[0].innerText;

        bars[j].style.height = bars[j + 1].style.height;
        bars[j].style.backgroundColor = "rgb(24, 190, 255)"; // green

        bars[j + 1].style.height = temp1;
        bars[j + 1].style.backgroundColor = "rgb(49, 226, 13)"; // skyblue

        bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
        bars[j + 1].childNodes[0].innerText = temp2;
      } else {
        bars[j].style.backgroundColor = "rgb(49, 226, 13)";
      }
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 3)
    );
  }

  for (var i = bars.length - 1; i >= 0; --i) {
    bars[i].style.backgroundColor = "rgb(49, 226, 13)"; // green
  }

  enable();
}
