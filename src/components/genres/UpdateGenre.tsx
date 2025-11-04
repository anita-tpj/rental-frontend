import { zodResolver } from "@hookform/resolvers/zod";
import { Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useUpdateGenre from "../../hooks/genres/useUpdateGenre";
import { Genre } from "../../services/genreService";
import FormModal from "../FormModal";

const Schema = z.object({
  name: z.string().min(5, "The genre name must be at least 5 characters long"),
});

type FormData = z.infer<typeof Schema>;

export const UpdateGenre = ({ genre }: { genre: Genre }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: { name: genre.name },
    mode: "onChange",
  });

  const onUpdate = () => {
    //reset();
  };

  const onSubmit = (data: Genre) => {
    updateGenre.mutate({ id: genre._id!, data });
  };

  const updateGenre = useUpdateGenre(onUpdate);
  return (
    <FormModal
      name="Update"
      description={"Update genre"}
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateGenre.isPending}
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

export default UpdateGenre;
