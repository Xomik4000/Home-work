const numbers = [1, 2, 3, 4, 5]

const squareOfTheNumber = numbers.map(num => num ** 2) 
console.log(squareOfTheNumber) //Первое задание

const Numbers = [1, 2, 2, 3, 4, 5, 5, 5, 6]

const filterNumbers = Numbers.filter((num, index, Numbers) => {
    return Numbers.indexOf(num) === index
})

console.log(filterNumbers) // Второе задание 

const numBers = [1, 2, 3]

const sum = numBers.reduce((total, num) => total + num, 0)

console.log(sum) //Третье задание

const nUmbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const sorting = nUmbers.sort()
console.log(sorting) // Четвёртое задание

const name = 'Саша'
let age = 24
//name = 'Толик' //Ошибка!!!
age = 25

console.log(age)

const people = ['Саша', 'Толик', 'Оля', 'Олеся']
let animals = ['Кошка', 'Собака', 'Шиншилла', 'Хомяк']

people.push('Арнольд', 'Констанция')

animals.unshift('Медведь', 'Лиса')

console.log(people)
console.log(animals)// Пятое задание