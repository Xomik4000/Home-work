for (let i = 1; i <= 10; i++) {
    console.log(i)
} //первое задание

let sum = 0
let i = 1
while (i <= 100) {
    sum += i
    i++
}
console.log(`Сумма чисел от 1 до 100 равна ${sum}`) //Второе задание


 outerLoop: for (let num = 2; num <= 100; num++) {
    for(let divisor = 2; divisor <= num / 2; divisor ++) {
        if (num % divisor === 0) {
            continue outerLoop
        }
    }
    console.log(num)
} // Третье задание




oiterLoop: 
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Нужное число:", i);
    break oiterLoop; 
  }
} //Доп задание

