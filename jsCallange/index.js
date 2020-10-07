const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now"


function handleClick(event){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);