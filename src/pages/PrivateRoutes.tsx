import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export const PrivateRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
