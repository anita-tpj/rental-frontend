import { Flex } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Flex direction="column" className="bg-indigo-100 min-h-screen">
      <header>
        <Header />
      </header>
      <nav>
        <NavBar />
      </nav>
      <main className="p-6 bg-indigo-100">
        <Outlet />
      </main>
      <footer className="mt-auto p-4 bg-indigo-300">
        <Footer />
      </footer>
    </Flex>
  );
};

export default Layout;
