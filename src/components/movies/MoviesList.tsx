import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import useAuth from "../../hooks/auth/useAuth";
import useDeleteMovie from "../../hooks/movies/useDeleteMovie";
import useMovies from "../../hooks/movies/useMovies";
import DeleteItem from "../DeleteItem";
import RentalFormMovies from "../rentals/RentalFormMovies";
import UpdateMovie from "./UpdateMovie";
import MoviesListSkeleton from "./MoviesListSkeleton";

interface MoviesListProps {
  selectedGenre: string | undefined;
  searchQuery: string;
  sortOrder: string;
}

const MoviesList = ({
  selectedGenre,
  searchQuery,
  sortOrder,
}: MoviesListProps) => {
  const { user } = useAuth();
  const { data, error, isLoading } = useMovies({
    selectedGenre,
    searchQuery,
    sortOrder,
  });
  const deleteMovie = useDeleteMovie();

  if (isLoading) return <MoviesListSkeleton />;
  if (error)
    return (
      <p>
        Error loading movies 😢 <br /> {error.message}
      </p>
    );
  return (
    <Box>
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
            {user ? (
              <Flex direction="column">
                <RentalFormMovies
                  movieId={movie._id!}
                  movieTitle={movie.title}
                  movieStock={!movie.numberInStock}
                />
                {user.isAdmin && (
                  <Flex gap="2" className="mt-2">
                    <UpdateMovie movie={movie} />
                    <DeleteItem
                      onDelete={() => deleteMovie.mutate(movie._id!)}
                    />
                  </Flex>
                )}
              </Flex>
            ) : null}
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default MoviesList;
