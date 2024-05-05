// merge.js
/* eslint-disable */
function disable() {
  const allbtn = document.getElementsByClassName("navbtn");
  for (let btn of allbtn) {
    btn.disabled = true;
    btn.classList.add("disabled");
  }
}

function enable() {
  const allbtn = document.getElementsByClassName("navbtn");
  for (let btn of allbtn) {
    btn.disabled = false;
    btn.classList.remove("disabled");
    btn.classList.add("enabled");
  }
}

async function mergeSort(delay = 100) {
  disable();

  let bars = document.querySelectorAll(".bar");
  let speed = document.getElementById("sorts").value;
  speed /= 10;
  speed *= 100;

  await mergeSortHelper(bars, 0, bars.length - 1, speed);

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "rgb(49, 226, 13)"; // Green color for completed sort
  }

  enable();
}

async function mergeSortHelper(bars, l, r, speed) {
  if (l >= r) return; // Base case: the array is of length 1

  const m = l + Math.floor((r - l) / 2);
  await mergeSortHelper(bars, l, m, speed);
  await mergeSortHelper(bars, m + 1, r, speed);
  await merge(bars, l, m, r, speed);
}

async function merge(bars, l, m, r, speed) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = bars[l + i].style.height;
    bars[l + i].style.backgroundColor = "darkblue"; // Color update
  }
  for (let j = 0; j < n2; j++) {
    R[j] = bars[m + 1 + j].style.height;
    bars[m + 1 + j].style.backgroundColor = "red"; // Color update
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (parseInt(L[i]) <= parseInt(R[j])) {
      if (bars[k]) {
        bars[k].style.height = L[i];
        bars[k].style.backgroundColor = "rgb(24, 190, 255)"; // Color update
      }
      i++;
    } else {
      if (bars[k]) {
        bars[k].style.height = R[j];
        bars[k].style.backgroundColor = "rgb(24, 190, 255)"; // Color update
      }
      j++;
    }
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  while (i < n1) {
    if (bars[k]) {
      bars[k].style.height = L[i];
      bars[k].style.backgroundColor = "rgb(24, 190, 255)"; // Color update
    }
    i++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  while (j < n2) {
    if (bars[k]) {
      bars[k].style.height = R[j];
      bars[k].style.backgroundColor = "rgb(24, 190, 255)"; // Color update
    }
    j++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}
