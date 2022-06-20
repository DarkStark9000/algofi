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

async function mergeSort() {
  disable();

  let speed = document.getElementById("sorts").value;

  speed /= 10;
  speed *= 100;

  const bars = document.querySelectorAll(".bar");

  // l is for left index and
  // r is right index of the sub-array
  // (arr, l, r)
  function mergeS(arr, l, r) {
    if (l >= r) {
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    mergeS(arr, l, m); q
    mergeS(arr, m + 1, r);
    merge(arr, l, m, r);
  }

  enable();
}

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
