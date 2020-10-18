const selectFont = document.querySelector("#selectFont");
const optionFont = document.querySelector("#selectFont option");
// const body = document.querySelector("body");

function changeSel(){
    selectFont.addEventListener("change", function(){
        let selectVal = selectFont.selectedIndex + selectFont.options[selectFont.selectedIndex].value;
        console.log(selectVal);
        console.log(selectFont.selectedIndex);
        body.style.fontFamily = selectVal.substr(1, selectVal.length - 1);
        localStorage.setItem("font", selectVal);
    });
}

function getFont(){
    const font = localStorage.getItem("font");
    // console.log(font);
    body.style.fontFamily = font.substr(1, font.length - 1);
    selectFont.selectedIndex = font.substr(0,1);
}

function init(){
    changeSel();
    getFont();
}

init();