import { useState, useEffect } from "react";
import "./App.css";

function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <h2>Загрузка...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

function UserCard() {
  return <h1>Компонент загрузился</h1>;
}

const UserCardWidthLoading = withLoading(UserCard);

function App() {
  return (
    <>
      <UserCardWidthLoading />
    </>
  );
}

export default App;
