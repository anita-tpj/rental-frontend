import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import useUpdateGenre from "../../hooks/genres/useUpdateGenre";
import { Genre } from "../../services/genreService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { GenreFormData, GenreSchema } from "./schema";

export const UpdateGenre = ({ genre }: { genre: Genre }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<GenreFormData>({
    resolver: zodResolver(GenreSchema),
    defaultValues: { name: genre.name },
    mode: "onChange",
  });

  const onSubmit = (data: Genre) => {
    updateGenre.mutate({ id: genre._id!, data });
  };

  const updateGenre = useUpdateGenre();
  return (
    <FormModal
      action="update"
      name="Update genre"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateGenre.isPending}
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

export default UpdateGenre;
