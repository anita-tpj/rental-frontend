import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import GenreSelect from "../components/GenreSelect";
import MovieForm from "../components/movies/MovieForm";
import MoviesList from "../components/movies/MoviesList";
import SubTitle from "../components/SubTitle";
import useAuth from "../hooks/auth/useAuth";
import SeachInput from "../components/SeachInput";
import SortSelect from "../components/SortSelect";

const MoviesPage = () => {
  const { user } = useAuth();
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

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
      <SeachInput onSearch={(query) => setSearchQuery(query)} />
      <Flex justify="between" gap="4" mt="4">
        <GenreSelect
          value={selectedGenre}
          onChange={(genre) => setSelectedGenre(genre)}
        />
        <SortSelect
          value={sortOrder}
          onChange={(order) => setSortOrder(order)}
        />
      </Flex>

      <MoviesList
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
        sortOrder={sortOrder}
      />
    </>
  );
};

export default MoviesPage;
