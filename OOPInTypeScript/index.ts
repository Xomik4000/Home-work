class Employee {
  private name: string;
  private position: string;
  protected salary: number;

  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  public showInformation() {
    console.log(
      `Информация о сотруднике: Имя: ${this.name}, Должность: ${this.position}`,
    );
  }
}

class Manager extends Employee {
  public department: string;

  constructor(
    name: string,
    position: string,
    salary: number,
    department: string,
  ) {
    super(name, position, salary);
    this.department = department;
  }

  public showSalary(): void {
    console.log(`Зарплата менеджера: ${this.salary} руб.`);
  }
}

const manager = new Manager("Иван", "Менеджер", 120000, "Продажи");

manager.showInformation();
manager.showSalary(); //Первое задание

abstract class Employee1 {
  abstract calculateSalary(
    salary: number,
    months?: number,
    watch?: number,
  ): void;
}

class FullTimeEmployeel extends Employee1 {
  calculateSalary(salary: number, months: number): void {
    console.log(
      `За ${months} месяцев работы, зарплата составит ${salary * months}`,
    );
  }
}

class Freelancer extends Employee1 {
  calculateSalary(salary: number, watch: number): void {
    console.log(
      `За ${watch} часов работы, фрилансер заработает ${salary * watch} рублей`,
    );
  }
}

const fullTimeEmployeel = new FullTimeEmployeel();
fullTimeEmployeel.calculateSalary(120000, 6)

const freelancer = new Freelancer();
freelancer.calculateSalary(1000, 12); //Второе задание


interface Dictionary {
  [key: string]: any
}

class MultiLanguageDictionary {
  private translations: Dictionary = {};

  addWord(word: string, language: string, translation: string): void {
    if (!this.translations[word]) {
      this.translations[word] = {}
    }
    this.translations[word][language] = translation
  }

  getTranslation(word: string, language: string): string | undefined {
    return this.translations[word]?.[language]
  }

  print(): void {
    console.log(this.translations)
  }
}

const dict = new MultiLanguageDictionary();

dict.addWord('cat', 'ru', 'кот')
dict.addWord('cat', 'de', 'Katze')
dict.addWord('cat', 'fr', 'chat')

console.log(dict.getTranslation('cat', 'ru'))
console.log(dict.getTranslation('cat', 'de'))
console.log(dict.getTranslation('cat', 'fr'))//Третье задание