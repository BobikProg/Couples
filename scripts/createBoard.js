import {startTimer} from "./timer.js";
import {createIconsArray, createCard} from "./cards.js"


const gameBoard = document.querySelector(`#gameBoard`);
const table = document.querySelector(`.table`);

export function createBoard(count, columns) {
    gameBoard.textContent = ""

    const template = document.querySelector(`#gameTableTemplate`).cloneNode(true).content;
    const gameTable = template.querySelector('.table');
    const table__button = template.querySelector(`.table__button`);
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;
    let icons = createIconsArray(count)
    gameBoard.appendChild(gameTable);
    icons.forEach((icon) => {
      gameTable.append(createCard(icon));
    })
    table__button.addEventListener("click", () => {
      console.log(count, columns)

      location.reload()
      const icons = shuffleArray(array);
  })
  gameBoard.append(table__button);
  startTimer()
}