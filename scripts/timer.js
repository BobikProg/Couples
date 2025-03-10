import { totalFlips } from "./gameLogic";
let intervalId;
export let totalTime = 60;
 let gameOver = false;
export function startTimer() {
    const state__moves = document.querySelector(`.state__moves`); //показывает количество ходов
    const state__time = document.querySelector(`.state__time`); //показывает количество оставшихся секунд
    const card = document.querySelector(`.card`)
  
    intervalId = setInterval(() => {
      totalTime = totalTime - 1 
      state__moves.textContent = `Шаги: ${totalFlips}`
      state__time.textContent = `Время: ${totalTime}` 
  
      if (totalTime === 0) {
        board__input.classList.add(`disabled`);
        clearInterval(intervalId)
        gameOver = true
        alert("Вы проиграли!")
      }
    }, 1000)
  
  
  }
  
  