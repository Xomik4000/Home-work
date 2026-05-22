type Person = {
  name: string;
  age: number;
};

type Organization = {
  name: string;
  employees: number;
};

function printDetails(details: Person | Organization) {
  if ("age" in details && typeof details.age === "number") {
    console.log(`Имя: ${details.name}, Возраст: ${details.age}`);
  } else {
    console.log(
      `В организации ${details.name} работают ${details.employees} сотрудников`,
    );
  }
}

const person: Person = {
  name: "Саша",
  age: 25,
};

const organization: Organization = {
  name: "МТС",
  employees: 20000,
};

printDetails(person);
printDetails(organization); //Первое задание

function processInput(input: string | number | null) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input * 10);
  } else {
    console.log("empty value");
  }
}

processInput("hello");
processInput(10);
processInput(null); //второе задание

interface Car {
  drive: () => void;
}

interface Bicycle {
  pedal: () => void;
}

function isCar(vehicle: Car | Bicycle): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function isBicycle(vehicle: Car | Bicycle): vehicle is Bicycle {
  return (vehicle as Bicycle).pedal !== undefined;
}

function identifyVehicle(vehicle: Car | Bicycle) {
  if (isCar(vehicle)) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}

const car: Car = {
  drive: () => console.log("Машина едет"),
};

const bicycle: Bicycle = {
  pedal: () => console.log("Велосипед крутит педали"),
};

identifyVehicle(car);
identifyVehicle(bicycle); //третье задание
