import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

// function App() {
//   const [text, setText] = useState("Исходный текст");
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="parent">
//       <h1>{text}</h1>

//       <button onClick={() => setIsOpen(true)}>Изменить текст</button>

//       {isOpen && (
//         <div className="modalOverlay">
//           <div className="modal">
//             <h2>Изменить текст</h2>

//             <input value={text} onChange={(e) => setText(e.target.value)} />

//             <button onClick={() => setIsOpen(false)}>Закрыть</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// } // Без портала

function Modal({ text, setText, onClose }) {
  return createPortal(
    <div className="modalOverlay">
      <div className="modal">
        <h2>Изменить текст</h2>

        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>,
    document.body,
  );
}

function App() {
  const [text, setText] = useState("Исходный текст");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="parent">
      <h1>{text}</h1>

      <button onClick={() => setIsOpen(true)}>Изменить текст</button>

      {isOpen && (
        <Modal text={text} setText={setText} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default App;
