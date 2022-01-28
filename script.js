function ChangeColor(){    
    let backgroundRed= document.querySelectorAll(".red");
    console.log(backgroundRed);
    let redText= document.querySelectorAll(".red-text")
console.log(redText);
    let colorRed = '#';
    random = Math.random().toString(16).slice(2,8);
    console.log(random);
    colorRed += random
    let borderChange= document.querySelector(".details-up")
    console.log(borderChange);
    borderChange.style.borderBottom= `10px ${colorRed} solid`;
for(i=0; i<backgroundRed.length; i++){
    backgroundRed[i].style.backgroundColor =  colorRed;
}
for(i=0; i<redText.length; i++){
    redText[i].style.color = colorRed
}
    
}
