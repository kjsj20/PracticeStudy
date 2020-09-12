var lf = 0;

function moveChar(){
    if(event.keyCode === 37){
        moveLeft();
    }
    else if(event.keyCode === 39){
        moveRight();
    }
}

function moveLeft(){
    lf-= 10;
    document.getElementById("pic").style.left = lf + "px";
}

function moveRight(){
    lf+= 10;
    document.getElementById("pic").style.left = lf + "px";
}

