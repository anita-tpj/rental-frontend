import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import GenreSelect from "../components/genres/GenreSelect";
import MovieForm from "../components/movies/MovieForm";
import MoviesList from "../components/movies/MoviesList";
import SubTitle from "../components/SubTitle";
import { useAuthCtx } from "../context/AuthContext";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const { isAuthed } = useAuthCtx();

  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5"
      >
        <SubTitle subTitle="Movies" />
        {isAuthed ? <MovieForm /> : null}
      </Flex>
      <GenreSelect
        value={selectedGenre}
        onChange={(genre) => setSelectedGenre(genre)}
      />
      <MoviesList selectedGenre={selectedGenre} isAuthed={isAuthed} />
      {/* <Link to="/movies/new">Add new movie to list</Link>
      <Outlet /> */}
    </>
  );
};

export default MoviesPage;
