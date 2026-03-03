import { forwardRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref && ref.current) ref.current.focus();
  }, [ref]);

  return <button ref={ref}>Нажми меня</button>;
});

export default CustomButton; // третье задание
