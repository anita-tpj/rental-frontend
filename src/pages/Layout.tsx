import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Flex } from "@radix-ui/themes";
import LoginForm from "../components/LoginForm";
import LogOut from "../components/LogOut";
import { useAuthCtx } from "../context/AuthContext";

const Layout = () => {
  const { isAuthed, setIsAuthed } = useAuthCtx();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsAuthed(false);
  };

  const handleLogIn = () => {
    setIsAuthed(true);
  };

  return (
    <Flex direction="column" className="bg-indigo-100 min-h-screen">
      <Box className=" border-b mb-6 text-white bg-indigo-500 p-6">
        <Flex justify="between">
          <h1 className="text-3xl font-bold">Vidly Rental App</h1>
          {isAuthed ? (
            <LogOut onConfirm={handleLogOut} />
          ) : (
            <LoginForm onSuccess={handleLogIn} />
          )}
        </Flex>
      </Box>
      <NavBar />
      <main className="p-6 bg-indigo-100">
        <Outlet />
      </main>
    </Flex>
  );
};

export default Layout;
