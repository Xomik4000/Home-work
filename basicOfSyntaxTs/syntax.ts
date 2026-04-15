const users: [string, number][] = [
  ["Саша", 25],
  ["Оля", 22],
  ["Гена", 30],
];

function printUsers(users: [string, number][]): void {
  users.forEach((user) => {
    console.log(`Имя: ${user[0]}, Возраст: ${user[1]}`);
  });
}

printUsers(users); //Первое задание

type Book = {
  title: string;
  author: string;
  year?: number;
  isAvailable: boolean;
};

const book1: Book = {
  title: "Дикий зверь",
  author: "Жоэль Диккер",
  year: 2025,
  isAvailable: true,
};

const book2: Book = {
  title: "Йеллоуфейс",
  author: "Ребекка Куанг",
  isAvailable: false,
};

function checkBookAvailability(book: Book): void {
  if (book.isAvailable) {
    console.log(`Книга "${book.title}" доступна для аренды.`);

    if (book.year !== undefined) {
      console.log(`Год издания: ${book.year}`);
    }
  } else {
    console.log(`Книга "${book.title}" недоступна для аренды.`);
  }
}

checkBookAvailability(book1);
checkBookAvailability(book2); //Второе задание

function printItems(items: string | string[]): void {
  if (typeof items === "string") {
    console.log(items);
  } else {
    items.forEach((item) => {
      console.log(item);
    });
  }
}

printItems("Привет");
printItems(["яблоко", "банан", "груша"]); //Третье задание
