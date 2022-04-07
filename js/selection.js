async function selectionSort(delay = 3) 
{
    var speed = document.getElementById("sorts").value;
    
    speed = speed / 10;
    speed = speed * 100;
    
    disable();
    
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
            }, speed)
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
    
    enable();
}

function disable()
{
    // To disable the button "Generate New Array"
    document.querySelector(".newarr").disabled = true;
    document.querySelector(".newarr").style.backgroundColor = "#D7D7D7";
    document.querySelector(".newarr").style.cursor = "not-allowed";
    
    // To disable the button "Selection Sort"
    document.querySelector(".slcsort").disabled = true;
    document.querySelector(".slcsort").style.backgroundColor = "#D7D7D7";
    document.querySelector(".slcsort").style.cursor = "not-allowed";
    
}

function enable()
{
    // To enable the button "Generate New Array" after final(sorted)
    document.querySelector(".newarr").disabled = false;
    document.querySelector(".newarr").style.backgroundColor = "#1F2041";
    document.querySelector(".newarr").style.cursor = "pointer";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.querySelector(".slcsort").disabled = false;
    document.querySelector(".slcsort").style.backgroundColor = "#1F2041";
    document.querySelector(".slcsort").style.cursor = "pointer";   
}