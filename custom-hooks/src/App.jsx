import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}

function App() {
  const { width, height } = useWindowSize();

  return (
     <div>
      <h1>Размер окна</h1>
      <p>Ширина: {width}px</p>
      <p>Высота: {height}px</p>
    </div>
  )
}

export default App;
