const container = document.querySelector('.content');

function newArray () { 
  for (let i = 0; i < 100; i++) 
  {
    bars= Math.floor(Math.random() * 101);

    const divbar = document.createElement("div"); 
    divbar.classList.add("bar");
    
    divbar.style.height = `${bars * 3}px`;
    divbar.style.transform = `translateX(${i * 30}px)`;
    
    const barLabel = document.createElement("label");
    
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = bars;
    
    divbar.appendChild(barLabel);
    container.appendChild(divbar);
  }
}