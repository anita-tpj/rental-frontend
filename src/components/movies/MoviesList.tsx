import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import useDeleteMovie from "../../hooks/movies/useDeleteMovie";
import useMovies from "../../hooks/movies/useMovies";
import DeleteItem from "../DeleteItem";
import RentalFormMovies from "../rentals/RentalFormMovies";
import UpdateMovie from "./UpdateMovie";

interface MoviesListProps {
  selectedGenre: string | undefined;
  isAuthed: boolean;
}

const MoviesList = ({ selectedGenre, isAuthed }: MoviesListProps) => {
  const { data, error, isLoading } = useMovies(selectedGenre);
  const deleteMovie = useDeleteMovie();

  if (isLoading)
    return (
      <Flex align="center" justify="center" className="h-{500px}">
        <Spinner size="3" />
      </Flex>
    );
  if (error)
    return (
      <p>
        Error loading movies 😢 <br /> {error.message}
      </p>
    );
  return (
    <div>
      {data?.map((movie) => (
        <Card key={movie._id} className="my-4">
          <Flex justify="between">
            <div>
              <p>Title: {movie.title}</p>
              <p>Genre: {movie.genre?.name}</p>
              <p>Daily rental rate: {movie.dailyRentalRate}$</p>
              <p>Stock: {movie.numberInStock}</p>
              <p>ID: {movie._id}</p>
            </div>
            {isAuthed ? (
              <Flex direction="column">
                <RentalFormMovies
                  movieId={movie._id!}
                  movieTitle={movie.title}
                />
                <Flex gap="2" className="mt-2">
                  <UpdateMovie movie={movie} />
                  <DeleteItem onDelete={() => deleteMovie.mutate(movie._id!)} />
                </Flex>
              </Flex>
            ) : null}
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
