const board__input = document.querySelector(`.board__input`);
const startButton = document.querySelector(`.board__button`);
const gameBoard = document.querySelector(`#gameBoard`);
const table = document.querySelector(`.table`);
const table__button = document.querySelector(`.table__button`);

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

function createBoard() {
    const template = document.querySelector(`#gameTableTemplate`).cloneNode(true).content;
    const gameTable = template.querySelector('.table');
    let columns = 1;
    gameTable.style = 
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    ;
    gameBoard.appendChild(table);
    template.appendChild(table);
}
    table__button.addEventListener("click", () => {
    location.reload();
    for (let i = 0; i < count; i++) {
        gameTable.append(createCard());
    }
})
function createCard() {
    const card = document.querySelector(`.card`);
    const cardTemplate = document.querySelector(`#cardTemplate`).cloneNode(true).content;
    let count;
}