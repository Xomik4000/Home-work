
//ДЗ
const person = {
    name: 'Александр',
    age: 25
}

Object.defineProperty(person, 'name', {
    writable: false
})

Object.defineProperty(person, 'age', {
    writable: false
})

console.log(person.name)
console.log(person.age)

person.name = 'Боб'
person.age = 23

console.log(person.name)
console.log(person.age) //Первое задание

const laptop = {
    os: 'MacOs',
    displaySize: 15
}

Object.defineProperties(laptop, {
    os: {
        enumerable: true
    },
    displaySize: {
        enumerable: false
    }
})

for (const keys in laptop) {
    console.log(keys)
} //Второе задание
