// Домашка

const user = {
    name: 'Саша',
    age: 24,
    hello() {
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
    }
};

user.hello() // Тут контекс ссылается на объект user

const greet = user.hello

greet() 
/*
При вызове данной функции произойдёт следующее  'Hello, my name is , i am undefined years old',
то есть наш контекст будет undefined из-за того, что мы поместили функцию в переменную,
которая находитя глобально, поэтому при вызове, в контекст будет передаваться глобальный объект
window, у него нет таких свойст поэтому нечего не будет передаваться.
*/
//Первое задание

const student = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function() {
        setTimeout(this.greet, 1000)
    }
    // delayedGreet: function() {
    //     setTimeout(() => {
    //         this.greet()
    //     }, 1000)
    // }
    //В setTimeout передаём стрелочную функцию, где контекст будет взят из delayedGreet, 
    //а у него контекст указывает на user, и имя теперь будет отображатся  
}

student.greet()
/* Тут выводится имя потому что, при вызове метода объекта контекст указывает на сам объект,
то есть на user*/

student.delayedGreet()
/*тут выводится undefined, потому что в функции вызванной внутри другой функции контекст будет
указывать на глобальный объект, у глобального объекта нет таких свойств, поэтому undefined
*/
// Второе задание

function carInfo(price, speed) {
    console.log(`${this.brand} стоит ${price}$. Она разгоняется до ${speed} км/ч`);
}

const car1 = { brand: 'BMW'};
const car2 = { brand: 'Opel'};
const car3 = { brand: 'Honda'};

carInfo.call(car1, 500000, 400)
carInfo.apply(car2, [10000, 280])

const hondaInfo = carInfo.bind(car3, 20000, 340)
hondaInfo() // Третье задание

function sayHello() {
    console.log('Hello, ' + this.name);
}

const admin = { name: 'Bob' };
const user2 = { name: 'John' };

const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin()

const sayHelloToUSer = sayHelloToAdmin.bind(user)
sayHelloToUSer()

// const sayHelloToUSer = sayHello.bind(user2)
// sayHelloToUSer() // Исправленный вариант
/*
в консоле sayHelloToAdmin() выведет Hello, Bob, тоже самое выведет sayHelloToUSer(),
в sayHelloToAdmin мы заранее привязываем контекст с помощью blind и возвращаем новую функцию.
в sayHelloToUSer мы второй раз пытаемся перезаписать контекст sayHelloToAdmin, но контекст не перезаписался,
т.к повторный вызов blind на уже привязанной функции не изменит контекст.
*/
// Четвёртое задание
