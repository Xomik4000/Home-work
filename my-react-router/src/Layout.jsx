import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <>
      <header>
        <h1>Блог</h1>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}