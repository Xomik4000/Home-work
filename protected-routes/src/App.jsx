import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState("");

  function loginAsUser() {
    setIsAuth(true);
    setRole("user");
  }

  function loginAsAdmin() {
    setIsAuth(true);
    setRole("admin");
  }

  function logout() {
    setIsAuth(false);
    setRole("");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuth={isAuth} role={role} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: (
            <Login loginAsUser={loginAsUser} loginAsAdmin={loginAsAdmin} />
          ),
        },
        {
          element: <ProtectedRoute isAuth={isAuth} />,
          children: [
            {
              path: "profile",
              element: <Profile role={role} logout={logout} />,
            },
          ],
        },
        {
          element: <AdminRoute isAuth={isAuth} role={role} />,
          children: [
            {
              path: "admin",
              element: <Admin logout={logout} />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
