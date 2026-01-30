import { useState, useRef, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function TimerComponent() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Тик');
//     }, 1000);

//     //функция очистки: вызывается при размонтировании компонента
//     return () => {
//       clearInterval(timer);
//       console.log('Таймер очищен')
//     }
//   }, [])
//   return <div>Смотри в консоль</div>
// }

function Box() {
  const boxRef = useRef(null);
  //ref это просто способ добраться до DOM-элемента,
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth)
    }
  }, [])

  return (
    <div>
      <div ref={boxRef} style={{ width: '50%', background: 'lightblue', padding: '20px'}}>
        Это коробка  
      </div>
      <p>Ширина: {width}px</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Box />
      {/* {show && <TimerComponent />} */}
    </>
  )
}

export default App
