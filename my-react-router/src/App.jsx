import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Posts from './pages/Posts';
import About from './pages/About';
import Feedback from './pages/Feedback';

function ErrorPage() {
  return <h2>Страница не найдена</h2>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}