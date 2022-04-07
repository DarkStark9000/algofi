async function bubbleSort(delay = 3) 
{
    disable();

    var speed = document.getElementById("sorts").value;
    
    speed = speed / 10;
    speed = speed * 100; 
    
    let bars = document.querySelectorAll(".bar"); 
    
    for(var i = 0; i < bars.length; i++)
    {   
        // bars[i].style.backgroundColor = "darkblue";

        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
        ); 
        
        for(var j = 0; j < ( bars.length - i -1 ); j++)
        {            
            var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
            var val2 = parseInt(bars[j+1].childNodes[0].innerHTML); 
            
            // bars[j].style.backgroundColor = "red"; 
            // bars[j+1].style.backgroundColor = "red";
            
            if(val1 > val2)
            {    
                var temp1 = bars[j].style.height;
                var temp2 = bars[j].childNodes[0].innerText;
                
                bars[j].style.height = bars[j+1].style.height;
                bars[j].style.backgroundColor = "rgb(24, 190, 255)"; //green
                
                bars[j+1].style.height = temp1;
                bars[j+1].style.backgroundColor = "rgb(49, 226, 13)"; //skyblue
                
                bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
                bars[j+1].childNodes[0].innerText = temp2;
            }
            else {
                bars[j].style.backgroundColor = "rgb(49, 226, 13)";  
            }
        }
        
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3)
        ); 
    }

    for(var i = bars.length-1; i >= 0; --i)
    {  
        bars[i].style.backgroundColor = "rgb(24, 190, 255)"; //green
    }

    enable();
}

function disable()
{
    // To disable the button "Generate New Array"
    document.querySelector(".newarr").disabled = true;
    document.querySelector(".newarr").style.backgroundColor = "#D7D7D7";
    document.querySelector(".newarr").style.cursor = "not-allowed";
    
    // To disable the button "Bubble Sort"
    document.querySelector(".bubsort").disabled = true;
    document.querySelector(".bubsort").style.backgroundColor = "#D7D7D7";
    document.querySelector(".bubsort").style.cursor = "not-allowed";
    
}

function enable()
{
    // To enable the button "Generate New Array" after final(sorted)
    document.querySelector(".newarr").disabled = false;
    document.querySelector(".newarr").style.backgroundColor = "#1F2041";
    document.querySelector(".newarr").style.cursor = "pointer";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.querySelector(".bubsort").disabled = false;
    document.querySelector(".bubsort").style.backgroundColor = "#1F2041";
    document.querySelector(".bubsort").style.cursor = "pointer";   
}