import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import GenreSelect from "../components/GenreSelect";
import MovieForm from "../components/movies/MovieForm";
import MoviesList from "../components/movies/MoviesList";
import SubTitle from "../components/SubTitle";
import useAuth from "../hooks/auth/useAuth";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const { user } = useAuth();

  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Movies" />
        {user ? <MovieForm /> : null}
      </Flex>
      <GenreSelect
        value={selectedGenre}
        onChange={(genre) => setSelectedGenre(genre)}
      />
      <MoviesList selectedGenre={selectedGenre} />
      {/* <Link to="/movies/new">Add new movie to list</Link>
      <Outlet /> */}
    </>
  );
};

export default MoviesPage;
