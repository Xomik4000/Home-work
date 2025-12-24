
// ДЗ
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    showCarInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}`)
    } 
}

const car1 = new Car('Toyota', 'Camry')
const car2 = new Car('Ford', 'Focus')
car1.showCarInfo()
car2.showCarInfo() //Первое задание

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    showCarInfo() {
        super.showCarInfo();
        console.log(`Ёмкость батареи: ${this.batteryCapacity}%`)
    }
}

const car3 = new ElectricCar('Tesla', 'X', 98)
car3.showCarInfo() //второе задание

class Vehicles {
    movement() {
        console.log('Осуществляется передвижение')
    }
}

class Ship extends Vehicles {
    movement() {
        console.log('Корабль плывёт')
    }
}

class Airplane extends Vehicles {
    movement() {
        console.log('Самолёт летит')
    }
}

const vehicles = [new Vehicles(), new Ship(), new Airplane()] 
vehicles.forEach(vehicle => vehicle.movement()) //третье задание