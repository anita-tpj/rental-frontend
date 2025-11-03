import { Button, Card, Flex } from "@radix-ui/themes";
import useDeleteMovie from "../../hooks/movies/useDeleteMovie";
import useMovies from "../../hooks/movies/useMovies";
import { useAuthCtx } from "../../context/AuthContext";

interface MoviesListProps {
  selectedGenre: string | undefined;
}

const MoviesList = ({ selectedGenre }: MoviesListProps) => {
  const { data, error, isLoading } = useMovies(selectedGenre);
  const deleteMovie = useDeleteMovie();
  const { isAuthed } = useAuthCtx();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading genres 😢 <br /> {error.message}
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
            </div>
            {isAuthed ? (
              <Button onClick={() => deleteMovie.mutate(movie._id!)}>
                Delete
              </Button>
            ) : null}
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
