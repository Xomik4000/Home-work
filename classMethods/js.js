//дз
class Counter {
    #count = 0

    get count() {
        return this.#count
    }

    increment() {
        this.#count++
    }

    decrement() {
        this.#count--
    }

    getCount() {
        console.log(this.count)
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.getCount()
counter.decrement()
counter.getCount()
counter.decrement()
counter.getCount() // первое задание

class EmailValidator {
    static isValid(email) {
        if (email.includes('@')) {
            console.log(`${email} успешно введён`)
        } else {
            console.log('Некорректно введён email')
        }
    }
}

EmailValidator.isValid('ivan@example.com')
EmailValidator.isValid('ivanexample.com') //Второе задание

class Order {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price; 
        this.quantity = quantity
    }

    #calculateTotal() {
        let totalPrice = 0
        totalPrice += this.price * this.quantity
        return totalPrice
    }

    getTotalPrice() {
        console.log(`Общая стоимость товара составит ${this.#calculateTotal()} руб`)
    }

}

const order1 = new Order('Айфон 17', 90000, 2)
order1.getTotalPrice() // Третье задание

