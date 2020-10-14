
// 사용할 변수를 먼저 지정해준다.
let rangeBar = document.querySelector("#rangeBar"),
    textInput = document.querySelector("#textInput"),
    btnPlay = document.querySelector("#wrapper button"),
    verses = document.querySelector("#verses"),
    vsResult = document.querySelector("#vsResult"),
    maxVal = document.querySelector("#maxVal"),
    max = 0,
    randomNum = 0;
    
// rangeBar를 움직일때마다 max 값을 변경
function betweendMaxVal() {
    rangeBar.addEventListener("input", function () {
        max = rangeBar.value;
        maxVal.innerText = max;
    });
}

// 클릭 시 이벤트 발생 함수 
function clickPlayButton(){
    btnPlay.addEventListener("click", function(){
        versesData();
    });
}

// 승부할 숫자를 출력 
function versesData() {
    // 숫자가 아닌 문자를 입력하면 경고창
    if (textInput.value === "") {
        alert("숫자를 입력해주세요.");
    } else {
        // 컴퓨터의 max값보다 내가 선택한 값이 높으면 에러 
        if (parseInt(textInput.value) > parseInt(max)) {
            alert("입력한 값이 max 값보다 크면 안됩니다.");
        } else {
            var tag = "You chose: ";
            tag += textInput.value;
            tag += ", the machine chose: ";
            // 미리 선언해둔 randomNum 에 0 ~ max 사이 값을 대입 
            randomNum = parseInt((Math.random() * (parseInt(max) + 1)));
            tag += randomNum;
            tag += "."
            // 위에 받아둔 tag를 div안에 Text 로 출력
            verses.innerText = tag;
            // 게임이 시작되면 승패 판별 
            versesResultData();
        }
    }
}

// 게임의 승패를 출력 내가 입력한 값과 컴퓨터가 출력한 값이 같으면 승리, 나머지는 전부 패배
function versesResultData(){
    (parseInt(textInput.value) === randomNum) ? vsResult.innerText = "You won!": vsResult.innerText = "You lost!";
}

function init() {
    betweendMaxVal();
    clickPlayButton();
}

init();