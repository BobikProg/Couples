import {gameLogic} from "./gameLogic"
export function createCard(flippedIcon) {
    
    const cardTemplate = document.querySelector(`#cardTemplate`).cloneNode(true).content;
    const card = cardTemplate.querySelector(`.card`);
    card.querySelector("#flippedIcon").classList.add(`fa-${flippedIcon}`)
    card.addEventListener(`click`, () => {gameLogic(card)})
    return card

}
export function createIconsArray (initialCount) {
    const cardsIcons = [
      "compass", 
      "cloud",
      "play",
      "bolt",
      "stop",
      "cogs",
      "atom",
      "basketball-ball",
      "arrows",
      "angle-left",
      "bars",
      "file",
      "filter",
      "gear",
      "folder",
      "folder-open",
      "shield",
      "scissors",
      "pen-clip"
    ];
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    let duobleCards = dublicateElements(cards)
    return shuffleArray(duobleCards);
    
};