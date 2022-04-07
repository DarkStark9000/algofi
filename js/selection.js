async function selectionSort(delay = 3) 
{
    let bars = document.querySelectorAll(".bar"); 
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) { 
        
        min_idx = i;
        bars[i].style.backgroundColor = "darkblue";

        for (var j = i + 1; j < bars.length; j += 1) { 
            bars[j].style.backgroundColor = "red"; 

            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 50)
            ); 

            var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 

            if (val1 < val2) {
                if (min_idx !== i) { 
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            } else { 
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        } 

        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2; 

        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3)
        ); 

        bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
    }
    
    // To enable the button "Generate New Array" after final(sorted)
    document.querySelector(".navbtn").disabled = false;
    document.querySelector(".navbtn").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.querySelector(".navbtn").disabled = false;
    document.querySelector(".navbtn").style.backgroundColor = "#6f459e";
}

function disable()
{
  // To disable the button "Generate New Array"
  document.querySelector(".navbtn").disabled = true;
  document.querySelector(".navbtn").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.querySelector(".navbtn").disabled = true;
  document.querySelector(".navbtn").style.backgroundColor = "#d8b6ff";  
}