const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elInputAuthor = document.querySelector(".input-author");
const elList = document.querySelector(".list");

const todos = []


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  const userValue = elInput.value;
  const authorValue = elInputAuthor.value;

  const todo = {
    name: userValue,
    author: authorValue
  }

  todos.push(todo)

  elInput.value = null;

  elInputAuthor.value = null;

  elList.innerHTML = null;

  for(let item of todos){
     const newLi = document.createElement("li");

     newLi.textContent = `${item.name}: (${authorValue})`;

    elList.appendChild(newLi)
  }
})