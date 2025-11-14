let count = 10 

function showTimer(prefix) {
  console.log(`${prefix}: ${count}`);
  count--
  const timer = setTimeout(showTimer, 1000, 'Осталось секунд')
  if (count < 0) {
    clearTimeout(timer)
  }
}

setTimeout(showTimer, 1000, 'Осталось секунд')
//Первое задание

function showMessageDrinkWater(message) {
  console.log(message);
}

setInterval(showMessageDrinkWater, 1800000, 'Не забудь выпить воды!')
//Второе задание
