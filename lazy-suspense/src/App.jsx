import { Suspense, lazy, useState } from "react";
import "./App.css";

const LazyComponent = lazy(() => import("./components/BigComponent"));

function App() {
  const [show, setShow] = useState(false);

  function showComponent() {
    setShow(true);
  }

  return (
    <>
      <button onClick={showComponent}>Показать компонент</button>
      {show && (
        <Suspense fallback={<p>Загрузка компонента...</p>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
}

export default App;
