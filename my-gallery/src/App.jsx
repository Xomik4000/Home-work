import { useState, useEffect } from "react";
import "./App.css";
import { Photos } from "./components/Photos";
import { Pagination } from "./components/Pagination";
import { Loader } from "./components/Loader";

const PHOTOS_PER_PAGE = 20;

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const firstIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const lastIndex = firstIndex + PHOTOS_PER_PAGE;
  const totalPages = photos.length / PHOTOS_PER_PAGE;

  const slicedPhoto = photos.slice(firstIndex, lastIndex);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => setPhotos(photos));
  }, []);

  return (
    <div className='App'>
      {photos.length === 0 && <Loader />}
      <Photos slicedPhoto={slicedPhoto}/>
      <Pagination totalPages={totalPages} currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
    </div>
  );
}

export default App;
