const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  // todoList.length is the shortcut of todo.List.lenght -1, which will stop the loop at the last element of the array. Also i is the index
  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    const html = `<p>
      ${element}
      <button onClick="
        todoList.splice(${i},1)
        renderTodoList();
      ">Delete</button>
    </p>`;
    todoListHTML += html;
  }

  // splice does take 2 values, first the value we want to delete and second how many in our case 1

  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = "";
  renderTodoList();
}
