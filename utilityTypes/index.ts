interface Task {
  title: string;
  deadline: number;
  priority?: string;
  description?: string;
}

const createTask = (task: Required<Task>) => {
  console.log(task);
};

createTask({
  title: "Уборка",
  deadline: 3,
  priority: "Важное",
  description: "Убраться в комнате",
}); //первое задание

type ProductCategory = "electronics" | "clothing" | "food";

type ProductInfo = {
  name: string;
  price: number;
  stock: number;
};

const products: Record<ProductCategory, ProductInfo[]> = {
  electronics: [
    { name: "iphone 17", price: 80000, stock: 10 },
    { name: "macbook air13 m5", price: 100000, stock: 7 },
  ],
  clothing: [
    { name: "Рубашка", price: 4000, stock: 20 },
    { name: "Шорты", price: 3000, stock: 25 },
  ],
  food: [
    { name: "Гамбургер", price: 400, stock: 50 },
    { name: "Картошка фри", price: 150, stock: 1000 },
  ],
}; // Второе задание

interface Book {
  title: string;
  author: string;
  isbn: number;
  publishedYear: number;
  genres: string;
}

const getBookSummary = (
  book: Pick<Book, "title" | "author" | "publishedYear">,
) => {
  console.log(book.title, book.author, book.publishedYear);
};

getBookSummary({
  title: "Круть",
  author: "Виктор Пелевин",
  publishedYear: 2024,
});

const sanitizeBookData = (book: Omit<Book, "isbn">) => {
  console.log(book);
};

sanitizeBookData({
  title: "Круть",
  author: "Виктор Пелевин",
  publishedYear: 2024,
  genres: "Триллер",
}); // Третье задание

type ApiStatus = "loading" | "success" | "error";

type FinalStatus = Exclude<ApiStatus, "loading">;

const handleStatus = (status: FinalStatus) => {
  console.log(status);
};

handleStatus("success");
handleStatus("error"); //Четвёртое задание
