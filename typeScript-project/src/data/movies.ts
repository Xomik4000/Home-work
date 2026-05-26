import type { Movie } from "../types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Интерстеллар",
    genre: "Фантастика",
    year: 2014,
    image:
      "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg",
    isLiked: false,
  },
  {
    id: 2,
    title: "Во все тяжкие",
    genre: "Драма",
    year: 2008,
    image:
      "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/40250/WimOWj77ZpO9VaqedjthA.jpg",
    isLiked: true,
  },
  {
    id: 3,
    title: "Темный рыцарь",
    genre: "Боевик",
    year: 2008,
    image:
      "https://upload.wikimedia.org/wikipedia/ru/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    isLiked: false,
  },
];
