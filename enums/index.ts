enum ProductCategory {
  Electronics,
  Books,
  Clothing,
}

function getCategoryDiscount(category: ProductCategory) {
  switch (category) {
    case ProductCategory.Books:
      return 10;
    case ProductCategory.Clothing:
      return 0;
    case ProductCategory.Electronics:
      return 5;
    default:
      return 0;
  }
} //Первое задание

enum DifficultyLevel {
  Easy,
  Medium,
  Hard,
}

function getTimeLimit(level: DifficultyLevel) {
  switch (level) {
    case DifficultyLevel.Easy:
      return 30;
    case DifficultyLevel.Medium:
      return 60;
    case DifficultyLevel.Hard:
      return 120;
    default:
      return 0;
  }
} // Второе задание

enum ShippingStatus {
  Pending,
  Shipped,
  Delivered,
  Returned,
}

function getStatusMessage(status: ShippingStatus) {
  switch (status) {
    case ShippingStatus.Pending:
      return "Заказ в ожидании";
    case ShippingStatus.Shipped:
      return "Заказ отправлен";
    case ShippingStatus.Delivered:
      return "Заказ доставлен";
    case ShippingStatus.Returned:
      return "Заказ вернули";
    default:
      return "Статус заказа не определён";
  }
} //Третье задание
