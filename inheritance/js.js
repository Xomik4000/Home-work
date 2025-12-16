
// ДЗ

class Person {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`)
    }
}

const studentOleg = new Student('Олег', '2')
studentOleg.introduce()
console.log(Student.prototype)
//мы видим что Student.prototype ссылается на прототип(объект) с классом Person
//Он в свою очеречь ссылается на прототим с глобальным классом Object
//Цепочка прототипов такова Student -prototype-> Person -prototype-> Object -> null
// первое задание


class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}`)
    }

    introduce() {
        super.introduce();
        console.log(`Я работаю на позиции ${this.position}`)
    }
}

const employeeElena = new Employee('Елена', 'Сеньор')
employeeElena.work();
employeeElena.introduce() //второе задание

function Vehicle() {}

Vehicle.prototype.move = function() {
    console.log('Машина едет быстро!');
}

function Car() {}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.drive = function() {
    console.log('Водить машину плавно')
}

const carToyota = new Car()
carToyota.move()
carToyota.drive() // Третье задание