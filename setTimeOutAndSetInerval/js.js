// let count = 10 

// function showTimer(prefix) {
//   console.log(`${prefix}: ${count}`);
//   count--
//   const timer = setTimeout(showTimer, 1000, 'Осталось секунд')
//   if (count < 0) {
//     clearTimeout(timer)
//   }
// }

// setTimeout(showTimer, 1000, 'Осталось секунд')
// //Первое задание

// function showMessageDrinkWater(message) {
//   console.log(message);
// }

// setInterval(showMessageDrinkWater, 1800000, 'Не забудь выпить воды!')
// //Второе задание

const inputDelay = document.getElementById('delay');
const inputText = document.getElementById('text');
const myButton = document.getElementById('myButton')

function handleButton() {
  console.log('Задержка:',inputDelay.value);
  console.log('Текст:', inputText.value);
}

let intervalId = null

myButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    console.log('текст не выводится');
    return
  }
  
  intervalId = setInterval(handleButton, 2000)
  console.log('текст запущен с задержкой');
})

