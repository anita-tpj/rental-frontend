import { Button, Card, Flex } from "@radix-ui/themes";
import useDeleteMovie from "../../hooks/movies/useDeleteMovie";
import useMovies from "../../hooks/movies/useMovies";
import UpdateMovie from "./UpdateMovie";

interface MoviesListProps {
  selectedGenre: string | undefined;
  isAuthed: boolean;
}

const MoviesList = ({ selectedGenre, isAuthed }: MoviesListProps) => {
  const { data, error, isLoading } = useMovies(selectedGenre);
  const deleteMovie = useDeleteMovie();

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
              <p>ID: {movie._id}</p>
            </div>
            {isAuthed ? (
              <Flex gap="2">
                <Button onClick={() => deleteMovie.mutate(movie._id!)}>
                  Delete
                </Button>
                <UpdateMovie movie={movie} />
              </Flex>
            ) : null}
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
