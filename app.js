let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault();

  //get the input value
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

  //create a todo item
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;

  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = todoMonth + "/" + todoDate;
  todo.appendChild(text);
  todo.appendChild(time);

  //create green check and red trash can
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fa-regular fa-circle-check";"></i>';
  completeButton.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash";"></i>';

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);
  todo.style.animation = "scaleUp .3s forwards";

  section.appendChild(todo);
});
