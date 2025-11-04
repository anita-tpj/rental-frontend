import { zodResolver } from "@hookform/resolvers/zod";
import { Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useAddGenre from "../../hooks/genres/useAddGenre";
import { Genre } from "../../services/genreService";
import FormModal from "../FormModal";

const Schema = z.object({
  name: z.string().min(5),
});

type FormData = z.infer<typeof Schema>;

export const GenreForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onAdd = () => {
    reset();
  };
  const onSubmit = (data: Genre) => {
    addGenre.mutate(data);
  };

  const addGenre = useAddGenre(onAdd);

  return (
    <FormModal
      name="Add new genre"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addGenre.isPending}
    >
      <TextField.Root
        {...register("name")}
        className="grow"
        size="3"
        placeholder="Type genre..."
      />
      {errors.name && (
        <Text color="red" size="2">
          *{errors.name.message}
        </Text>
      )}
    </FormModal>
  );
};

export default GenreForm;
