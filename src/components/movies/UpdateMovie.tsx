import { Flex, Select, TextField } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes/src/index.js";
import useUpdateMovie from "../../hooks/movies/useUpdateMovie";
import { Movie } from "../../services/movieService";
import FormModal from "../FormModal";
import GenreSelect from "../genres/GenreSelect";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MovieFormData, MovieSchema } from "./schema";
import ErrorMessage from "../ErrorMessage";

function UpdateMovie({ movie }: { movie: Movie }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<MovieFormData>({
    resolver: zodResolver(MovieSchema),
    mode: "onChange",
    defaultValues: {
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
      genreId: movie.genreId,
    },
  });

  const onSubmit = (data: Movie) => {
    updateMovie.mutate({
      id: movie._id!,
      data,
    });
  };

  const updateMovie = useUpdateMovie();

  return (
    <FormModal
      name="Update movie"
      action="update"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateMovie.isPending}
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
            <Select.Root
              size="3"
              value={String(value)}
              onValueChange={onChange}
            >
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
            <Select.Root
              size="3"
              value={String(value)}
              onValueChange={onChange}
            >
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

export default UpdateMovie;
