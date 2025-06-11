function average(...numbers) { 
   const  sum = numbers.reduce((acc, num) => acc + num, 0)
   return sum / numbers.length
}

console.log(average(1, 2, 3, 4, 5, 6)) //Первое задание

function person({ name, age, country }) {
    console.log(`Name: ${name}, age: ${age}, country: ${country}`)
}

const user = {
    name: 'Sasha',
    age: 24,
    country: 'Russian'
}

person(user) //Второе задание

const films = {
    horror: ['Оно', ['Заклятие 1', 'Заклятите 2'], 'Сплит', 'Кловерфилд'],
    cartoon: {
        name: 'Шрэк',
        parts: 4,   
    }
}

const { horror: [a, [b, c], ...tail], cartoon: { name, ...rest} } = films

console.log(tail) //Третье задание

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const newArray = [0, 8, ...array1, 100, 87, ...array2]
console.log(newArray) //Четвёртое задание
