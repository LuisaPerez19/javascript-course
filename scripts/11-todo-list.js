const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "make bed",
    dueDate: "2022-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  // todoList.length is the shortcut of todo.List.lenght -1, which will stop the loop at the last element of the array. Also i is the index
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // the below is a shorcut of the two above, instead of writing two different variables
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name} </div>
      <div>${dueDate} </div>
      <button onClick="
        todoList.splice(${i},1)
        renderTodoList();
      ">Delete</button>
      `;
    todoListHTML += html;
  }

  // splice does take 2 values, first the value we want to delete and second how many in our case 1

  // console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputEelement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputEelement.value;
  todoList.push({
    // name: name,
    // dueDate: dueDate, when both are the same we can just use name and due Date to re factor, shorhadn property sytax
    name,
    dueDate,
  });
  inputElement.value = "";
  renderTodoList();
}
