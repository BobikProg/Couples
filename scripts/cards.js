import {gameLogic} from "./gameLogic.js"
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
function dublicateElements(array) {
  let Masive = [];
  array.forEach((item) => {
    Masive.push(item, item);
  });
  return Masive
}
function shuffleArray(array) {
  // Определяем количество элементов массива
  let currentIndex = array.length;

  // Повторяем до тех пор, пока текущий индекс не достиг нуля
  while (currentIndex > 0) {
    // Отнимаем индекс
    currentIndex--;
    // Генерируем рандомный индекс
    const randomIndex = Math.floor(Math.random() * currentIndex);

    // Сохраняем элемент текущего индекса
    const temp = array[currentIndex];
    // По текущему индексу размещаем элемент по случайному индексу
    array[currentIndex] = array[randomIndex];
    // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
    array[randomIndex] = temp;
  };

  // Возвращаем измененный массив
  return array;
}