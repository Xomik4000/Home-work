
// ДЗ

class Book {
    constructor(options) {
        this.title = options.title
        this.author = options.author
        this.pages = options.pages
    }
    showBookInfo() {
        console.log(`Книга: ${this.title}, автор: ${this.author}, страниц: ${this.pages}`)
    }
}

const book1 = new Book({
    title: 'IT',
    author: 'Стивен кинг',
    pages: 1138
})

book1.showBookInfo() // Первое задание

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`)
        console.log(`Email: ${this.email}`)
    }
}

const user1 = new User('Алексей', 'alex.@bk.ru')
const user2 = new User('Анна', 'anna12.@bk.com')

user1.displayInfo()
user2.displayInfo() //Второе задание



class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get height() {
        return this._height
    }

    set height(value) {
        if (value > 0) {
            this._height = value
        } else {
            console.error('Высота должна быть положительным числом')
        }
    }

    get area() {
       return this.width * this.height; //в примере тут просто this.height 
    }

    get perimeter() {
        return 2 * (this._width + this._height)
    }

    set width(value) {
        if (value <= 0) {
            console.error('Ширина должна быть положительным числом')
        } else {
            this._width = value
        }
    }

    get width() {
        return this._width
    }
}


const myRect = new Rectangle(5, 10);
console.log(myRect.area)
console.log(myRect.perimeter)

myRect.height = -3
console.log(myRect.height) //третье задание