import {
  Button,
  Card,
  Flex,
  Select,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Box } from "@radix-ui/themes/src/index.js";
import { useRef, useState } from "react";
import useAddMovie from "../../hooks/movies/useAddMovie";
import GenreSelect from "../genres/GenreSelect";
import SubTitle from "../SubTitle";

function MovieForm() {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const [stock, setStock] = useState("");
  const [rate, setRate] = useState("");
  const refTitle = useRef<HTMLInputElement>(null);

  const onAdd = () => {
    if (refTitle.current) refTitle.current.value = "";

    setStock("");
    setRate("");
    setSelectedGenre("");
  };

  const addMovie = useAddMovie(onAdd);

  return (
    <Card>
      <SubTitle subTitle="Add new movie" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = refTitle.current!.value.trim();
          const numberInStock = Number(stock);
          const dailyRentalRate = Number(rate);

          if (!title) {
            console.error("Title is required");
            return;
          }

          if (!selectedGenre) {
            console.error("Genre is required");
            return;
          }

          addMovie.mutate({
            title,
            numberInStock,
            dailyRentalRate,
            genreId: selectedGenre,
          });
        }}
      >
        <Flex direction="column" gap="3">
          <TextField.Root ref={refTitle} size="3" placeholder="Type title" />
          <GenreSelect
            value={selectedGenre}
            onChange={(genre) => setSelectedGenre(genre)}
          />
          <Select.Root size="3" value={stock} onValueChange={setStock}>
            <Select.Trigger placeholder="Select stock" />
            <Select.Content>
              {[...Array(10)].map((_, i) => (
                <Select.Item key={i} value={String(i + 1)}>
                  {i + 1}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Select.Root size="3" value={rate} onValueChange={setRate}>
            <Select.Trigger placeholder="Select rate" />
            <Select.Content>
              {[...Array(10)].map((_, r) => (
                <Select.Item key={r} value={String(r + 1)}>
                  {r + 1}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <TextArea resize="both" placeholder="Type description" />
          <Box width="auto">
            <Button size="3" disabled={addMovie.isPending}>
              {addMovie.isPending ? "SAVING" : "ADD MOVIE"}
            </Button>
          </Box>

          {addMovie.error ? <Box>{addMovie.error.message};</Box> : null}
        </Flex>
      </form>
    </Card>
  );
}

export default MovieForm;
