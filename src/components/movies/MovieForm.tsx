import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Select, TextField } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes/src/index.js";
import { Controller, useForm } from "react-hook-form";
import useAddMovie from "../../hooks/movies/useAddMovie";
import { Movie } from "../../services/movieService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import GenreSelect from "../genres/GenreSelect";
import { MovieFormData, MovieSchema } from "./schema";

function MovieForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<MovieFormData>({
    resolver: zodResolver(MovieSchema),
    mode: "onChange",
  });

  const onAdd = () => {
    reset();
  };

  const onSubmit = (data: Movie) => {
    addMovie.mutate(data);
  };

  const addMovie = useAddMovie(onAdd);

  return (
    <FormModal
      action="add"
      name="Add new movie"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addMovie.isPending}
    >
      <Flex direction="column" gap="3">
        <Box>
          <TextField.Root
            {...register("title")}
            size="3"
            placeholder="Type title"
          />
          {errors.title && (
            <ErrorMessage errorMessage={errors.title.message ?? ""} />
          )}
        </Box>
        <Controller
          control={control}
          name="genreId"
          render={({ field: { value, onChange } }) => (
            <>
              <GenreSelect value={value} onChange={onChange} />
              {errors.genreId && (
                <ErrorMessage errorMessage={errors.genreId.message ?? ""} />
              )}
            </>
          )}
        />
        {errors.genreId && (
          <ErrorMessage errorMessage={errors.genreId.message ?? ""} />
        )}
        <Controller
          control={control}
          name="dailyRentalRate"
          render={({ field: { value, onChange } }) => (
            <Select.Root size="3" value={value} onValueChange={onChange}>
              <Select.Trigger placeholder="Select rate" />
              <Select.Content>
                {[...Array(10)].map((_, i) => (
                  <Select.Item key={i} value={String(i + 1)}>
                    {i + 1}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          )}
        />
        {errors.dailyRentalRate && (
          <ErrorMessage errorMessage={errors.dailyRentalRate.message ?? ""} />
        )}

        <Controller
          control={control}
          name="numberInStock"
          render={({ field: { value, onChange } }) => (
            <Select.Root size="3" value={value} onValueChange={onChange}>
              <Select.Trigger placeholder="Select stock" />
              <Select.Content>
                {[...Array(10)].map((_, i) => (
                  <Select.Item key={i} value={String(i + 1)}>
                    {i + 1}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          )}
        />
        {errors.numberInStock && (
          <ErrorMessage errorMessage={errors.numberInStock.message ?? ""} />
        )}
      </Flex>
    </FormModal>
  );
}

export default MovieForm;
