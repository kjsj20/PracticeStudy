const body =  document.querySelector("body");
const btn = document.querySelector("#head button");
let cgTime;
let image;
let prevNum = 0;
const IMG_NUMBER = 10;

// function handleImgLoad(){
//     console.log("finished loading")
// }

function paintImage(imgNumber){
    image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    let number = Math.floor(Math.random() * IMG_NUMBER);
    if(number === prevNum){
        console.log(number);
        number = number + 1;
    }
    prevNum = number;
    return number;
}

// function bodyFont(){
//     body.style.fontFamily = "sdafas" + "," + "";    
// }

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

function playPhoto(){
    removeImage();
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

function removeImage(){
    body.removeChild(image);
}

function playPhotoClick(){
    if(btn.innerText === "▶"){
        btn.innerText = "■"
        cgTime = setInterval("playPhoto()", 5000);
    } else {
        btn.innerText = "▶"
        clearInterval(cgTime);
    }
}

init();