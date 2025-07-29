// Дз


const numbers = [4, 10, 16, 26]
const example = (arr) => arr.map(n => (n / 2) * 3)

console.log(example(numbers)); // Первое задание

const user = {
    name: 'Саша',
    age: 24,
    sayHello: function() {
        setTimeout(() => {
            console.log(`Привет, меня зовут ${user.name}, мне ${user.age}`);
        }, 1000) 
    }
}

user.sayHello() //Второе задание

const sum = n => n + n

const higerOrderFunction = (sum, arr) => {
    return arr.map(n => sum(n))
}

console.log(higerOrderFunction(sum, numbers)); // Третье задание
