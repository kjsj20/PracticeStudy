
var rockimg;
var img;
var wrapper;
var loadRock;

function init(){
    wrapper = document.querySelector("#wrapper");
    wrapper.style.width = `${1000}px`
    wrapper.style.height = `${800}px`
    rockimg = document.querySelector(".rockimg");
}

function createRock(){
     loadRock = new Rockimgload(200,0, "../images/rockman/rightMain.png");
}

function gameLoop(){
    loadRock.tick();
    loadRock.render();
}

window.addEventListener("load", function(){
    document.body.addEventListener("keydown", function(e){
        var key = e.keyCode;
        switch(key){
            case 37: 
            loadRock.velX = -5;
            loadRock.img.src = "../images/rockman/left1.png"
            break;
            case 39: 
            loadRock.velX = 5; 
            loadRock.img.src = "../images/rockman/right1.png";
            break;
        }
    });

    document.body.addEventListener("keyup", function(e){
        var key = e.keyCode;
        switch(key){
            case 37: 
            loadRock.velX = 0;  
            loadRock.img.src = "../images/rockman/leftMain.png";
            break;
            case 39: 
            loadRock.velX = 0; 
            loadRock.img.src = "../images/rockman/rightMain.png";
            break;
        }
    });
    
    init();
    createRock();
    setInterval("gameLoop()", 10);
    setInterval("loadRock.moveimg()", 100);
});