import { forwardRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  return <button ref={ref}>Нажми меня</button>;
});

export default CustomButton; // третье задание
