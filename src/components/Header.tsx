import { Box, Flex, Text } from "@radix-ui/themes";
import LogOut from "./auth/LogOut";
import LoginForm from "./auth/LoginForm";
import useAuth from "../hooks/auth/useAuth";

const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <Box className=" border-b mb-6 text-white bg-indigo-500 p-6">
      <Flex justify="between" align="center">
        <h1 className="text-3xl font-bold">Vidly Rental App</h1>
        {user ? (
          <Flex
            align="center"
            gap="2"
            direction={{ initial: "column", md: "row" }}
          >
            <Text size={{ initial: "1", md: "3" }}>Hi, {user.userName}!</Text>
            <LogOut onConfirm={() => logout()} />
          </Flex>
        ) : (
          <LoginForm onSuccess={(token: string) => login(token)} />
        )}
      </Flex>
    </Box>
  );
};

export default Header;
