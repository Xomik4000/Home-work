import { useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return <div>Количество ререндеров: {renderCount.current}</div>;
}

export default RenderCounter; //второе задание
