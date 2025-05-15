const num = 1 ;

let massage = (num === 0) ? 'Это ноль!'
 : (num < 0) ? 'Отрицательное число!' 
 : 'Положительное число!'
console.log(massage)  // Первое задание

let heightUser = 183 
let transferredWeight = heightUser / 100

let weightUser = 80 
let bmi = weightUser / (transferredWeight * transferredWeight)

if (bmi < 18.5) {
    console.log('Недостаточная масса тела');
} else if (bmi >= 18.5) {
    console.log('НОРМА')
} else if (bmi >= 25) {
    console.log('Избыточная масса тела')
} else if (bmi >= 30) {
    console.log('Ожирение')
} else if (bmi > 35) {
    console.log('Резкое ожирение')
}                                 // второе задание

const month = 13;
let nameMonth;

switch (month) {
    case 1:
        nameMonth = 'Январь';
        break;
    case 2:
        nameMonth = 'Февраль';
        break;
    case 3:
        nameMonth = 'Март';
        break;
    case 4:
        nameMonth = 'Апрель';
        break;
    case 5:
        nameMonth = 'Май';
        break;
    case 6:
        nameMonth = 'Июнь';
        break;
    case 7:
        nameMonth = 'Июль';
        break;
    case 8:
        nameMonth = 'Август';
        break;
    case 9:
        nameMonth = 'Сентябрь';
        break;
    case 10:
        nameMonth = 'Октябрь';
        break;
    case 11:
        nameMonth = 'Ноябрь';
        break;
    case 12:
        nameMonth = 'Декабрь';
        break;
    default :
        nameMonth = 'Неверный месяц'
}

console.log(nameMonth); //Третье задание 

const airpodsName = '3'
let airpodsPrice ;

switch (airpodsName) {
    case '1':
        airpodsPrice = 10000;
        break;
    case '2':
        airpodsPrice = 15000;
        break;
    case '3':
        airpodsPrice = 18000;
        break;
    case '4':
        airpodsPrice = 20000;
        break;
    case 'pro':
        airpodsPrice = 19000;
        break;
    case 'pro max':
        airpodsPrice = 24000 ;
        break;
    default:
        airpodsPrice = 0
        break;
}

console.log(airpodsPrice) //Четвёртое задание 
