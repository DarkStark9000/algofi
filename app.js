const container = document.querySelector('.content');


function insertion_start () {
  
  let bars = []; 
  
  for (let i = 0; i < 100; i++) 
  {
    bars[i] = Math.floor(Math.random() * 101);

    const bar = document.createElement("div"); 
    bar.classList.add("bar");
    
    bar.style.height = `${bars[i] * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    
    const barLabel = document.createElement("label");
    
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = bars[i];
    
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }

}