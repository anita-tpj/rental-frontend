import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import useAddGenre from "../../hooks/genres/useAddGenre";
import { Genre } from "../../services/genreService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { GenreFormData, GenreSchema } from "./schema";

export const GenreForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<GenreFormData>({
    resolver: zodResolver(GenreSchema),
    mode: "onChange",
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
      action="add"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addGenre.isPending}
    >
      <TextField.Root
        {...register("name")}
        className="grow"
        size="3"
        placeholder="Type genre..."
      />
      {errors.name && <ErrorMessage errorMessage={errors.name.message ?? ""} />}
    </FormModal>
  );
};

export default GenreForm;
