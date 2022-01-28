function ChangeColor(){    
    let backgroundRed= document.querySelectorAll(".red");
    console.log(backgroundRed);
    let redText= document.querySelectorAll(".red-text")
console.log(redText);
    let colorRed = '#';
    random = Math.random().toString(16).slice(2,8);
    console.log(random);
    colorRed += random
    
for(i=0; i<=backgroundRed.length; i++){
    backgroundRed[i].style.backgroundColor = colorRed;
    redText[i].style.color = colorRed;
}

    
}
