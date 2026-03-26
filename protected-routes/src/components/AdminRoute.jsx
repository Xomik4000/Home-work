import { Navigate, Outlet } from "react-router-dom";

function AdminRoute({ isAuth, role }) {
  if (!isAuth) {
    return <Navigate to='/login' replace />;
  }

  if (role !== "admin") {
    return <Navigate to='/profile' replace />;
  }

  return <Outlet />;
}

export default AdminRoute;
