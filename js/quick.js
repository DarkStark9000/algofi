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
