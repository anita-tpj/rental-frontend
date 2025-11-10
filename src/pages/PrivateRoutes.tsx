import { Box, Text } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import useAuth from "../hooks/auth/useAuth";

export const PrivateRoutes = () => {
  const { user, login } = useAuth();
  return user ? (
    <Outlet />
  ) : (
    <>
      <Box>You’re not authorized to view this page. Please log in.</Box>
      <LoginForm onSuccess={(token: string) => login(token)} />
    </>
    // <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
