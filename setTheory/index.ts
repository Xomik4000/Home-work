type BasicProduct = {
  name: string;
  price: number;
};

type DiscountProduct = {
  discount: number;
};

type FeaturedProduct = BasicProduct & DiscountProduct;

function showProduct(product: FeaturedProduct): void {
  console.log(
    `Товар: ${product.name}, Цена: ${product.price}, Скидка: ${product.discount}%`,
  );
}

const phone: FeaturedProduct = {
  name: "iphone 17",
  price: 80000,
  discount: 15,
};

showProduct(phone); //Первое задание

let value: unknown = "Привет";

function checkValue(data: unknown): void {
  if (typeof data === "string") {
    console.log("Это строка:", data);
  } else if (typeof data === "number") {
    console.log("Это число:", data);
  } else if (typeof data === "boolean") {
    console.log("Это boolean:", data);
  } else {
    console.log("Неизвестный тип");
  }
}

checkValue(value);
checkValue(123);
checkValue(true); //Второе задание
