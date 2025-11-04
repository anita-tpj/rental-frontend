import { Flex, Select, TextArea, TextField } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes/src/index.js";
import { useRef, useState } from "react";
import useUpdateMovie from "../../hooks/movies/useUpdateMovie";
import { Movie } from "../../services/movieService";
import FormModal from "../FormModal";
import GenreSelect from "../genres/GenreSelect";

function UpdateMovie({ movie }: { movie: Movie }) {
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(
    movie.genreId ?? movie.genreId ?? undefined
  );
  const [stock, setStock] = useState<string | undefined>(
    movie.numberInStock != null ? String(movie.numberInStock) : undefined
  );
  const [rate, setRate] = useState<string | undefined>(
    movie.dailyRentalRate != null ? String(movie.dailyRentalRate) : undefined
  );
  const refTitle = useRef<HTMLInputElement>(null);

  const onSubmit = (event: HTMLFormElement) => {
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

    updateMovie.mutate({
      id: movie._id!,
      data: {
        title,
        numberInStock,
        dailyRentalRate,
        genreId: selectedGenre,
      },
    });
  };

  const updateMovie = useUpdateMovie();

  return (
    <FormModal name="Update movie" onSubmit={onSubmit}>
      <Flex direction="column" gap="3">
        <TextField.Root
          ref={refTitle}
          defaultValue={movie.title}
          size="3"
          placeholder="Type title"
        />
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
        {/* <TextArea resize="both" placeholder="Type description" /> */}
        {/* <Box width="auto">
          <Button size="3" disabled={addMovie.isPending}>
            {addMovie.isPending ? "SAVING" : "ADD MOVIE"}
          </Button>
        </Box> */}

        {updateMovie.error ? <Box>{updateMovie.error.message};</Box> : null}
      </Flex>
    </FormModal>
  );
}

export default UpdateMovie;
