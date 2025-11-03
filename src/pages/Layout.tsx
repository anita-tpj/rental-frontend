import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Flex } from "@radix-ui/themes";
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
    <div>
      <div className=" border-b mb-6 text-white bg-indigo-500 p-6">
        <Flex justify="between">
          <h1 className="text-3xl font-bold">Vidly Rental App</h1>
          {isAuthed ? (
            <LogOut onConfirm={handleLogOut} />
          ) : (
            <LoginForm onSuccess={handleLogIn} />
          )}
        </Flex>
      </div>
      <NavBar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
