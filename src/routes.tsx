import { createBrowserRouter } from "react-router-dom";
import MovieForm from "./components/movies/MovieForm";
import CustomersPage from "./pages/CustomerPage";
import ErrorPage from "./pages/ErrorPage";
import GenresPage from "./pages/GenresPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MoviesPage from "./pages/MoviesPage";
import PrivateRoutes from "./pages/PrivateRoutes";
import RentalsPage from "./pages/RentalPage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "genres",
        element: <GenresPage />,
      },

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
          {
            path: "rentals",
            element: <RentalsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
