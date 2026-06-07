import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useTheme } from "../features/theme/hooks/useTheme";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
