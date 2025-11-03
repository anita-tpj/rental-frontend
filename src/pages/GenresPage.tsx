import { Box, Button, Card, Flex, TextField } from "@radix-ui/themes";

import { useRef } from "react";
import useAddGenre from "../hooks/genres/useAddGenre";
import useDeleteGenre from "../hooks/genres/useDeleteGenre";
import useGenres from "../hooks/genres/useGenres";
import SubTitle from "../components/SubTitle";

const GenresPage = () => {
  const { data, error, isLoading } = useGenres();
  const ref = useRef<HTMLInputElement>(null);
  const deleteGenre = useDeleteGenre();

  const onAdd = () => {
    if (ref.current) ref.current.value = "";
  };
  const addGenre = useAddGenre(onAdd);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading genres 😢 <br /> {error.message}
      </p>
    );

  return (
    <>
      <Flex
        gap="8"
        justify="between"
        direction={{ initial: "column", md: "row" }}
      >
        <Box width={{ initial: "100%", md: "50%" }}>
          <SubTitle subTitle="Add new genre" />
          <Card>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                addGenre.mutate({ name: ref.current?.value || "" });
              }}
            >
              <Flex gap="4" align="center">
                <TextField.Root
                  className="grow"
                  ref={ref}
                  size="3"
                  placeholder="Type genre..."
                />
                <Button size="3">ADD GENRE</Button>
              </Flex>
            </form>
          </Card>
        </Box>
        <Box width={{ initial: "100%", md: "50%" }}>
          <SubTitle subTitle="Genres" />
          {data?.map((genre) => (
            <Card key={genre._id} className="my-4">
              <Flex justify="between" align="center">
                {genre.name}
                <Button
                  onClick={() => {
                    deleteGenre.mutate(genre._id!);
                  }}
                >
                  Delete
                </Button>
              </Flex>
            </Card>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default GenresPage;
