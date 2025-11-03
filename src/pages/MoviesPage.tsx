import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import GenreSelect from "../components/genres/GenreSelect";
import MovieForm from "../components/movies/MovieForm";
import MoviesList from "../components/movies/MoviesList";
import SubTitle from "../components/SubTitle";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  return (
    <Flex
      gap="9"
      justify="between"
      direction={{ initial: "column", md: "row" }}
    >
      <Box width={{ initial: "100%", md: "55%" }}>
        <SubTitle subTitle="Movies" />
        <GenreSelect
          value={selectedGenre}
          onChange={(genre) => setSelectedGenre(genre)}
        />
        <MoviesList selectedGenre={selectedGenre} />
      </Box>
      <Box width={{ initial: "100%", md: "45%" }}>
        <MovieForm />
      </Box>

      {/* <Link to="/movies/new">Add new movie to list</Link>
      <Outlet /> */}
    </Flex>
  );
};

export default MoviesPage;
