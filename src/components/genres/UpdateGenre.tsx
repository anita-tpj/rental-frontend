import { Flex, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useUpdateGenre from "../../hooks/genres/useUpdateGenre";
import FormModal from "../FormModal";

type TUpdateGenre = {
  genreId: string;
};

export const UpdateGenre = ({ genreId }: TUpdateGenre) => {
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    updateGenre.mutate({
      id: genreId,
      data: { name: ref.current?.value || "" },
    });
  };

  const updateGenre = useUpdateGenre();
  return (
    <FormModal name="Update" description={"Update genre"} onSubmit={onSubmit}>
      <Flex gap="4" align="center">
        <TextField.Root
          className="grow"
          ref={ref}
          size="3"
          placeholder="Type genre..."
        />
      </Flex>
    </FormModal>
  );
};

export default UpdateGenre;
