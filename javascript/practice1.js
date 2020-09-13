// var  what = "jaesung";
// console.log(what);
// var what = true;
// console.log(what);
// var what = 666;
// console.log(what);
// var what = 6.66;
// console.log(what);
// const arrprac = ["js", 26, true , 'Seoul'];
// console.log(arrprac[3]);
// const jsInfo = {
//     name : "js",
//     age : 26,
//     gender : "M",
//     isHandsome: true,
//     favMovies: [
//         "Avengers", "Iron Man", "Captain America"
//     ]
// }
// console.log(jsInfo.name,jsInfo.age, jsInfo.gender,jsInfo.isHandsome,jsInfo.favMovies[2]);
// // console.log(jsInfo, console);
// console.log(sayHello(`js`,`26`));
// function sayHello(name, age){
//     return `Hello ${name} 
//     you are ${age} years old`
// }

// const calculator = {
//     plus : function(a,b){
//         return a + b;
//     }
// }

// const plus = calculator.plus(5,3);
// console.log(`plus : ${plus}`)

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR =  "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
//     // console.log(currentColor);
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// title.addEventListener("click", handleClick);

// init();

// const clickClass = "clicked"




// ============================

// String const what = "jaesung";
// console.log(what);
// Boolean const what = false;
// Number const what = 666;
// float const what = 55.1;
// const daysOFWeek = ["js", "26", true, "Seoul"] array
// const jsInfo = {
//     name: "js",
//     age: 26,
//     gender: "Male",
//     isHandsome: true,
//     favMovies: [
//         "Along the gods", "LOTR", "Oldboy"
//     ],
//     favFood: [
//         {
//             name: "Kimchi",
//             fatty: false
//         }, {
//             name: "Cheese burger",
//             fatty: true
//         }
//     ]
// } //Object

// console.log(jsInfo, console);
// function sayHello(name, age) {
//     return `Hello
// ${name} you are ${age} years old`
// }
// const greetJs = sayHello("Js", 14)
// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     multiply: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         return a
//         / b;     },     pow: function(a, b){         return a ** b;     } };
// console.log(greetJs) const plus = calculator.plus(5, 5); const minus =
// calculator.minus(3, 1); const multiply = calculator.multiply(2, 2); const
// divide = calculator.divide(6, 2); const pow = calculator.pow(2, 4);
// console.log(`plus : ${plus}, minus : ${minus}, multiply : ${multiply}, divide
// : ${divide}, pow : ${pow}`); const title = document.getElementById("title")
//// 아래것과 같은의미 querySelector 노드의 첫번째 자식을 반화해오는 내장함수
// const title = document.querySelector("#title");
// console.dir(document);
// // document.getElementById("title").style.color = "red"; console.error("Fuck");
// title.innerHTML = "hi js";
// // title.style.color = "red";
// document.title = " I own you now";

function handleClcik() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
    // console.log(currentColor);
}

// const age = prompt("How old are you");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function init(){
    title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClcik);

init();

function handleOffline(){
    console.log('bye bye');
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();