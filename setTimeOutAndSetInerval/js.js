let count = 10 
let timer

function showTimer(prefix) {
    console.log(`${prefix}: ${count}`);
    count--;

    if (count >= 0) {
        setTimeout(showTimer, 1000, 'Осталось секунд')
    } 
}

showTimer('Осталось секунд')
// //Первое задание

// function showMessageDrinkWater(message) {
//   console.log(message);
// }

// setInterval(showMessageDrinkWater, 1800000, 'Не забудь выпить воды!')
// //Второе задание

// const inputDelay = document.getElementById('delay');
// const inputText = document.getElementById('text');
// const myButton = document.getElementById('myButton')

// function handleButton() {
//   console.log('Задержка:',inputDelay.value);
//   console.log('Текст:', inputText.value);
// }

// let intervalId = null

// myButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (intervalId !== null) {
//     clearInterval(intervalId);
//     intervalId = null;
//     console.log('текст не выводится');
//     return
//   }
  
//   intervalId = setInterval(handleButton, 2000)
//   console.log('текст запущен с задержкой');
// })

