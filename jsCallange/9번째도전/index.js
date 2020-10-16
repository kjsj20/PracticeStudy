const btn = document.querySelectorAll("button");
let textNum = document.querySelector("input");
let currentVal = 0;
let lastVal = 0;
let operflag = 0;
let valflag = 0;
let oper1, oper2;
function btnNumClick(val) {
  if (parseFloat(textNum.value) === 0 || operflag === 1) {
    textNum.value = "";
    operflag = 0;
  }
  textNum.value += val;
  currentVal = parseFloat(textNum.value);
}

function btnOperator(val) {
  // currentVal = textNum.value;
  oper1 = val;
  if (valflag === 0) {
    lastVal = parseFloat(textNum.value);
    valflag = 1;
  } else {
    btnEqual(1);
  }
  oper2 = val;
  currentVal = 0;
  operflag = 1;
}

function btnEqual(flag) {
  if (
    currentVal !== 0 &&
    (oper2 === "+" || oper2 === "-" || oper2 === "*" || oper2 === "/")
  ) {
    textNum.value = eval(parseFloat(lastVal) + oper2 + parseFloat(currentVal));
    lastVal = parseFloat(textNum.value);
    currentVal = 0;
    oper2 = "";
    valflag = flag;
  }
}

function btnCancelClick() {
  currentVal = 0;
  lastVal = 0;
  operflag = 0;
  valflag = 0;
  textNum.value = currentVal;
}

function init() {}

init();
