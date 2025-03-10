import { startTimer, totalTime } from "./timer";
const couple = {
    first: null,
    firstClickable: true,
    second: null,
    secondClickable: true,
  }
export let totalFlips = 0;
export function gameLogic(card) {
    if (gameOver) return 
      totalFlips = totalFlips + 1;
      // Если обе карточки не кликабельны, ничего не делаем
      if (!couple.firstClickable && !couple.secondClickable) return;
    
      // Переворачиваем карточку
      card.classList.add('flip');
     
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
      isWin()
}
function isWin() {
  
    const gameTable = document.querySelector('.table');
    
      console.log(Array.from(gameTable.children))
    if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
      console.log("isWin",)
      setTimeout(() => {
        gameOver = true
        alert("Вы победили!");
  
        if (totalTime === 0) {
          board__input.classList.add(`disabled`);
  
        } 
        clearInterval(intervalId)
      }, 1000)
    } //else {
    //   alert("Вы проиграли!")
    // }
    
  }
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