import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
