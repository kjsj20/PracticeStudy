const btn = document.querySelectorAll("button");
let textNum = document.querySelector("input");
let currentVal = 0;
let lastVal = 0;
let operflag = 0;
let oper;
function btnNumClick(val){
    
    if(parseInt(textNum.value) === 0 || operflag === 1){
        textNum.value = "";
        operflag = 0;
    }
    textNum.value += val;
    currentVal = parseInt(textNum.value);
}

function btnOperator(val){
    // currentVal = textNum.value;
    oper = val;
    lastVal = parseInt(textNum.value);
    operflag = 1;
}

function btnEqual(){
    if(oper === "+"){
        textNum.value = parseInt(lastVal) + parseInt(currentVal);
    } else if (oper === "-"){
        textNum.value = parseInt(lastVal) - parseInt(currentVal);  
    } else if (oper === "*"){
        textNum.value = parseInt(lastVal) * parseInt(currentVal);  
    } else if (oper === "/"){
        textNum.value = parseInt(lastVal) / parseInt(currentVal);  
    } 
}

function btnCancelClick(){
    currentVal = 0;
    textNum.value = currentVal;
}

function init(){

}

init();