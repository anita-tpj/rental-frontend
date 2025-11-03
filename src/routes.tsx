import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GenresPage from "./pages/GenresPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MovieForm from "./components/movies/MovieForm";
import PrivateRoutes from "./pages/PrivateRoutes";
import MoviesPage from "./pages/MoviesPage";
import CustomersPage from "./pages/CustomerPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "genres",
        element: <GenresPage />,
      },
      { path: "login", element: <LoginPage /> },

      {
        element: <PrivateRoutes />,
        children: [
          { path: "movies/new", element: <MovieForm /> },
          {
            path: "customers",
            element: <CustomersPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
