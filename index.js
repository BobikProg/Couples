import { createBoard } from "./scripts/createBoard.js";

const startButton = document.querySelector(`.board__button`);
const board__input = document.querySelector(`.board__input`);

startButton.addEventListener("click", (event) => {
    event.preventDefault()
  
    let columns = board__input.value;
    let count;
  
    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
      count = columns * columns;
    } else {
      alert("Нужно написать четное число в указанном диапазоне.");
      return;
    }
  
    createBoard(count, columns);
  });