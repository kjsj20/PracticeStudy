var setTime; //setTimeout
var hit = 0;
var hitflag = true;

function randomNum(){
    var xRandom = Math.random();
    var yRandom = Math.random();
    document.getElementById("bullet").style.left = parseInt(xRandom * 470) + "px";
    document.getElementById("bullet").style.top = parseInt(yRandom * 470) + "px";
    document.getElementById("bullet").style.display = "block";
}

function startgame(){
    stopTimeout();
    document.getElementById("mask").style.display = "none";
    setTime = setTimeout(nonedisplay, 1500);
    // nonedisplay();
    hitflag = true;
    hit = 0;
}

function catchBull(){
    document.getElementById("bullet").style.display = "none";
    hit++;
    hitflag = true;
}

function blcokdisplay(){
    document.getElementById("bullet").style.display = "block";
}

function startdisplay(){
    document.getElementById("bullet").style.display = "none";
    randomNum();
}

function nonedisplay(){
    if(hit === 20){
        endgame();
    }
    else if(hitflag){
        document.getElementById("bullet").style.display = "none";
        randomNum();
        if(hit < 5){
            setTime = setTimeout(nonedisplay, 1200);
        }
        else if(hit >= 5 && hit < 10){
            setTime = setTimeout(nonedisplay, 1000);
        }
        else if(hit >= 10 && hit < 15){
            setTime = setTimeout(nonedisplay, 900);
        }
        else if(hit >= 15 && hit < 20){
            setTime = setTimeout(nonedisplay, 800);
        }
        else{
            setTime = setTimeout(nonedisplay, 700);
        }
        hitflag = false;
    }
    else{
        endgame();   
    }
}

function stopTimeout(){
    clearTimeout(setTime);
}

function endgame(){
    document.getElementById("mask").style.display = "block";
    document.getElementById("bullet").style.display = "none";
    document.getElementById("mask").innerText = "Retry?";
    if(hit < 5){
        alert("총 점수 : " + hit + "\n" + "Stat : 자칭 1인분 스나이퍼" );
    }
    else if (hit >= 5 && hit <= 10){
        alert("총 점수 : " + hit + "\n" + "Stat : 1인분 스나이퍼" );
    }
    else if (hit > 10 && hit <= 15){
        alert("총 점수 : " + hit + "\n" + "Stat : 상위권 스나이퍼" )
    }
    else if(hit > 15 && hit < 20){
        alert("총 점수 : " + hit + "\n" + "Stat : 전쟁에서 살아돌아온 전설의 스나이퍼" );
    }
    else {
        alert("총 점수 : " + hit + "\n" + "Stat : God of 스나이퍼" );
    }
}