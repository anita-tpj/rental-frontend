import { Box, Card, Flex } from "@radix-ui/themes";
import useDeleteGenre from "../../hooks/genres/useDeleteGenre";
import useGenres from "../../hooks/genres/useGenres";
import DeleteItem from "../DeleteItem";
import UpdateGenre from "./UpdateGenre";

type TGenreList = {
  isAuthed: boolean;
};

const GenresList = ({ isAuthed }: TGenreList) => {
  const { data, error, isLoading } = useGenres();
  const deleteGenre = useDeleteGenre();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading genres 😢 <br /> {error.message}
      </p>
    );
  return (
    <Box>
      {data?.map((genre) => (
        <Card key={genre._id} className="my-4">
          <Flex justify="between" align="center">
            {genre.name}
            {isAuthed ? (
              <Flex gap="2">
                <UpdateGenre genre={genre} />
                <DeleteItem onDelete={() => deleteGenre.mutate(genre._id!)} />
              </Flex>
            ) : null}
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default GenresList;
