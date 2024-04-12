// 요소 선택 및 배열 선언
const todoList = document.getElementById("todo-list"); // ul
const todoForm = document.getElementById("todo-form"); // form
let todoArr = [];

const title = document.querySelector('h1')
const name = prompt("이름을 입력하세요");
title.innerText = `${name} 님! 이것을 해주세요!`

// 로컬 저장소에 저장하기
function saveTodos() {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem("myTodos", todoString);
}

// 로컬 저장소에서 가져오기
function loadTodos() {
  const myTodos = localStorage.getItem("myTodos");
  if (myTodos !== null) {
    todoArr = JSON.parse(myTodos);
    displayTodos();
  }
}
loadTodos();

// 할일 삭제
function handleTodoDelBtnClick(clickedID) {
  todoArr = todoArr.filter(function (aTodo) {
    return aTodo.todoId !== clickedID;
  });
  displayTodos();
  saveTodos();
}

// 할일 수정
function handleTodoItemClick(clickedID) {
  todoArr = todoArr.map(function (aTodo) {
    if (aTodo.todoId === clickedID) {
      return {
        ...aTodo,
        todoDone: !aTodo.todoDone,
      };
    } else {
      return aTodo;
    }
  });
  displayTodos();
  saveTodos();
}

// 할일 보여주기
function displayTodos() {
  todoList.innerHTML = "";
  todoArr.forEach(function (aTodo) {
    const todoItem = document.createElement("li");
    const todoDelBtn = document.createElement("span");
    todoDelBtn.textContent = "X";
    todoItem.textContent = aTodo.todoText;
    todoItem.title = "완료하려면 클릭!";
    if (aTodo.todoDone) {
      todoItem.classList.add("done");
    } else {
      todoItem.classList.remove("done");
    }
    todoDelBtn.title = "삭제할거면 클릭!";

    todoItem.addEventListener("click", function () {
      handleTodoItemClick(aTodo.todoId);
    });

    todoDelBtn.addEventListener("click", function () {
      handleTodoDelBtnClick(aTodo.todoId);
    });

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}

// 할일 추가
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoArr.push(toBeAdded);
  todoForm.todo.value = "";
  displayTodos();
  saveTodos();
});
