import { useAuthCtx } from "../context/AuthContext";
import { Box, Flex } from "@radix-ui/themes";
import LogOut from "./auth/LogOut";
import LoginForm from "./auth/LoginForm";

const Header = () => {
  const { isAuthed, setIsAuthed } = useAuthCtx();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsAuthed(false);
  };

  const handleLogIn = () => {
    setIsAuthed(true);
  };
  return (
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
  );
};

export default Header;
