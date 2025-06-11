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

const arr3 = [1, 2, 3, 4, 5]
console.log(arr[0]) 
const reversedArr3 = []

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr3.push(arr3[i])
}

console.log(reversedArr3) 


//Новые методы
const arr1 = [1, 2, 3, 4, 5]

const reverseArr = []

while(reverseArr.length < arr1.length) {
    reverseArr[reverseArr.length] = arr1[arr1.length - reverseArr.length - 1]
}

console.log(reverseArr) //Цикл While

const arr2 = [1, 2, 3, 4, 5]
const reverseArr2 = []

arr2.forEach(num => {
    reverseArr2.unshift(num)
})

console.log(reverseArr2) //Метод unshift и forEach
//Четвёртое задание 

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
