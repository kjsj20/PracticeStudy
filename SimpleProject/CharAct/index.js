var lf = 0;
var ud = 0;

function moveChar(){
    if(event.keyCode === 37){
        moveLeft();
    }
    else if(event.keyCode === 39){
        moveRight();
    }
    else if(event.keyCode === 38){
        ud-= 10;
        pic.style.top = ud + "px";
    }
    else if(event.keyCode === 40){
        ud+= 10;
        pic.style.top = ud + "px";
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

function moveUpDown(){
    pic = document.querySelector("#pic");
}
