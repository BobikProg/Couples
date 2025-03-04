const board__input = document.querySelector(`.board__input`);
const startButton = document.querySelector(`.board__button`);
const gameBoard = document.querySelector(`#gameBoard`);
const table = document.querySelector(`.table`);
const couple = {
  first: null,
  firstClickable: true,
  second: null,
  secondClickable: true,
}

let totalTime = 60;
let totalFlips;
let intervalId;


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
    startTimer();
  });

function createBoard(count, columns) {
    gameBoard.textContent = ""
    const template = document.querySelector(`#gameTableTemplate`).cloneNode(true).content;
    const gameTable = template.querySelector('.table');
    const table__button = template.querySelector(`.table__button`);
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;
    
    gameBoard.appendChild(gameTable);
    for (let i = 0; i < count; i++) {
      gameTable.append(createCard());
  }
    table__button.addEventListener("click", () => {
      console.log(count, columns)

      location.reload()
      const icons = shuffleArray(array);
  })
  gameBoard.append(table__button);
  gameTable.append(createCard);
}
    
function createCard(flippedIcon) {
    
    const cardTemplate = document.querySelector(`#cardTemplate`).cloneNode(true).content;
    const card = cardTemplate.querySelector(`.card`);
    card.querySelector("#flippedIcon").classList.add(`fa-${flippedIcon}`)
    card.addEventListener(`click`, () => {gameLogic(card)})
    return card

}
function createIconsArray (initialCount) {
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
    let duobleCards = dublicateElements(cardsIcons);
    shuffleArray(currentIndex);
};
function dublicateElements(array) {
  let Masive = [];
  array.forEach((item) => {
    Masive.push(item, item);
  });
  item.slice();
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
function gameLogic(card) {
  // Если обе карточки не кликабельны, ничего не делаем
  if (!couple.firstClickable && !couple.secondClickable) return;

  // Переворачиваем карточку
  card.classList.add('flip');
  totalFlips = totalFlips + 1;
  // Проверяем, кликнута ли первая карточка
  if (couple.first === null) {
    // Если нет, то сохраняем на нее ссылку и считаем кликнутой
    couple.first = card;
    couple.firstClickable = false;
  } else if (couple.second === null && couple.first !== card) {
    // Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
    couple.second = card;
    couple.secondClickable = false;
  }

  // Если какой-либо карточки не кликнуто, ничего не делаем
  if (couple.first === null || couple.second === null) return;

  // Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
  console.log(2, couple.first.firstElementChild.classList, couple.second.firstElementChild.classList)
  const isEqual = couple.first.firstElementChild.classList[2] === couple.second.firstElementChild.classList[2];

  // Если классы одинаковы
  if (isEqual) {
    setTimeout(() => {
      // То перекрашиваем их в зеленый с задержкой в 1 секунду
      couple.first.classList.add('successfully');
      couple.second.classList.add('successfully');

      // Сбрасываем все ссылки и состояния
      refresh();
    }, 1000);
  } else {
    setTimeout(() => {
      // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
      couple.first.classList.remove('flip');
      couple.second.classList.remove('flip');

      // Сбрасываем все ссылки и состояния
      isWin();
      refresh();
    }, 1000);
  }

  // Функция сброса ссылок и состояний
  function refresh() {
    couple.first = null;
    couple.second = null;
    couple.firstClickable = true;
    couple.secondClickable = true;
  }
}
function isWin() {
  const gameTable = document.querySelector('.table');
  if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
    setTimeout(() => {
      alert("Вы победили!");
      if (totalTime === 0) {
        board__input.classList.add(`disabled`);
        
      }  
    }, 1000)
  }
}
function startTimer() {
  const state__moves = document.querySelector(`.state__moves`); //показывает количество ходов
  const state__time = document.querySelector(`.state__time`); //показывает количество оставшихся секунд
  intervalId = setInterval(() => {
    totalTime = totalTime - 1 
    state__time.value = totalTime

    state__moves.value = totalFlips
    if (totalTime === 0) {
      board__input.classList.add(`disabled`);
      clearInterval(intervalId)
    }

  }, 1000)


}

