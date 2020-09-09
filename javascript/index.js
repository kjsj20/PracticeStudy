// String const what = "jaesung"; console.log(what); Boolean const what = false;
// Number const what = 666; float const what = 55.1; const daysOFWeek = ["js",
// "26",true,"Seoul"] array
const jsInfo = {
    name: "js",
    age: 26,
    gender: "Male",
    isHandsome: true,
    favMovies: [
        "Along the gods", "LOTR", "Oldboy"
    ],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        }, {
            name: "Cheese burger",
            fatty: true
        }
    ]
} //Object

// console.log(jsInfo, console); function sayHello(name, age){     return `Hello
// ${name} you are ${age} years old` } const greetJs = sayHello("Js", 14) const
// calculator = {     plus: function(a, b){         return a + b;     },
// minus: function(a, b){         return a - b;     },     multiply: function(a,
// b){         return a * b;     },     divide: function(a, b){         return a
// / b;     },     pow: function(a, b){         return a ** b;     } };
// console.log(greetJs) const plus = calculator.plus(5, 5); const minus =
// calculator.minus(3, 1); const multiply = calculator.multiply(2, 2); const
// divide = calculator.divide(6, 2); const pow = calculator.pow(2, 4);
// console.log(`plus : ${plus}, minus : ${minus}, multiply : ${multiply}, divide
// : ${divide}, pow : ${pow}`); const title = document.getElementById("title")
// 아래것과 같은의미 querySelector 노드의 첫번째 자식을 반화해오는 내장함수
const title = document.querySelector("#title");
console.dir(document);
// document.getElementById("title").style.color = "red"; console.error("Fuck");
title.innerHTML = "hi js";
// title.style.color = "red";
document.title = " I own you now";

function handleClcik() {
    // console.log("I have been resized");
    title.style.color = 'yellow';
}

title.addEventListener("click", handleClcik);

const age = prompt("How old are you");

if(age > 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if (age > 21) {
    console.log("go ahed");
} else {
    console.log("to young");
}

// console.log(age);