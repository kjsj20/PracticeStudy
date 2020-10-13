// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector("#toDoForm"),
        task = document.querySelector("#task"),
        pendingList = document.querySelector("#pendingList"),
        finishedList = document.querySelector("#finishedList");

let pendingToDos = [],
    finishedToDos = []; //list를 담을 배열 선언

// localStorage에 pendingToDo데이터를 세팅
function appendPendingToDo(){
    localStorage.setItem("pendingToDo", JSON.stringify(pendingToDos));
}

// localStorage에 finishedToDo데이터를 세팅
function appendFinishedToDo(){
    localStorage.setItem("finishedToDo", JSON.stringify(finishedToDos));
}

// pendingToDos에서 삭제될 값을 뺀뒤 다시 pendingToDos로 가져와 세팅한다.
function pendingDelList(event){
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);

    //filter 함수로 해당 id를 제외한 값을 다 받아온다. 그 값들만 배열에 들어감. ★
    const delToDos = pendingToDos.filter(function(todo){
        return todo.id !== parseInt(li.id)
    });

    pendingToDos = delToDos;
    appendPendingToDo();
}

// pendingToDos 배열의 누른 버튼에 해당하는 span의 text 값을가져오기 위해 셋팅
// 체크버튼을 눌렀을때 pending을 삭제한 뒤 finished 에 추가한다. 
// 함수에 매개변수를 주어 진행하려 했으나 () 을 쓰면 강제 실행되어 event 값을 다른
// 함수로 먼저 가져오는 선택을 하였음... 처음엔 paint 부분에 바로 event를 주었으나 
// load 부분 forEach로 가져오는 text 값을 못받아오는걸 확인...후 고민 후 현재 로직 완성
// 특정 변수를 선언하여 받아오는식으로 이 로직 포함 모든 로직 개선이 필요하다 생각함.
function pendingGetVal(event){
    pendingDelList(event);
    const pendingBtn = event.target;
    const pendingLi = pendingBtn.parentNode;
    const pendingSpan = pendingLi.querySelector("span");
    const text = pendingSpan.innerText;
    paintFinishedList(text);
}

// finishedToDos에서 삭제될 값을 뺀뒤 다시 finishedToDos로 가져와 세팅한다.
function finishedDelList(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);

    const delToDos = finishedToDos.filter(function(todo){
        return todo.id !== parseInt(li.id)
    });

    finishedToDos = delToDos;
    appendFinishedToDo();
}

// finishedToDos 배열의 누른 버튼에 해당하는 span의 text 값을가져오기 위해 셋팅
// 이전버튼을 눌렀을때 finished을 삭제한 뒤 pending 에 추가한다. 
function finishedGetVal(event){
    finishedDelList(event);
    const finishedBtn = event.target;
    const finishedLi = finishedBtn.parentNode;
    const finishedSpan = finishedLi.querySelector("span");
    const text = finishedSpan.innerText;
    paintPendingList(text);
}

// 화면에 finishedList를 그려준다.
function paintFinishedList(val){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDel = document.createElement("button");
    const btnFinished = document.createElement("button");
    const newId = finishedToDos.length + 1;
    btnDel.innerText = "❌";
    btnDel.addEventListener("click", finishedDelList);
    btnFinished.innerText = "⏪";
    btnFinished.addEventListener("click", finishedGetVal);
    span.innerText = val;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(btnDel);
    li.appendChild(btnFinished);
    finishedList.appendChild(li);
    const toDoObj = {
        text : val,
        id : newId
    }
    finishedToDos.push(toDoObj);
    appendFinishedToDo();
}

// 화면에 pendingList를 그려준다.
function paintPendingList(val){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDel = document.createElement("button");
    const btnFinished = document.createElement("button");
    const newId = pendingToDos.length + 1;
    btnDel.innerText = "❌";
    btnDel.addEventListener("click", pendingDelList);
    btnFinished.innerText = "✅";
    btnFinished.addEventListener("click", pendingGetVal);
    span.innerText = val;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(btnDel);
    li.appendChild(btnFinished);
    pendingList.appendChild(li);
    //객체로 text 값과 id 값을 받아둔다.
    const toDoObj = {
        text : val,
        id : newId
    }
    // 객체값을 배열로 push
    pendingToDos.push(toDoObj);
    appendPendingToDo();
}

// task에 입력한 값을 보낸다.
function toDoSubmit(event){
    event.preventDefault();
    const currentValue = task.value;
    paintPendingList(currentValue);
    task.value = "";
}   

//page 를 load 한다.
function loadPage(){
    const pendingToDo = localStorage.getItem("pendingToDo");
    const finishedToDo = localStorage.getItem("finishedToDo");
    if(pendingToDo !== null){
        //pendingToDo를 객체로 구문 변환함. ★ 
        const parsePendingToDo = JSON.parse(pendingToDo);
        // forEach로 각 배열의 값들을 가져옴. ★
        parsePendingToDo.forEach(function(toDo){
            paintPendingList(toDo.text);
        });
    }

    if(finishedToDo !== null){
        const parseFinishedToDo = JSON.parse(finishedToDo);
        parseFinishedToDo.forEach(function(toDo){
            paintFinishedList(toDo.text);
        });
    }
}

function init(){
    loadPage();
    toDoForm.addEventListener("submit", toDoSubmit);
}

init();