import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import GenreSelect from "../components/GenreSelect";
import MovieForm from "../components/movies/MovieForm";
import MoviesList from "../components/movies/MoviesList";
import SubTitle from "../components/SubTitle";
import useAuth from "../hooks/auth/useAuth";
import SeachInput from "../components/SeachInput";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      <Flex justify="between" gap="4">
        <GenreSelect
          value={selectedGenre}
          onChange={(genre) => setSelectedGenre(genre)}
        />
        <SeachInput onSearch={(query) => setSearchQuery(query)} />
      </Flex>

      <MoviesList selectedGenre={selectedGenre} searchQuery={searchQuery} />
      {/* <Link to="/movies/new">Add new movie to list</Link>
      <Outlet /> */}
    </>
  );
};

export default MoviesPage;
