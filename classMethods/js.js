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
        return this.count
    }

    showCount() {
        console.log(this.getCount())
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.showCount()
counter.decrement()
counter.showCount()
counter.decrement()
counter.showCount() // первое задание

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
        return this.#calculateTotal()
    }

    showTotalPrice() {
        console.log(`Общая стоимость товара составит ${this.getTotalPrice()} руб`)
    }
}

const order1 = new Order('Айфон 17', 90000, 2)
order1.showTotalPrice() // Третье задание

